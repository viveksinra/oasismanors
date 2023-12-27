'use client';
import React,{useEffect} from 'react'
import {ToggleButton,Tooltip,CircularProgress,Typography, Button  } from '@mui/material/';
import { useState,} from 'react';
import {FcOrgUnit} from "react-icons/fc";
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC605A({params}) {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({hospitalName:"City Hospital",date:"05-Apr-2023",address:"dssfsdfdsfsdfsdf",personName:"15116 Roxford St",facilityName:"sdsdsfdfdsffsdfs",expireDate:"CA",representative:"645144",relation:"Dr Akhilesh Jha",repAddress:"564516514"});
    
    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702481426/formOasisManors/yeiinya1tpqodrebwxaa.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('hospitalName').setText(info?.hospitalName);
    form.getTextField('date').setText(info?.date);
    form.getTextField('address').setText(info?.address);
    form.getTextField('personName').setText(info?.personName);
    form.getTextField('facilityName').setText(info?.facilityName);
    form.getTextField('expireDate').setText(info?.expireDate);
    form.getTextField('representative').setText(info?.representative);
    form.getTextField('relation').setText(info?.relation);
    form.getTextField('repAddress').setText(info?.repAddress);
    

 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();

 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${info?.personName}-LIC605A.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic605a/${params.id}`);
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
        <Button variant="contained" onClick={()=>fillForm()}> Download Form LIC 605A </Button>

    </main>
  )
}




export default LIC605A;