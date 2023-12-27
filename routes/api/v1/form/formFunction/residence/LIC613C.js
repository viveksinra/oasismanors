const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");

async function LIC613C(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    const today = new Date();

    let basicInfo = {
        facilityName:`${myCommunity.communityName} (${myCommunity.communityAddress} - ${myCommunity.communityZipCode})`,
        residentName:myResident?.firstName + " " + myResident?.lastName, 
        date:formatDateToMmDdYyyy(today),
        signOfResident:"",
        signOfPerson:"",titleOfPerson:"",
        name:myResident?.firstName + " " + myResident?.lastName,
        address:myResident?.streetAddress,
        city:myResident?.city,
        zipCode:myResident?.zipCode,
        phoneNo:myResident?.phone,
        localOfficeNumer:""
    };


    return res.json({
        message: "LIC613C DATA ADDED",
        variant: "success",
        data: { basicInfo},
    });
}

module.exports = LIC613C;
