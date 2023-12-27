const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");

async function LIC9020(res) {

    let facData = ({facilityName:"Oasis Manors LLC",facilityNumber:"LA6846244-165",licenseeName:"Oasis Manors LLC", date:"Dec-10-2023"})
   

    const allResidents = await Prospect.aggregate([
        {$match:{residenceStage:"residence"}},
        {$project:{firstName:1,lastName:1,room:1,}},
    ]).exec()
    let resData = []
    let x = 0;
    while(x < allResidents.length) {
        let oneRes = allResidents[x]
       let myObj = {room:oneRes?.room?.label,residentName:oneRes.firstName + " " + oneRes.lastName,
        status:"AMBULATORY",
        physician:{name:"Dr J.M. Bisnoi", 
        address:"156 Roxford St",
        city:"LA",state:"CA",pin:"91042",
        mobile:"+1 (154) 645124654"},responsible:{name:"John Miccal",
         address:"15654 Almoest St",city:"LA",state:"CA",pin:"91042",
         mobile:"+1 (15) 654514841"}}
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
    
    
    