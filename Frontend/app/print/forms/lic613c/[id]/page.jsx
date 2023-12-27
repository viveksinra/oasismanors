'use client';
import React,{useEffect} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { useState,} from 'react';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC613C({params}) {
    const [loading, setLoading] = useState(false);
    const [basicInfo, setBasicInfo] = useState({facilityName:"dfsdfsdfdsf",residentName:"dsfdsfsdfds",date:"05-Apr-2023",signOfResident:"sdfsdfsf",signOfPerson:"sdfsdfsdf",titleOfPerson:"asdfasdfsdf",name:"Raghav Kumar Jha",address:"ASdaskdhasdjkhasjkdhasasdasd",city:"dfsdfsdf",zipCode:"854311",phoneNo:"620506050ds",localOfficeNumer:"545615645614521454"})
    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702802467/formOasisManors/chzlfpvm8maove8bxlnu.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('facilityName').setText(basicInfo?.facilityName);
    form.getTextField('residentName').setText(basicInfo?.residentName);
    form.getTextField('date').setText(basicInfo?.date);
    // form.getTextField('signOfResident').setText(basicInfo?.signOfResident);
    form.getTextField('signOfPerson').setText(basicInfo?.signOfPerson);
    form.getTextField('titleOfPerson').setText(basicInfo?.titleOfPerson);
    form.getTextField('name').setText(basicInfo?.name);
    form.getTextField('address').setText(basicInfo?.address);
    form.getTextField('city').setText(basicInfo?.city);
    form.getTextField('zipCode').setText(basicInfo?.zipCode);
    form.getTextField('phoneNo').setText(basicInfo?.phoneNo);
    form.getTextField('localOfficeNumer').setText(basicInfo?.localOfficeNumer);
    


 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();

 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${basicInfo?.residentName}-LIC613C.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic613c/${params.id}`);
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
             <Button variant="contained" onClick={()=>fillForm()}>Download Form LIC 613C </Button>   
    </main>
  )
}




export default LIC613C;