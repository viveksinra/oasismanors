const ComplianceDocs = require("../../../../../../Models/Private/Common/ComplianceDocs");
const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToShortMonth } = require("../../../../../../utils/dateFormat");
const { findUserOrProspect } = require("../../../../../../utils/generalFun/userIdToDetail");

const ResFormData = async (resId, allResidentForms) => {
    const newForms = [];
    let anyMissedForm = false;
    for (const form of allResidentForms) {
        try {
            const myForm = await ComplianceDocs.findOne({ formNoLink: form.formNoLink, residenceId: resId }).exec();
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

const ResidenceData = async (req, res,myMatch) => {
    try {
        const allResidents = await Prospect.aggregate([
            { $match: myMatch },
            {
                $project: {
                    userImage: 1,
                    firstName: 1,
                    lastName: 1,
                    community:1,
                    floor: 1,
                    room: 1,
                },
            },
        ]).exec();

        const residentData = await Promise.all(allResidents.map(async (resident) => {
            const tforms = await ResFormData(resident._id, allResidentForms);
            const forms = tforms.newForms;
            const anyMissedForm = tforms.anyMissedForm;
            
            return {
                _id: resident._id,
                residentName: `${resident.firstName} ${resident.lastName}`,
                floor: resident.floor?.label,
                room: resident?.room?.label,
                communityName: resident?.community?.communityName,
                buildingNumber: resident?.community?.buildingNumber,
                missingForm:anyMissedForm? true:false,
                forms,
            };
        }));

        return residentData;
    } catch (error) {
        console.error(error);
        return [];
    }
};
    
    const allResidentForms = [
        {formName:"Resident Appraisal ARF",formNo:"LIC 603",formNoLink:"lic603",
        required:false,present:false,lastModified:"",lastUploadBy:""},
        {formName:"Resident Appraisal RCFE",formNo:"LIC 603A",formNoLink:"lic603",
        required:true,present:false,lastModified:"",lastUploadBy:""},
        {formName:"Appraisal Need and Service Plan",formNo:"LIC 625",formNoLink:"lic625",
        required:false,present:false,lastModified:"",lastUploadBy:""},
        {formName:"Physician's Report for RCFE",formNo:"LIC 602A",formNoLink:"lic602a",
        required:true,present:false,lastModified:"",lastUploadBy:""},
        {formName:"Identification and Emergency Information",formNo:"LIC 601",formNoLink:"lic601",
        required:true,present:false,lastModified:"",lastUploadBy:""},
     {formName:"Admission Agreement for Resident",formNo:"LIC 604A",formNoLink:"lic604a",
     required:true,present:false,lastModified:"",lastUploadBy:""},
     {formName:"Personal Rights Information",formNo:"LIC 613C",formNoLink:"lic613c",
     required:true,present:false,lastModified:"",lastUploadBy:""},     
     {formName:"Resident Safeguarded Cash Resources",formNo:"LIC 405",formNoLink:"lic405",
     required:true,present:false,lastModified:"",lastUploadBy:""},  
     {formName:"Personal Property Record",formNo:"LIC 621",formNoLink:"lic621",
     required:true,present:false,lastModified:"",lastUploadBy:""},
     {formName:"Unusual Incident Report (As needed)",formNo:"LIC 624",formNoLink:"lic624",
     required:false,present:false,lastModified:"",lastUploadBy:""},
     {formName:"Death Report",formNo:"LIC 624 A",formNoLink:"lic624a",
     required:false,present:false,lastModified:"",lastUploadBy:""},
     {formName:"Centrally Stored Medications (Binder)",formNo:"LIC 622",formNoLink:"lic622",
     required:true,present:false,lastModified:"",lastUploadBy:""},

     {formName:"Release Of Medical Info Consent",formNo:"LIC 605A",formNoLink:"lic605a",
     required:true,present:false,lastModified:"",lastUploadBy:""},
     {formName:"Consent to Medical Examination",formNo:"LIC 627A",formNoLink:"lic627a",
     required:true,present:false,lastModified:"",lastUploadBy:""},
     {formName:"Emergency Treatment Consent",formNo:"LIC 627C",formNoLink:"lic627c",
     required:true,present:false,lastModified:"",lastUploadBy:""},    
     {formName:"Theft & Loss Policy",formNo:"LIC 621 Page 2",formNoLink:"lic621p2",
     required:true,present:false,lastModified:"",lastUploadBy:""},     
     {formName:"Tele-Communications Device Form",formNo:"LIC 9158",formNoLink:"lic9158",
     required:false,present:false,lastModified:"",lastUploadBy:""},        
     {formName:"Your Rights re: Medical Decisions",formNo:"PUB 325",formNoLink:"pub325",
     required:true,present:false,lastModified:"",lastUploadBy:""},    
     {formName:"Resident Weight Record (Binder)",formNo:"",formNoLink:"weightRecord",
     required:true,present:false,lastModified:"",lastUploadBy:""},   
     {formName:"Any Other Record",formNo:"",formNoLink:"otherRecord",
     required:false,present:false,lastModified:"",lastUploadBy:""},   
   ]

     module.exports = ResidenceData