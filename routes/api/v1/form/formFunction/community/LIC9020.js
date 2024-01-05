const Contact = require("../../../../../../Models/Private/Enquiry/Contact");
const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const Community = require("../../../../../../Models/Private/Main/Community");
const { formatDateToShortMonth } = require("../../../../../../utils/dateFormat");
var mongoose = require('mongoose');

async function LIC9020(res,comId) {
    let comData = await Community.findOne({_id:mongoose.Types.ObjectId(comId)});
    const currentDate = new Date();

    let facData = ({
        communityName:comData?.communityName,
        buildingNumber:comData?.buildingNumber,
        licenseeName:comData?.licenseeName,
         date:formatDateToShortMonth(currentDate)
        })
   

    const allResidents = await Prospect.aggregate([
        {$match:{residenceStage:"residence","community._id":mongoose.Types.ObjectId(comId)}},
        {$project:{firstName:1,lastName:1,room:1,}},
    ]).exec()
    let resData = []
    let x = 0;
    while(x < allResidents.length) {
        let oneRes = allResidents[x]
        const physicianInfo = await Contact.findOne({ 'relation.id': "physician",prospectId:oneRes._id }); // Limit to three contacts
        const responsiblePerson = await Contact.findOne({prospectId:oneRes._id,responsiblePerson:true}).catch(err => console.log(err))

       let myObj = {room:oneRes?.room?.label,residentName:oneRes.firstName + " " + oneRes.lastName,
        status:"AMBULATORY",

        physician:{
            name:physicianInfo? physicianInfo.firstName + " " + physicianInfo?.lastName:"", 
        address:physicianInfo? physicianInfo.streetAddress:"",
        city:physicianInfo? physicianInfo.city: "",
        state:physicianInfo? physicianInfo?.state?.label:" ",
        pin:physicianInfo? physicianInfo.zipCode: "",
        mobile:physicianInfo? physicianInfo.mobile:""
    },
        responsible:{
            name:responsiblePerson? responsiblePerson.firstName + " " + physicianInfo?.lastName:"", 
            address:responsiblePerson? responsiblePerson.streetAddress:"",
            city:responsiblePerson? responsiblePerson.city: "",
            state:responsiblePerson? responsiblePerson?.state?.label:" ",
            pin:responsiblePerson? responsiblePerson.zipCode: "",
            mobile:responsiblePerson? responsiblePerson.mobile:""
        }}
         resData.push(myObj)
        x++;
    }


    return res.json({
            message: "Task Successfully added",
            variant: "success",
            data:{facData,resData}
          });
    
    
    }
    
    module.exports = LIC9020;
    
    
    