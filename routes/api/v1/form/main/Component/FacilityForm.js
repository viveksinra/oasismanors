const ComplianceDocs = require("../../../../../../Models/Private/Common/ComplianceDocs");

const FacilityData = async(req,res) => {
    try {
        return allFacilityForms;
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
    const allFacilityForms = [
        {
            formName:"Register of Facility (Clients/Residents)",
         formNo:"LIC 9020",formNoLink:"lic9020",required:true,present:false,
         lastModified:"",lastUploadBy:""
        }
    ]
    

     module.exports = FacilityData