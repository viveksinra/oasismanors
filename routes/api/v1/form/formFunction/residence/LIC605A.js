const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToMmDdYyyy } = require("../../../../../../utils/dateFormat");

async function LIC605A(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    const myCommunity = await Community.findOne({ _id: myResident.community._id }).catch((err) => console.log(err));
    
    const today = new Date();
    let myData = {
        hospitalName:"",
        date:formatDateToMmDdYyyy(today),
        address:"",
        personName:myResident?.firstName + " " + myResident?.lastName,
        facilityName:`${myCommunity.communityName} (${myCommunity.communityAddress} - ${myCommunity.communityZipCode})`,
        expireDate:"",
        representative:"",
        relation:"",
        repAddress:""
    };


    // Set values from basicInfo, serviceInfo, rate, and pay


    return res.json({
        message: "LIC605A DATA Loaded",
        variant: "success",
        data: myData,
    });
}

module.exports = LIC605A;
