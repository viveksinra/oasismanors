'use client';
import React,{useEffect} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { useState,} from 'react';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC627C({params}) {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({facilityName:"",name:"",allergies:"",date:"",sign:"",homeAddress:"",phone:"",workPhone:""});
    
    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702483972/formOasisManors/u0q1nfjfricmc4yo7hi1.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('facilityName').setText(info?.facilityName);
    form.getTextField('name').setText(info?.name);  
    form.getTextField('allergies').setText(info?.allergies);
    form.getTextField('date').setText(info?.date);
    // form.getTextField('sign').setText(info?.sign);
    form.getTextField('homeAddress').setText(info?.homeAddress);
    form.getTextField('phone').setText(info?.phone);
    form.getTextField('workPhone').setText(info?.workPhone);
    

 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();

 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${info?.name}-LIC627C.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic627c/${params.id}`);
    if(res.variant === "success"){
      setLoading(false);
      setInfo(res.data)
    }else {console.log(res);setLoading(false)};    
   }
   if(params?.id){getData()}

 }, [params?.id])

 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
           <Button variant="contained" onClick={()=>fillForm()}>Download Form LIC 627C </Button>     
    </main>
  )
}




export default LIC627C;