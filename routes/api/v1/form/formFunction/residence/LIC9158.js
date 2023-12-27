const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToMmDdYyyy } = require("../../../../../../utils/dateFormat");

async function LIC9158(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    const myCommunity = await Community.findOne({ _id: myResident.community._id }).catch((err) => console.log(err));
    const today = new Date();

    let basicInfo = {
        tele1:true,tele2:true,tele3:true,tele4:true,tele5:true,
        tele6:true,tele7:true,tele8:true,
        date:formatDateToMmDdYyyy(today),
        person:myResident?.firstName + " " + myResident?.lastName,
        date2:formatDateToMmDdYyyy(today)
        ,facilityName:myCommunity.communityName,
        facityAddress:`${myCommunity.communityName} (${myCommunity.communityAddress} - ${myCommunity.communityZipCode})`,
        date3:formatDateToMmDdYyyy(today),
    };


    return res.json({
        message: "LIC9158 DATA ADDED",
        variant: "success",
        data: { basicInfo},
    });
}

module.exports = LIC9158;
