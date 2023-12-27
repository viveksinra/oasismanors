const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { dobToAge } = require("../../../../../../utils/generalFun/ResidenceInfoConv");

async function LIC603(res,resId) {
    const myResident = await Prospect.findOne({ _id: resId }).catch((err) => console.log(err));
    let dobAge = await dobToAge(myResident?.dateOfBirth)

    let basicInfo = {
        applicantName:myResident?.firstName + " " + myResident?.lastName, 
        age:myResident?.dateOfBirth ? dobAge: "",
        health1:"",health2:"",disabile1:"",
        disabile2:"",disabile3:"",disabile4:"",disabile5:"",mental1:"",
        mental2:"",mental3:"",mental4:"",history1:"",history2:"",
        history3:"",history4:"",history5:"",social1:"",social2:"",
        social3:"",comment:"",dateOfTBTest:"",actionTaken:"",givenDetails:"",
        outOfBed:false,bedAll:false,bedPart:"yes",tuberculosis:"yes",
        ambulatory:"yes"};
        let amb = {
            amy1:true,amn1:true,amy2:true,amn2:true,
            amy3:true,amn3:true,amy4:true,amn4:true
        }

        let fnc = {fy1:true,fn1:true,fy2:true,fn2:true,
            fy3:true,fn3:true,fy4:true,fn4:true,fy5:true,
            fn5:true,fy6:true,fn6:true,fy7:true,fn7:true,
            fy8:true,fn8:true,fy9:true,fn9:true,fy10:true,fn10:true}

        let ser = {sy1:true,sn1:true,sy2:true,sn2:true,
            sy3:true,sn3:true,sy4:true,sn4:true,sy5:true,
            sn5:true,sy6:true,sn6:true,sy7:true,sn7:true,
            sy8:true,sn8:true,sy9:true,sn9:true,sy10:true,
            sn10:true,sy11:true,sn11:true,sy12:true,sn12:true,
            sy13:true,sn13:true,sy14:true,sn14:true,sy15:true,
            sn15:true,sy16:true,sn16:true,dateComp:"dsdfsdf",
            dateCom2:"sdsdsd54",dateOfComp3:"sdsfsdf",
            licensee:"sdfsdfsdf"}


    // Set values from basicInfo, serviceInfo, rate, and pay


    return res.json({
        message: "LIC 603 DATA Loaded",
        variant: "success",
        data: {basicInfo,amb,fnc,ser},
    });
}

module.exports = LIC603;
