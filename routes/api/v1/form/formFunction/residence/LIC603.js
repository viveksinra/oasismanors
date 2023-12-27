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
            amy1:false,amn1:false,amy2:false,amn2:false,
            amy3:false,amn3:false,amy4:false,amn4:false
        }

        let fnc = {fy1:false,fn1:false,fy2:false,fn2:false,
            fy3:false,fn3:false,fy4:false,fn4:false,fy5:false,
            fn5:false,fy6:false,fn6:false,fy7:false,fn7:false,
            fy8:false,fn8:false,fy9:false,fn9:false,fy10:false,fn10:false}

        let ser = {sy1:false,sn1:false,sy2:false,sn2:false,
            sy3:false,sn3:false,sy4:false,sn4:false,sy5:false,
            sn5:false,sy6:false,sn6:false,sy7:false,sn7:false,
            sy8:false,sn8:false,sy9:false,sn9:false,sy10:false,
            sn10:false,sy11:false,sn11:false,sy12:false,sn12:false,
            sy13:false,sn13:false,sy14:false,sn14:false,sy15:false,
            sn15:false,sy16:false,sn16:false,dateComp:"",
            dateCom2:"",dateOfComp3:"",
            licensee:""}


    // Set values from basicInfo, serviceInfo, rate, and pay


    return res.json({
        message: "LIC 603 DATA Loaded",
        variant: "success",
        data: {basicInfo,amb,fnc,ser},
    });
}

module.exports = LIC603;
