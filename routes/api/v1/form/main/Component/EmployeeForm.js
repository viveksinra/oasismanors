const ComplianceDocs = require("../../../../../../Models/Private/Common/ComplianceDocs");
const Employee = require("../../../../../../Models/Private/Main/Employee");
const { formatDateToShortMonth } = require("../../../../../../utils/dateFormat");
const { findUserOrProspect } = require("../../../../../../utils/generalFun/userIdToDetail");

const ComFormData = async (comId, allEmployeeForms) => {
    const newForms = [];
    let anyMissedForm = false;
    for (const form of allEmployeeForms) {
        try {
            const myForm = await ComplianceDocs.findOne({ formNoLink: form.formNoLink, employeeId: comId }).exec();
            const uploadedBy = myForm && myForm.user ? await findUserOrProspect(myForm.user) : {};
            
            const newForm = {
                formName: form.formName,
                formNo: form.formNo,
                formNoLink: form.formNoLink || myForm.formNoLink,
                required: form.required,
                present: form.present || Boolean(myForm),
                lastModified: formatDateToShortMonth(myForm?.date) || form.lastModified,
                lastUploadBy: uploadedBy?.firstName ? `${uploadedBy?.lastName} ${uploadedBy?.firstName}` : form.lastUploadBy,
            };
            if(newForm.required && !newForm.present){
            anyMissedForm = true
        }
            newForms.push(newForm);
        } catch (err) {
            console.error(err);
        }
    }

    return {newForms,anyMissedForm};
};

const EmployeeData = async (req, res,myMatch) => {
    try {
        const allEmployees = await Employee.aggregate([
            { $match: myMatch },
            {
                $project: {
                    employeeName: 1,
                    buildingNumber: 1,
                    licenseNumber: 1,
                    licenseeName:1,
                    licenseeMobileNumber: 1,
                },
            },
        ]).exec();

        const employeeData = await compileAllForm(allEmployees)

        return employeeData;
    } catch (error) {
        console.error(error);
        return [];
    }
};
    
const compileAllForm = async(allEmployees) => { 

    const employeeData = await Promise.all(
        allEmployees.map(async (employee) => {
        const tforms = await ComFormData(employee._id, allEmployeeForms);
        const forms = tforms.newForms;
        const anyMissedForm = tforms.anyMissedForm;
        
        return {
            _id: employee._id,
            employeeName: employee?.employeeName,
            buildingNumber: employee?.buildingNumber,
            licenseNumber: employee?.licenseNumber,
            licenseeName: employee?.licenseeName,
            licenseeMobileNumber: employee?.licenseeMobileNumber,
            missingForm:anyMissedForm? true:false,
            forms,
        };
    }));

    return employeeData;

}
    const allEmployeeForms = [
        {
            formName:"Register of Facility (Clients/Residents)",
         formNo:"LIC 9020",formNoLink:"lic9020",required:true,present:false,
         lastModified:"",lastUploadBy:""
        },
        {formName:"Identification and Emergency Information",formNo:"LIC 601",formNoLink:"lic601",
        required:true,present:false,lastModified:"",lastUploadBy:""},
     
   ]

     module.exports = EmployeeData