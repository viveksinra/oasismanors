'use client';
import React,{useEffect} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { useState,} from 'react';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC9158({params}) {
    const [loading, setLoading] = useState(false);
    const [basicInfo, setBasicInfo] = useState({tele1:true,tele2:true,tele3:true,tele4:true,tele5:true,tele6:true,tele7:true,tele8:true,date:"April-05-2023",person:"SDSDJKJjkj",date2:"Apr-05-2020",facilityName:"Oasis Homes",facityAddress:"sdfsdfsdfsdfsdfsdfsd",date3:"Apr-05-2023"})
    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702808050/formOasisManors/zyyjnq7prwb1k5xecfib.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    {basicInfo?.tele1 ? form.getCheckBox('tele1').check() : form.getCheckBox('tele1').uncheck }
    {basicInfo?.tele2 ? form.getCheckBox('tele2').check() : form.getCheckBox('tele2').uncheck }
    {basicInfo?.tele3 ? form.getCheckBox('tele3').check() : form.getCheckBox('tele3').uncheck }
    {basicInfo?.tele4 ? form.getCheckBox('tele4').check() : form.getCheckBox('tele4').uncheck }
    {basicInfo?.tele5 ? form.getCheckBox('tele5').check() : form.getCheckBox('tele5').uncheck }
    {basicInfo?.tele6 ? form.getCheckBox('tele6').check() : form.getCheckBox('tele6').uncheck }
    {basicInfo?.tele7 ? form.getCheckBox('tele7').check() : form.getCheckBox('tele7').uncheck }
    {basicInfo?.tele8 ? form.getCheckBox('tele8').check() : form.getCheckBox('tele8').uncheck }
    form.getTextField('date').setText(basicInfo?.date);
    form.getTextField('person').setText(basicInfo?.person);
    form.getTextField('date2').setText(basicInfo?.date2);
    form.getTextField('facilityName').setText(basicInfo?.facilityName);
    form.getTextField('facityAddress').setText(basicInfo?.facityAddress);
    form.getTextField('date3').setText(basicInfo?.date3);

 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();

 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${basicInfo?.person}-LIC9158.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic9158/${params.id}`);
    if(res.variant === "success"){
      setLoading(false);
      setBasicInfo(res.data.basicInfo)
    }else {console.log(res);setLoading(false)};    
   }
   if(params?.id){getData()}

 }, [params?.id])

 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
            <Button variant="contained" onClick={()=>fillForm()}>Download Form LIC 9158 </Button>     
               
    </main>
  )
}




export default LIC9158;