const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToMmDdYyyy } = require("../../../../../../utils/dateFormat");
const { dobToAge } = require("../../../../../../utils/generalFun/ResidenceInfoConv");

async function LIC625(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    let dobAge = await dobToAge(myResident?.dateOfBirth)
    const today = new Date();
    const myCommunity = await Community.findOne({ _id: myResident.community._id }).catch((err) => console.log(err));

    let basicInfo = {
        residentName:myResident?.firstName + " " + myResident?.lastName,     
        dob:formatDateToMmDdYyyy(myResident?.dateOfBirth),
        age:myResident?.dateOfBirth ? dobAge: "",
        sex:myResident?.gender?.label,
        date:formatDateToMmDdYyyy(today),
        facilityName:myCommunity.communityName,
        facilityAddress:myCommunity.communityAddress,
        admission:true,update:false,
        person:"",
        licenseNumber:myCommunity.licenseNumber,
        phone:myCommunity.communityMobileNumber,
        backgroundInfo:"",

    };

    let pay = {
        social1:"",social2:"",social3:"",
        social4:"",social5:"",emotion1:"",
        emotion2:"",emotion3:"",
        emotion4:"",emotion5:"",
        mental1:"",mental2:"",
        mental3:"",mental4:"",
        mental5:"",physical1:"",
        physical2:"",physical3:"",
        physical4:"",physical5:"",
        skill:"",plan:"",timeFrame:"",
        implement:"",evaluation:"",
        dateOfSign:"",client:"",dateByClient:'',
        clientDate:""
    };

    return res.json({
        message: "LIC625 DATA ADDED",
        variant: "success",
        data: { basicInfo, pay},
    });
}

module.exports = LIC625;
