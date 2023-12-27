const Contact = require("../../../../../../Models/Private/Enquiry/Contact");
const Prospect = require("../../../../../../Models/Private/Enquiry/Prospect");
const { formatDateToMmDdYyyy } = require("../../../../../../utils/dateFormat");
const { dobToAge } = require("../../../../../../utils/generalFun/ResidenceInfoConv");

async function LIC601(res,resId) {

  
const myResident = await Prospect.findOne({_id:resId}).catch(err => console.log(err))
const responsiblePerson = await Contact.findOne({prospectId:resId,responsiblePerson:true}).catch(err => console.log(err))
const nameOfNearestRel = await Contact.findOne({prospectId:resId,nearestRelative:true}).catch(err => console.log(err))
  
let dobAge = await dobToAge(myResident?.dateOfBirth)
    let residentInfo = {
      nameOfClient: myResident?.firstName + " " + myResident?.lastName,
      ssNumber:myResident?.ssNumber,
      dobClient:formatDateToMmDdYyyy(myResident?.dateOfBirth),
      ageClient:myResident?.dateOfBirth ? dobAge: "",
      sexClient:myResident?.gender?.label,
      responsiblePerson:responsiblePerson.firstName + " " + responsiblePerson.lastName,
      address:responsiblePerson.streetAddress,
      tel1:"",
      telephone1:responsiblePerson.mobile,
      nameOfNearestRel:nameOfNearestRel.firstName + " " + nameOfNearestRel.lastName,
      relationship:nameOfNearestRel?.relation?.label,
      relativeAddress:nameOfNearestRel.streetAddress,
      tel2:"",    
      telephone2:nameOfNearestRel.mobile,
      dateOfAdmission:formatDateToMmDdYyyy(myResident?.physicalMoveInDate),
      priorAddress:"",
      dateLeft:"",
      forwardingAddress:"",
      reasonForLeaving:""
    };
  let financePerson = await getFinancialInfo(res,resId)

   let emergencyPerson = {        
        physicianName:"",
        physicianAddress:"",
        physicianPhone:"",
        mental:"",
        mentalAddress:"",
        mentalPhone:"",
        dentist:"",
        dentistAddress:"",
    dentistPhone:"",
    relativeName:"",
    relAddress:"",
    relPhone:"",
    friendName:"",
    friendAddress:"",
    friendPhone:"",
        };
        let emergencyHospitals ={
    hospitalName:"",
    hospitalAddress:"",
    medicalPlan:"",
    medicalPlanNo:"",
    dentalPlan:"",
    dentalPlanNo:"",};

    let otherInfo = {
    ambulatoryStatus:"",
    religiousPref:"",
    clergyman:"",
    clergymanPhone:"",
    comments:"",
  
    residentSignature:"",
    personSignature:"",
    title:"",
    date:"",
    };

    let childData = {
    nameOfChild:"",contactPerson:"",specifyRelation:"",contactPhone:"",parentsNameAdd:"",parentsNo:"",childCourtStatus:"",personNameRow1:"",perAddRow1:"",personPhoneRow1:"",personNameRow2:"",personAddRow2:"",personPhoneRow2:"",personNameRow3:"",perAddRow3:"",personPhoneRow3:"",nameR1C1:"",relationR1C2:"",
    nameR1C3:"",nameR1C4:"",nameR2C1:"",relationR2C2:"",nameR2C3:"",relationR2C4:"",nameR3C1:"",relationR3C2:"",nameR3C3:"",relationR3C4:"",nameR4C1:"",relationR4C2:"",nameR4C3:"",relationR4C4:"",nameR5C1:"",relationR5C2:"",nameR5C3:"",relationR5C4:"",specify:"",authR1C1:"",authR1C2:"",authR1C3:"",authR2C1:"",authR2C2:"",authR2C3:"",authR3C1:"",authR3C2:"",authR3C3:"",
    authR4C1:"",authR4C2:"",authR4C3:"",tel9A:"",tel9B:"",tel9C:"",comment10:""
  }
      

    return res.json({
            message: "LIC 601 DATA ADDED",
            variant: "success",
            data:{residentInfo,financePerson,emergencyPerson,emergencyHospitals,otherInfo,childData}
          });
    
    
    }

    const getFinancialInfo = async(data) => {
      const finInfo = await Contact.find({financePerson:true}).catch(err => console.log(err))

      let financePerson = {
        nameRow1:"",
        addressRow1:"",
        phoneRow1:"",
        nameRow2:"",
         addressRow2:"",
          phoneRow2:"",
          nameRow3:"",
          addressRow3:"",
       phoneRow3:""
      };

      return financePerson

    };
    
    module.exports = LIC601;