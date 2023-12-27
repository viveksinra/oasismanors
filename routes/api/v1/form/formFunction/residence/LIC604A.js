const Contact = require("../../../../../../Models/Private/Enquiry/Contact");
const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToMmDdYyyy } = require("../../../../../../utils/dateFormat");

async function LIC604A(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    const myCommunity = await Community.findOne({ _id: myResident.community._id }).catch((err) => console.log(err));
    const responsiblePerson = await Contact.findOne({ prospectId:resId,responsiblePerson:true}).catch((err) => console.log(err));
    let basicInfo = {
        nameOfFacility:myCommunity.communityName,
        licenseNo:myCommunity.licenseNumber,
        phoneNo:myCommunity.communityMobileNumber,
        address:myCommunity.communityAddress,
        facilityCity:myCommunity.communityCity.city,
        facilityState:myCommunity.communityState,
        facilityZip:myCommunity.communityZipCode,
        nameOfLicensee:myCommunity.licenseeName,
        telephone2:myCommunity.licenseeMobileNumber,
        mailingAddress:myCommunity.licenseeAddress,
        city:myCommunity.licenseeCity.city,
        state:myCommunity.licenseeState,
        zip:myCommunity.licenseeZipCode,
        nameOfResident: myResident?.firstName + " " + myResident?.lastName,
        ssNumber:myResident?.ssNumber,
        dobClient:formatDateToMmDdYyyy(myResident?.dateOfBirth),
        dateOfAdmission:formatDateToMmDdYyyy(myResident?.physicalMoveInDate),
        responsiblePerson:responsiblePerson? (responsiblePerson?.firstName + ' ' + responsiblePerson?.lastName) : "",
        relationship:responsiblePerson?.relation.label,
        resAddress:responsiblePerson?.streetAddress,
        telephone3:responsiblePerson?.mobile
    };

    let serviceInfo = {
        lodging:"singleRoom",threeMeals:true,specialDiets:true,
        otherMeals:true,otherMealText:"",serviceLine1:"asdfasdfsdf",
        serviceLine2:"adsfasdf",check7:true,check7Line1:"sdsdsd",
        check7Line2:"sddsdsd",check7Line3:"4fa4dferfwef",check8:true,
        check8Line1:"adfasdf",check8Line2:"sdfadfa",check8Line3:"asdfasdf",
        check9:true,check9Dressing:true,check9Eating:true,
        check9Toileting:true,check9Bathing:true,
        check9Grooming:true,check9Mobility:true,check9Other:true,
        check9Line1:"adfdsf",check9Line2:"adsfsdfasdf",check10:true,
        check11:true,check12:true,check13:true,check14:true,
        check15:true,check15Line1:"sdsdsd",check16:true,check17:true,
        check18:true,check18Line1:"adsfasdfasdf",
        check18Line2:"sdsfsdfse"
    };

    let rate = {
        mothlyPrivate:"500",mothlySSI:"345",itemR1C1:"asdf",
        itemR1C2:"ASDFA",itemR1C3:"ADSFADF",itemR2C1:"ASDFAS",
        itemR2C2:"ASDFASDF",itemR2C3:"ADSFASDF",itemR3C1:"ADSFASDF",
        itemR3C2:"ASDFASDF",itemR3C3:"ADSFASDF", service6:true,
        service6Or:true,payment7BLine1:"asdfasdfasdfasdf",payment7BLine2:"asdfasdf"
    };

    let pay = {
        basicRate:"546",serviceCost:"6531",thirdPartyService:"456454132",
        total:"5454654",paymentDueOn:"05asdfg",paymentMethod:"6544asda",
        paymentDeliverTo:"asdff444484",noticeDays:"80",houseRule1:"sdsdfsdf",
        houseRule2:'5465464sdsd',houseRule3:"sdsdfsdf464",signDate1:"adsfadf",
        signDate2:"sdsfsdf",signDate3:"sdsfsf"
    };



    // Set values from basicInfo, serviceInfo, rate, and pay


    return res.json({
        message: "LIC 604A DATA ADDED",
        variant: "success",
        data: { basicInfo, serviceInfo, rate, pay},
    });
}

module.exports = LIC604A;
