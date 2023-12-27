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
        person:"asdfasdf",licenseNumber:"sdfsdfsdf",
        phone:"asdfsdfasf",backgroundInfo:"dasdfsfsdfsdfsdfsdfsdfsd",

    };

    let pay = {
        social1:"asdfsdf",social2:"asdfasdfsd",social3:"asdfasdf",
        social4:"asdfasdf",social5:"asdfasdf",emotion1:"Dasfdf",
        emotion2:"asdfasdf",emotion3:"Asdfasdfsdf",
        emotion4:"asdfasdfasdf",emotion5:"asdfasdfsdf",
        mental1:"sdfsdfsdf",mental2:"afsdfasdfsdf",
        mental3:"asdfasdfsdf",mental4:"asdfasdfasdf",
        mental5:"asdfasdfasdfs",physical1:"Dsfsdfdsfdsf",
        physical2:"sdfsdfsdfsdfs",physical3:"dfsdfsdfsdfsdf",
        physical4:"physical1dsdsdfsdf",physical5:"ddfsfsdfsdfsdfdfsdf",
        skill:"dsfsdfsdfsf",plan:"sdfsdfsdfsdfs",timeFrame:"sdfsdfsdfsdf",
        implement:"sdfsfdfwef51451",evaluation:"sdfsdfasdfsafdf41",
        dateOfSign:"sddsafsd",client:"sdfsfsdf",dateByClient:'aasdfasdf',
        clientDate:"sdfsdfsdf"
    };

    return res.json({
        message: "LIC625 DATA ADDED",
        variant: "success",
        data: { basicInfo, pay},
    });
}

module.exports = LIC625;
