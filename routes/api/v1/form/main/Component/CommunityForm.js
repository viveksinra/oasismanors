const ComplianceDocs = require("../../../../../../Models/Private/Common/ComplianceDocs");
const Community = require("../../../../../../Models/Private/Main/Community");
const { formatDateToShortMonth } = require("../../../../../../utils/dateFormat");
const { findUserOrProspect } = require("../../../../../../utils/generalFun/userIdToDetail");

const ComFormData = async (comId, allCommunityForms) => {
    const newForms = [];
    let anyMissedForm = false;
    for (const form of allCommunityForms) {
        try {
            const myForm = await ComplianceDocs.findOne({ formNoLink: form.formNoLink, communityId: comId }).exec();
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

const CommunityData = async (req, res,myMatch) => {
    try {
        const allCommunitys = await Community.aggregate([
            { $match: myMatch },
            {
                $project: {
                    communityName: 1,
                    buildingNumber: 1,
                    licenseNumber: 1,
                    licenseeName:1,
                    licenseeMobileNumber: 1,
                },
            },
        ]).exec();

        const communityData = await Promise.all(
            allCommunitys.map(async (community) => {
            const tforms = await ComFormData(community._id, allCommunityForms);
            const forms = tforms.newForms;
            const anyMissedForm = tforms.anyMissedForm;
            
            return {
                _id: community._id,
                communityName: community?.communityName,
                buildingNumber: community?.buildingNumber,
                licenseNumber: community?.licenseNumber,
                licenseeName: community?.licenseeName,
                licenseeMobileNumber: community?.licenseeMobileNumber,
                missingForm:anyMissedForm? true:false,
                forms,
            };
        }));

        return communityData;
    } catch (error) {
        console.error(error);
        return [];
    }
};
    
const allCommunityForms = [
    { formNo: "LIC 200", formName: "Application for a Residential Care Facility for the Elderly License", formNoLink: "lic200", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 215", formName: "Applicant Information", formNoLink: "lic215", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 308", formName: "Designation of Facility Responsibility", formNoLink: "lic308", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 309", formName: "Administrative Organization", formNoLink: "lic309", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 400", formName: "Affidavit Regarding Client/Resident Cash Resources", formNoLink: "lic400", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 402", formName: "Surety Bond", formNoLink: "lic402", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 401", formName: "Monthly Operating Statement", formNoLink: "lic401", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 401A", formName: "Supplemental Financial Information", formNoLink: "lic401a", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 404", formName: "Financial Information Release and Verification", formNoLink: "lic404", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 500", formName: "Personnel Report", formNoLink: "lic500", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 501", formName: "Personnel Record", formNoLink: "lic501", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 503", formName: "Health Screening Report - Facility Personnel", formNoLink: "lic503", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 508", formName: "Criminal Record Statement", formNoLink: "lic508", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 610E", formName: "Emergency Disaster Plan for Residential Care Facilities for the Elderly", formNoLink: "lic610e", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 999", formName: "Facility Sketch (Floor Plan)", formNoLink: "lic999", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 9054", formName: "Local Fire Inspection Authority Information", formNoLink: "lic9054", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 604A", formName: "Admission Agreement Guide for Residential Facilities", formNoLink: "lic604a", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 613C", formName: "Personal Rights Residential Care Facilities", formNoLink: "lic613c", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 9059", formName: "Personal Property Procedures (RCFE)", formNoLink: "lic9059", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 9060", formName: "Resident Theft and Loss Record", formNoLink: "lic9060", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 9158", formName: "Telecommunications Device Notification", formNoLink: "lic9158", required: true, present: false, lastModified: "", lastUploadBy: "" },
    { formNo: "LIC 9282", formName: "Residential Infection Control Plan", formNoLink: "lic9282", required: true, present: false, lastModified: "", lastUploadBy: "" },
  ];
  

     module.exports = CommunityData