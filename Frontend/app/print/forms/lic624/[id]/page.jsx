'use client';
import React,{useEffect} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { useState,} from 'react';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC624({params}) {
    const [loading, setLoading] = useState(false);
    async function fillForm() {
    try {
    // const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1703238723/formOasisManors/ndghkz30etzixosjkfpe.pdf';
    const formUrl = 'https://test.rcfesoftware.com/report_templates/1/LIC602A%20physician%20report.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes,{ ignoreEncryption: true });
    
    // Save the modified PDF
    const modifiedPdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

    // Create a download link and trigger a click to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `LIC624.pdf`;
    link.click();
    } catch (error) {
     console.error('Error filling the form:', error);
          }
    }

// useEffect(() => {
//   // Getting all the data
//   async function getData(){
//     setLoading(true);
//     let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic603/${params.id}`);
//     if(res.variant === "success"){
//       setLoading(false);
//       setAmb(res.data.amb);
//       setBasicInfo(res.data.basicInfo);
//       setFnc(res.data.fnc);
//       setSer(res.data.ser);
//     }else {console.log(res);setLoading(false)};    
//    }
//    if(params?.id){getData()}

//  }, [params?.id])

 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
           <Button href="https://test.rcfesoftware.com/report_templates/1/lic624%20unusual%20incident.pdf" download variant="contained" >Download Form LIC 624 </Button>
           
    </main>
  )
}


export default LIC624