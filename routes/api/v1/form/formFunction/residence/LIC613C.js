const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToMmDdYyyy } = require("../../../../../../utils/dateFormat");

async function LIC613C(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    const myCommunity = await Community.findOne({ _id: myResident.community._id }).catch((err) => console.log(err));
    const today = new Date();
    const responsiblePerson = await Contact.findOne({prospectId:resId,responsiblePerson:true}).catch(err => console.log(err))

    let basicInfo = {
        facilityName:`${myCommunity.communityName} (${myCommunity.communityAddress} - ${myCommunity.communityZipCode})`,
        residentName:myResident?.firstName + " " + myResident?.lastName, 
        date:formatDateToMmDdYyyy(today),
        signOfResident:"",
        signOfPerson:"",
        titleOfPerson:responsiblePerson.firstName + " " + responsiblePerson.lastName,
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
