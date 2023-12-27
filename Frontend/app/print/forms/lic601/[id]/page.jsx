'use client';
import React,{useEffect,useState} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC601({params}) {
    const [loading, setLoading] = useState(false);
    const [residentInfo, setResInfo] = useState({nameOfClient: "Resident",ssNumber: "",dobClient: "", ageClient: "",sexClient: "",responsiblePerson: "",address: "",tel1: "", telephone1: "", nameOfNearestRel: "", relationship: "", relativeAddress: "",tel2: "", telephone2: "", dateOfAdmission: "", priorAddress: "", dateLeft: "", forwardingAddress: "", reasonForLeaving: "" })
    const [childData, setChildData]=useState({nameOfChild: "", contactPerson: "", specifyRelation: "", contactPhone: "", parentsNameAdd: "",parentsNo: "", childCourtStatus: "", personNameRow1: "", perAddRow1: "", personPhoneRow1: "", personNameRow2: "", personAddRow2: "", personPhoneRow2: "", personNameRow3: "", perAddRow3: "", personPhoneRow3: "", nameR1C1: "", relationR1C2: "", nameR1C3: "", nameR1C4: "", nameR2C1: "", relationR2C2: "", nameR2C3: "", relationR2C4: "", nameR3C1: "", relationR3C2: "", nameR3C3: "", relationR3C4: "", nameR4C1: "", relationR4C2: "", nameR4C3: "", relationR4C4: "", nameR5C1: "", relationR5C2: "", nameR5C3: "", relationR5C4: "", specify: "", authR1C1: "", authR1C2: "", authR1C3: "", authR2C1: "", authR2C2: "", authR2C3: "", authR3C1: "", authR3C2: "", authR3C3: "", authR4C1: "", authR4C2: "", authR4C3: "", tel9A: "", tel9B: "", tel9C: "", comment10: "" })
    const [emergencyHospitals, setEmH]= useState({ hospitalName: "", hospitalAddress: "", medicalPlan: "", medicalPlanNo: "", dentalPlan: "", dentalPlanNo: "" })
    const [emergencyPerson,setEmPer] = useState({physicianName: "",physicianAddress: "",physicianPhone: "",mental: "", mentalAddress: "", mentalPhone: "", dentist: "", dentistAddress: "", dentistPhone: "",relativeName: "", relAddress: "", relPhone: "", friendName: "",friendAddress: "",friendPhone: ""})
    const [financePerson, setFinPer]= useState({nameRow1: "",addressRow1: "",phoneRow1: "",nameRow2: "",addressRow2: "",phoneRow2: "",nameRow3: "",addressRow3: "",phoneRow3: "" })
    const [otherInfo, setOtherInfo] = useState({ambulatoryStatus: "",religiousPref: "",clergyman: "",clergymanPhone: "", comments: "", residentSignature: "", personSignature: "", title: "", date: "" })
    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702238423/formOasisManors/tuo3gn4sslucjofo6d9f.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('nameOfClient').setText(residentInfo?.nameOfClient);
    form.getTextField('ssNumber').setText(residentInfo?.ssNumber);
    form.getTextField('dobClient').setText(residentInfo?.dobClient);
    form.getTextField('ageClient').setText(residentInfo?.ageClient);
    form.getTextField('sexClient').setText(residentInfo?.sexClient);
    form.getTextField('responsiblePerson').setText(residentInfo?.responsiblePerson);
    form.getTextField('address').setText(residentInfo?.address);
    form.getTextField('tel1').setText(residentInfo?.tel1);
    form.getTextField('telephone1').setText(residentInfo?.telephone1);
    form.getTextField('nameOfNearestRel').setText(residentInfo?.nameOfNearestRel);
    form.getTextField('relationship').setText(residentInfo?.relationship);
    form.getTextField('relativeAddress').setText(residentInfo?.relativeAddress);
    form.getTextField('tel2').setText(residentInfo?.tel2);
    form.getTextField('telephone2').setText(residentInfo?.telephone2);
    form.getTextField('dateOfAdmission').setText(residentInfo?.dateOfAdmission);
    form.getTextField('priorAddress').setText(residentInfo?.priorAddress);
    form.getTextField('dateLeft').setText(residentInfo?.dateLeft);
    form.getTextField('forwardingAddress').setText(residentInfo?.forwardingAddress);
    form.getTextField('reasonForLeaving').setText(residentInfo?.reasonForLeaving);
    form.getTextField('nameRow1').setText(financePerson?.nameRow1);
    form.getTextField('addressRow1').setText(financePerson?.addressRow1);
    form.getTextField('phoneRow1').setText(financePerson?.phoneRow1);
    form.getTextField('nameRow2').setText(financePerson?.nameRow2);
    form.getTextField('addressRow2').setText(financePerson?.addressRow2);
    form.getTextField('phoneRow2').setText(financePerson?.phoneRow2);
    form.getTextField('nameRow3').setText(financePerson?.nameRow3);
    form.getTextField('addressRow3').setText(financePerson?.addressRow3);
    form.getTextField('phoneRow3').setText(financePerson?.phoneRow3);
    form.getTextField('physicianName').setText(emergencyPerson?.physicianName);
    form.getTextField('physicianAddress').setText(emergencyPerson?.physicianAddress);
    form.getTextField('physicianPhone').setText(emergencyPerson?.physicianPhone);
    form.getTextField('mental').setText(emergencyPerson?.mental);
    form.getTextField('mentalAddress').setText(emergencyPerson?.mentalAddress);
    form.getTextField('mentalPhone').setText(emergencyPerson?.mentalPhone);
    form.getTextField('dentist').setText(emergencyPerson?.dentist);
    form.getTextField('dentistAddress').setText(emergencyPerson?.dentistAddress);
    form.getTextField('dentistPhone').setText(emergencyPerson?.dentistPhone);
    form.getTextField('relativeName').setText(emergencyPerson?.relativeName);
    form.getTextField('relAddress').setText(emergencyPerson?.relAddress);
    form.getTextField('relPhone').setText(emergencyPerson?.relPhone);
    form.getTextField('friendName').setText(emergencyPerson?.friendName);
    form.getTextField('friendAddress').setText(emergencyPerson?.friendAddress);
    form.getTextField('friendPhone').setText(emergencyPerson?.friendPhone);
    form.getTextField('hospitalName').setText(emergencyHospitals?.hospitalName);
    form.getTextField('hospitalAddress').setText(emergencyHospitals?.hospitalAddress);
    form.getTextField('medicalPlan').setText(emergencyHospitals?.medicalPlan);
    form.getTextField('medicalPlanNo').setText(emergencyHospitals?.medicalPlanNo);
    form.getTextField('dentalPlan').setText(emergencyHospitals?.dentalPlan);
    form.getTextField('dentalPlanNo').setText(emergencyHospitals?.dentalPlanNo);
    form.getTextField('ambulatoryStatus').setText(otherInfo?.ambulatoryStatus);
    form.getTextField('religiousPref').setText(otherInfo?.religiousPref);
    form.getTextField('clergyman').setText(otherInfo?.clergyman);
    form.getTextField('clergymanPhone').setText(otherInfo?.clergymanPhone);
    form.getTextField('comments').setText(otherInfo?.comments);
    form.getTextField('residentSignature').setText(otherInfo?.residentSignature);
    form.getTextField('personSignature').setText(otherInfo?.personSignature);
    form.getTextField('title').setText(otherInfo?.title);
    form.getTextField('date').setText(otherInfo?.date);
    form.getTextField('nameOfChild').setText(childData?.nameOfChild);
    form.getTextField('contactPerson').setText(childData?.contactPerson);
    form.getTextField('specifyRelation').setText(childData?.specifyRelation);
    form.getTextField('contactPhone').setText(childData?.contactPhone);
    form.getTextField('parentsNameAdd').setText(childData?.parentsNameAdd);
    form.getTextField('parentsNo').setText(childData?.parentsNo);
    form.getTextField('childCourtStatus').setText(childData?.childCourtStatus);
    form.getTextField('personNameRow1').setText(childData?.personNameRow1);
    form.getTextField('perAddRow1').setText(childData?.perAddRow1);
    form.getTextField('personPhoneRow1').setText(childData?.personPhoneRow1);
    form.getTextField('personNameRow2').setText(childData?.personNameRow2);
    form.getTextField('personAddRow2').setText(childData?.personAddRow2);
    form.getTextField('personPhoneRow2').setText(childData?.personPhoneRow2);
    form.getTextField('personNameRow3').setText(childData?.personNameRow3);
    form.getTextField('perAddRow3').setText(childData?.perAddRow3);
    form.getTextField('personPhoneRow3').setText(childData?.personPhoneRow3);
    form.getTextField('nameR1C1').setText(childData?.nameR1C1);
    form.getTextField('relationR1C2').setText(childData?.relationR1C2);
    form.getTextField('nameR1C3').setText(childData?.nameR1C3);
    form.getTextField('nameR1C4').setText(childData?.nameR1C4);
    form.getTextField('nameR2C1').setText(childData?.nameR2C1);
    form.getTextField('relationR2C2').setText(childData?.relationR2C2);
    form.getTextField('nameR2C3').setText(childData?.nameR2C3);
    form.getTextField('relationR2C4').setText(childData?.relationR2C4);
    form.getTextField('nameR3C1').setText(childData?.nameR3C1);
    form.getTextField('relationR3C2').setText(childData?.relationR3C2);
    form.getTextField('nameR3C3').setText(childData?.nameR3C3);
    form.getTextField('relationR3C4').setText(childData?.relationR3C4);
    form.getTextField('nameR4C1').setText(childData?.nameR4C1);
    form.getTextField('relationR4C2').setText(childData?.relationR4C2);
    form.getTextField('nameR4C3').setText(childData?.nameR4C3);
    form.getTextField('relationR4C4').setText(childData?.relationR4C4);
    form.getTextField('nameR5C1').setText(childData?.nameR5C1);
    form.getTextField('relationR5C2').setText(childData?.relationR5C2);
    form.getTextField('nameR5C3').setText(childData?.nameR5C3);
    form.getTextField('relationR5C4').setText(childData?.relationR5C4);
    form.getTextField('specify').setText(childData?.specify);
    form.getTextField('authR1C1').setText(childData?.authR1C1);
    form.getTextField('authR1C2').setText(childData?.authR1C2);
    form.getTextField('authR1C3').setText(childData?.authR1C3);
    form.getTextField('authR2C1').setText(childData?.authR2C1);
    form.getTextField('authR2C2').setText(childData?.authR2C2);
    form.getTextField('authR2C3').setText(childData?.authR2C3);
    form.getTextField('authR3C1').setText(childData?.authR3C1);
    form.getTextField('authR3C2').setText(childData?.authR3C2);
    form.getTextField('authR3C3').setText(childData?.authR3C3);
    form.getTextField('authR4C1').setText(childData?.authR4C1);
    form.getTextField('authR4C2').setText(childData?.authR4C2);
    form.getTextField('authR4C3').setText(childData?.authR4C3);
    form.getTextField('tel9A').setText(childData?.tel9A);
    form.getTextField('tel9B').setText(childData?.tel9B);
    form.getTextField('tel9C').setText(childData?.tel9C);
    form.getTextField('comment10').setText(childData?.comment10);

 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();

 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${residentInfo?.nameOfClient}-LIC601.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic601/${params.id}`);
    if(res.variant === "success"){
      setLoading(false);
      setResInfo(res?.data?.residentInfo);
      setChildData(res?.data?.childData);
      setEmH(res?.data?.emergencyHospitals);
      setEmPer(res?.data?.emergencyPerson);
      setFinPer(res?.data?.financePerson);
      setOtherInfo(res?.data?.otherInfo);
    }else {console.log(res);setLoading(false)};    
   }
   if(params?.id){getData()}

 }, [params?.id])

 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
         <Button variant="contained" onClick={()=>fillForm()}>Download LIC 601</Button>
    </main>
  )
}




export default LIC601;