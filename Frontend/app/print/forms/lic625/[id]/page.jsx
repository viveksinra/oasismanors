'use client';
import React,{useEffect} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { useState,} from 'react';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC625({params}) {
    const [loading, setLoading] = useState(false);
    const [basicInfo, setBasicInfo] = useState({residentName:"sdd",dob:"asdfsd",age:"asdfs",sex:"female",date:"05-Ap-2023",facilityName:"sdfsf",facilityAddress:"asdfasdf",admission:true,update:false,person:"asdfasdf",licenseNumber:"sdfsdfsdf",phone:"asdfsdfasf",backgroundInfo:"dasdfsfsdfsdfsdfsdfsdfsd",});
    const [socialInfo, setSocialInfo] = useState({social1:"asdfsdf",social2:"asdfasdfsd",social3:"asdfasdf",social4:"asdfasdf",social5:"asdfasdf",emotion1:"Dasfdf",emotion2:"asdfasdf",emotion3:"Asdfasdfsdf",emotion4:"asdfasdfasdf",emotion5:"asdfasdfsdf",mental1:"sdfsdfsdf",mental2:"afsdfasdfsdf",mental3:"asdfasdfsdf",mental4:"asdfasdfasdf",mental5:"asdfasdfasdfs",physical1:"Dsfsdfdsfdsf",physical2:"sdfsdfsdfsdfs",physical3:"dfsdfsdfsdfsdf",physical4:"physical1dsdsdfsdf",physical5:"ddfsfsdfsdfsdfdfsdf",skill:"dsfsdfsdfsf",plan:"sdfsdfsdfsdfs",timeFrame:"sdfsdfsdfsdf",implement:"sdfsfdfwef51451",evaluation:"sdfsdfasdfsafdf41",dateOfSign:"sddsafsd",client:"sdfsfsdf",dateByClient:'aasdfasdf',clientDate:"sdfsdfsdf"});

    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702800842/formOasisManors/jssm7svqswfxsnz6uywr.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('residentName').setText(basicInfo?.residentName);
    form.getTextField('dob').setText(basicInfo?.dob);
    form.getTextField('age').setText(basicInfo?.age);
    form.getRadioGroup('sex').select(basicInfo?.sex);
    form.getTextField('date').setText(basicInfo?.date);
    form.getTextField('facilityName').setText(basicInfo?.facilityName);
    form.getTextField('facilityAddress').setText(basicInfo?.facilityAddress);
    {basicInfo?.admission ? form.getCheckBox('admission').check() : form.getCheckBox('admission').uncheck }
    {basicInfo?.update ? form.getCheckBox('update').check() : form.getCheckBox('update').uncheck }
    form.getTextField('person').setText(basicInfo?.person);
    form.getTextField('licenseNumber').setText(basicInfo?.licenseNumber);
    form.getTextField('phone').setText(basicInfo?.phone);
    form.getTextField('backgroundInfo').setText(basicInfo?.backgroundInfo);

    form.getTextField('social1').setText(socialInfo?.social1);
    form.getTextField('social2').setText(socialInfo?.social2);
    form.getTextField('social3').setText(socialInfo?.social3);
    form.getTextField('social4').setText(socialInfo?.social4);
    form.getTextField('social5').setText(socialInfo?.social5);
    form.getTextField('emotion1').setText(socialInfo?.emotion1);
    form.getTextField('emotion2').setText(socialInfo?.emotion2);
    form.getTextField('emotion3').setText(socialInfo?.emotion3);
    form.getTextField('emotion4').setText(socialInfo?.emotion4);
    form.getTextField('emotion5').setText(socialInfo?.emotion5);
    form.getTextField('mental1').setText(socialInfo?.mental1);
    form.getTextField('mental2').setText(socialInfo?.mental2);
    form.getTextField('mental3').setText(socialInfo?.mental3);
    form.getTextField('mental4').setText(socialInfo?.mental4);
    form.getTextField('mental5').setText(socialInfo?.mental5);
    form.getTextField('physical1').setText(socialInfo?.physical1);
    form.getTextField('physical2').setText(socialInfo?.physical2);
    form.getTextField('physical3').setText(socialInfo?.physical3);
    form.getTextField('physical4').setText(socialInfo?.physical4);
    form.getTextField('physical5').setText(socialInfo?.physical5);
    form.getTextField('skill').setText(socialInfo?.skill);
    form.getTextField('plan').setText(socialInfo?.plan);
    form.getTextField('timeFrame').setText(socialInfo?.timeFrame);
    form.getTextField('implement').setText(socialInfo?.implement);
    form.getTextField('evaluation').setText(socialInfo?.evaluation);
    form.getTextField('dateOfSign').setText(socialInfo?.dateOfSign);
    form.getTextField('client').setText(socialInfo?.client);
    form.getTextField('dateByClient').setText(socialInfo?.dateByClient);
    form.getTextField('clientDate').setText(socialInfo?.clientDate);

 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();

 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${basicInfo?.residentName}-LIC625.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic625/${params.id}`);
    if(res.variant === "success"){
      setLoading(false);
      setBasicInfo(res.data.basicInfo);
      setSocialInfo(res.data.pay);
    }else {console.log(res);setLoading(false)};    
   }
   if(params?.id){getData()}

 }, [params?.id])

 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
          <Button variant="contained" onClick={()=>fillForm()}>Download Form LIC 625 </Button>     
        
    </main>
  )
}




export default LIC625;