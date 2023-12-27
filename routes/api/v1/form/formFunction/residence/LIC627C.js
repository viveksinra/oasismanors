const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToMmDdYyyy } = require("../../../../../../utils/dateFormat");

async function LIC627C(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    const myCommunity = await Community.findOne({ _id: myResident.community._id }).catch((err) => console.log(err));
    const today = new Date();

    let myData = {
        facilityName:myCommunity.communityName,
        name:myResident?.firstName + " " + myResident?.lastName,
        allergies:"",
        date:formatDateToMmDdYyyy(today),
        sign:"",
        homeAddress:"",
        phone:"",
        workPhone:"",
      
    };


    // Set values from basicInfo, serviceInfo, rate, and pay


    return res.json({
        message: "LIC 627C DATA Loaded",
        variant: "success",
        data: myData,
    });
}

module.exports = LIC627C;
