'use client';
import React,{useEffect} from 'react'
import {ToggleButton,Tooltip,CircularProgress,Typography, Button  } from '@mui/material/';
import { useState,} from 'react';
import {FcOrgUnit} from "react-icons/fc";
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC604A({params}) {
    const [loading, setLoading] = useState(false);
    const [basicInfo, setBasicInfo] = useState({nameOfFacility:"",licenseNo:"",phoneNo:"",address:"",facilityCity:"",facilityState:"",facilityZip:"",nameOfLicensee:"",telephone2:"",mailingAddress:"",city:"",state:"",zip:"",nameOfResident:"",ssNumber:"",dobClient:"",dateOfAdmission:"",responsiblePerson:"",relationship:"",resAddress:"",telephone3:""});
    const [serviceInfo, setSerInfo] = useState({lodging:"singleRoom",threeMeals:false,specialDiets:false,otherMeals:false,otherMealText:"",serviceLine1:"",serviceLine2:"",check7:false,check7Line1:"",check7Line2:"",check7Line3:"",check8:false,check8Line1:"",check8Line2:"",check8Line3:"",check9:false,check9Dressing:false,check9Eating:false,check9Toileting:false,check9Bathing:false,check9Grooming:false,check9Mobility:false,check9Other:false,check9Line1:"",check9Line2:"",check10:false,check11:false,check12:false,check13:false,check14:false,check15:false,check15Line1:"",check16:false,check17:false,check18:false,check18Line1:"",check18Line2:""});
    const [rate,setRate]=useState({mothlyPrivate:"",mothlySSI:"",itemR1C1:"",itemR1C2:"",itemR1C3:"",itemR2C1:"",itemR2C2:"",itemR2C3:"",itemR3C1:"",itemR3C2:"",itemR3C3:"", service6:false,service6Or:false,payment7BLine1:"",payment7BLine2:"",});
    const [pay, setPay]= useState({basicRate:"",serviceCost:"",thirdPartyService:"",total:"",paymentDueOn:"",paymentMethod:"",paymentDeliverTo:"",noticeDays:"",houseRule1:"",houseRule2:'',houseRule3:"",signDate1:"",signDate2:"",signDate3:""})
    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702324136/formOasisManors/hmqea5zfr4jwb4opl25y.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('nameOfFacility').setText(basicInfo?.nameOfFacility);
    form.getTextField('licenseNo').setText(basicInfo?.licenseNo);
    form.getTextField('phoneNo').setText(basicInfo?.phoneNo);
    form.getTextField('address').setText(basicInfo?.address);
    form.getTextField('facilityCity').setText(basicInfo?.facilityCity);
    form.getTextField('facilityState').setText(basicInfo?.facilityState);
    form.getTextField('facilityZip').setText(basicInfo?.facilityZip);
    form.getTextField('nameOfLicensee').setText(basicInfo?.nameOfLicensee);
    form.getTextField('telephone2').setText(basicInfo?.telephone2);
    form.getTextField('mailingAddress').setText(basicInfo?.mailingAddress);
    form.getTextField('city').setText(basicInfo?.city);
    form.getTextField('state').setText(basicInfo?.state);
    form.getTextField('zip').setText(basicInfo?.zip);
    form.getTextField('nameOfResident').setText(basicInfo?.nameOfResident);
    form.getTextField('ssNumber').setText(basicInfo?.ssNumber);
    form.getTextField('dobClient').setText(basicInfo?.dobClient);
    form.getTextField('dateOfAdmission').setText(basicInfo?.dateOfAdmission);
    form.getTextField('responsiblePerson').setText(basicInfo?.responsiblePerson);
    form.getTextField('relationship').setText(basicInfo?.relationship);
    form.getTextField('resAddress').setText(basicInfo?.resAddress);
    form.getTextField('telephone3').setText(basicInfo?.telephone3);
    {serviceInfo?.lodging && form.getRadioGroup('lodging').select(serviceInfo?.lodging)} 
    {serviceInfo?.threeMeals ? form.getCheckBox('threeMeals').check() : form.getCheckBox('threeMeals').uncheck }
    {serviceInfo?.specialDiets ? form.getCheckBox('specialDiets').check() : form.getCheckBox('specialDiets').uncheck }
    {serviceInfo?.otherMeals ? form.getCheckBox('otherMeals').check() : form.getCheckBox('otherMeals').uncheck }
    form.getTextField('otherMealText').setText(serviceInfo?.otherMealText);
    form.getTextField('serviceLine1').setText(serviceInfo?.serviceLine1);
    form.getTextField('serviceLine2').setText(serviceInfo?.serviceLine2);
    {serviceInfo?.check7 ? form.getCheckBox('check7').check() : form.getCheckBox('check7').uncheck }
    form.getTextField('check7Line1').setText(serviceInfo?.check7Line1);
    form.getTextField('check7Line2').setText(serviceInfo?.check7Line2);
    form.getTextField('check7Line3').setText(serviceInfo?.check7Line3);
    {serviceInfo?.check8 ? form.getCheckBox('check8').check() : form.getCheckBox('check8').uncheck }
    form.getTextField('check8Line1').setText(serviceInfo?.check8Line1);
    form.getTextField('check8Line2').setText(serviceInfo?.check8Line2);
    form.getTextField('check8Line3').setText(serviceInfo?.check8Line3);
    {serviceInfo?.check9 ? form.getCheckBox('check9').check() : form.getCheckBox('check9').uncheck }
    {serviceInfo?.check9Dressing ? form.getCheckBox('check9Dressing').check() : form.getCheckBox('check9Dressing').uncheck }
    {serviceInfo?.check9Eating ? form.getCheckBox('check9Eating').check() : form.getCheckBox('check9Eating').uncheck }
    {serviceInfo?.check9Toileting ? form.getCheckBox('check9Toileting').check() : form.getCheckBox('check9Toileting').uncheck }
    {serviceInfo?.check9Bathing ? form.getCheckBox('check9Bathing').check() : form.getCheckBox('check9Bathing').uncheck }
    {serviceInfo?.check9Grooming ? form.getCheckBox('check9Grooming').check() : form.getCheckBox('check9Grooming').uncheck }
    {serviceInfo?.check9Mobility ? form.getCheckBox('check9Mobility').check() : form.getCheckBox('check9Mobility').uncheck }
    {serviceInfo?.check9Other ? form.getCheckBox('check9Other').check() : form.getCheckBox('check9Other').uncheck }
    form.getTextField('check9Line1').setText(serviceInfo?.check9Line1);
    form.getTextField('check9Line2').setText(serviceInfo?.check9Line2);
    {serviceInfo?.check10 ? form.getCheckBox('check10').check() : form.getCheckBox('check10').uncheck }
    {serviceInfo?.check11 ? form.getCheckBox('check11').check() : form.getCheckBox('check11').uncheck }
    {serviceInfo?.check12 ? form.getCheckBox('check12').check() : form.getCheckBox('check12').uncheck }
    {serviceInfo?.check13 ? form.getCheckBox('check13').check() : form.getCheckBox('check13').uncheck }
    {serviceInfo?.check14 ? form.getCheckBox('check14').check() : form.getCheckBox('check14').uncheck }
    {serviceInfo?.check15 ? form.getCheckBox('check15').check() : form.getCheckBox('check15').uncheck }
    form.getTextField('check15Line1').setText(serviceInfo?.check15Line1);
    {serviceInfo?.check16 ? form.getCheckBox('check16').check() : form.getCheckBox('check16').uncheck }
    {serviceInfo?.check17 ? form.getCheckBox('check17').check() : form.getCheckBox('check17').uncheck }
    {serviceInfo?.check18 ? form.getCheckBox('check18').check() : form.getCheckBox('check18').uncheck }
    form.getTextField('check18Line1').setText(serviceInfo?.check18Line1);
    form.getTextField('check18Line2').setText(serviceInfo?.check18Line2);
    form.getTextField('mothlyPrivate').setText(rate?.mothlyPrivate);
    form.getTextField('mothlySSI').setText(rate?.mothlySSI);
    form.getTextField('itemR1C1').setText(rate?.itemR1C1);
    form.getTextField('itemR1C2').setText(rate?.itemR1C2);
    form.getTextField('itemR1C3').setText(rate?.itemR1C3);
    form.getTextField('itemR2C1').setText(rate?.itemR2C1);
    form.getTextField('itemR2C2').setText(rate?.itemR2C2);
    form.getTextField('itemR2C3').setText(rate?.itemR2C3);
    form.getTextField('itemR3C1').setText(rate?.itemR3C1);
    form.getTextField('itemR3C2').setText(rate?.itemR3C2);
    form.getTextField('itemR3C3').setText(rate?.itemR3C3);
    {rate?.service6 ? form.getCheckBox('service6').check() : form.getCheckBox('service6').uncheck }
    {rate?.service6Or ? form.getCheckBox('service6Or').check() : form.getCheckBox('service6Or').uncheck }
    form.getTextField('payment7BLine1').setText(rate?.payment7BLine1);
    form.getTextField('payment7BLine2').setText(rate?.payment7BLine2);
    form.getTextField('basicRate').setText(pay?.basicRate);
    form.getTextField('serviceCost').setText(pay?.serviceCost);
    form.getTextField('thirdPartyService').setText(pay?.thirdPartyService);
    form.getTextField('total').setText(pay?.total);
    form.getTextField('paymentDueOn').setText(pay?.paymentDueOn);
    form.getTextField('paymentMethod').setText(pay?.paymentMethod);
    form.getTextField('paymentDeliverTo').setText(pay?.paymentDeliverTo);
    form.getTextField('noticeDays').setText(pay?.noticeDays);
    form.getTextField('houseRule1').setText(pay?.houseRule1);
    form.getTextField('houseRule2').setText(pay?.houseRule2);
    form.getTextField('houseRule3').setText(pay?.houseRule3);
    form.getTextField('signDate1').setText(pay?.signDate1);
    form.getTextField('signDate2').setText(pay?.signDate2);
    form.getTextField('signDate3').setText(pay?.signDate3);
 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();
 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });


 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${basicInfo?.nameOfResident}-LIC604A.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic604a/${params.id}`);
    if(res.variant === "success"){
        setLoading(false);
        setBasicInfo(res.data.basicInfo);
        setSerInfo(res.data.serviceInfo);
        setRate(res.data.rate);
        setPay(res.data.pay)
    }else {console.log(res);setLoading(false)};    
   }
   if(params?.id){getData()}

 }, [params?.id])

 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
        
         <Button variant="contained" onClick={()=>fillForm()}>Download LIC 604A</Button>
          {/* <Tooltip arrow title="Grid View">
          <ToggleButton value="grid"  aria-label="gridView">
          <FcOrgUnit/>
          </ToggleButton>
          </Tooltip> */}
         
    </main>
  )
}

export default LIC604A;