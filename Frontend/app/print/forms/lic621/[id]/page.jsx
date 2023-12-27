'use client';
import React,{useEffect} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { useState,} from 'react';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC621({params}) {
    const [loading, setLoading] = useState(false);
    const [basicInfo, setBasicInfo] = useState({residentName:"",ssNo:"",n1:"",des1:"",date1:"",location1:"",n2:"",des2:"",date2:"",location2:"",n3:"",des3:"",date3:"",location3:"",n4:"",des4:"",date4:"",location4:"",n5:"",des5:"",date5:"",location5:"",n6:"",des6:"",date6:"",location6:"",n7:"",des7:"",date7:"",location7:"",n8:"",des8:"",date8:"",location8:"",n9:"",des9:"",date9:"",location9:"",n10:"",des10:"",date10:"",location10:"",n11:"",des11:"",date11:"",location11:"",n12:"",des12:"",date12:"",location12:"",n13:"",des13:"",date13:"",location13:"",n14:"",des14:"",date14:"",location14:"",})
    const [remove, setRemove]= useState({bn1:"",bdes1:"",bdate1:"",bl1:"",bn2:"",bdes2:"",bdate2:"",bl2:"",bn3:"",bdes3:"",bdate3:"",bl3:"",bn4:"",bdes4:"",bdate4:"",bl4:"",bn5:"",bdes5:"",bdate5:"",bl5:"",bn6:"",bdes6:"",bdate6:"",bl6:"",bn7:"",bdes7:"",bdate7:"",bl7:"",bn8:"",bdes8:"",bdate8:"",bl8:"",bn9:"",bdes9:"",bdate9:"",bl9:"",bn10:"",bdes10:"",bdate10:"",bl10:"",bn11:"",bdes11:"",bdate11:"",bl11:"",bn12:"",bdes12:"",bdate12:"",bl12:"",bn13:"",bdes13:"",bdate13:"",bl13:"",bn14:"",bdes14:"",bdate14:"",bl14:"",title:"",date:"",licensee:"",completedDate:""})
    async function fillForm() {
    try { 
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702910839/formOasisManors/uggborue8db4orsxudex.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('residentName').setText(basicInfo?.residentName);
    form.getTextField('ssNo').setText(basicInfo?.ssNo);
    form.getTextField('n1').setText(basicInfo?.n1);
    form.getTextField('des1').setText(basicInfo?.des1);
    form.getTextField('date1').setText(basicInfo?.date1);
    form.getTextField('location1').setText(basicInfo?.location1);
    form.getTextField('n2').setText(basicInfo?.n2);
    form.getTextField('des2').setText(basicInfo?.des2);
    form.getTextField('date2').setText(basicInfo?.date2);
    form.getTextField('location2').setText(basicInfo?.location2);
    form.getTextField('n3').setText(basicInfo?.n3);
    form.getTextField('des3').setText(basicInfo?.des3);
    form.getTextField('date3').setText(basicInfo?.date3);
    form.getTextField('location3').setText(basicInfo?.location3);
    form.getTextField('n4').setText(basicInfo?.n4);
    form.getTextField('des4').setText(basicInfo?.des4);
    form.getTextField('date4').setText(basicInfo?.date4);
    form.getTextField('location4').setText(basicInfo?.location4);
    form.getTextField('n5').setText(basicInfo?.n5);
    form.getTextField('des5').setText(basicInfo?.des5);
    form.getTextField('date5').setText(basicInfo?.date5);
    form.getTextField('location5').setText(basicInfo?.location5);
    form.getTextField('n6').setText(basicInfo?.n6);
    form.getTextField('des6').setText(basicInfo?.des6);
    form.getTextField('date6').setText(basicInfo?.date6);
    form.getTextField('location6').setText(basicInfo?.location6);
    form.getTextField('n7').setText(basicInfo?.n7);
    form.getTextField('des7').setText(basicInfo?.des7);
    form.getTextField('date7').setText(basicInfo?.date7);
    form.getTextField('location7').setText(basicInfo?.location7);
    form.getTextField('n8').setText(basicInfo?.n8);
    form.getTextField('des8').setText(basicInfo?.des8);
    form.getTextField('date8').setText(basicInfo?.date8);
    form.getTextField('location8').setText(basicInfo?.location8);
    form.getTextField('n9').setText(basicInfo?.n9);
    form.getTextField('des9').setText(basicInfo?.des9);
    form.getTextField('date9').setText(basicInfo?.date9);
    form.getTextField('location9').setText(basicInfo?.location9);
    form.getTextField('n10').setText(basicInfo?.n10);
    form.getTextField('des10').setText(basicInfo?.des10);
    form.getTextField('date10').setText(basicInfo?.date10);
    form.getTextField('location10').setText(basicInfo?.location10);
    form.getTextField('n11').setText(basicInfo?.n11);
    form.getTextField('des11').setText(basicInfo?.des11);
    form.getTextField('date11').setText(basicInfo?.date11);
    form.getTextField('location11').setText(basicInfo?.location11);
    form.getTextField('n12').setText(basicInfo?.n12);
    form.getTextField('des12').setText(basicInfo?.des12);
    form.getTextField('date12').setText(basicInfo?.date12);
    form.getTextField('location12').setText(basicInfo?.location12);
    form.getTextField('n13').setText(basicInfo?.n13);
    form.getTextField('des13').setText(basicInfo?.des13);
    form.getTextField('date13').setText(basicInfo?.date13);
    form.getTextField('location13').setText(basicInfo?.location13);
    form.getTextField('n14').setText(basicInfo?.n14);
    form.getTextField('des14').setText(basicInfo?.des14);
    form.getTextField('date14').setText(basicInfo?.date14);
    form.getTextField('location14').setText(basicInfo?.location14);

    form.getTextField('bn1').setText(remove?.bn1);
    form.getTextField('bdes1').setText(remove?.bdes1);
    form.getTextField('bdate1').setText(remove?.bdate1);
    form.getTextField('bl1').setText(remove?.bl1);
    form.getTextField('bn2').setText(remove?.bn2);
    form.getTextField('bdes2').setText(remove?.bdes2);
    form.getTextField('bdate2').setText(remove?.bdate2);
    form.getTextField('bl2').setText(remove?.bl2);
    form.getTextField('bn3').setText(remove?.bn3);
    form.getTextField('bdes3').setText(remove?.bdes3);
    form.getTextField('bdate3').setText(remove?.bdate3);
    form.getTextField('bl3').setText(remove?.bl3);
    form.getTextField('bn4').setText(remove?.bn4);
    form.getTextField('bdes4').setText(remove?.bdes4);
    form.getTextField('bdate4').setText(remove?.bdate4);
    form.getTextField('bl4').setText(remove?.bl4);
    form.getTextField('bn5').setText(remove?.bn5);
    form.getTextField('bdes5').setText(remove?.bdes5);
    form.getTextField('bdate5').setText(remove?.bdate5);
    form.getTextField('bl5').setText(remove?.bl5);
    form.getTextField('bn6').setText(remove?.bn6);
    form.getTextField('bdes6').setText(remove?.bdes6);
    form.getTextField('bdate6').setText(remove?.bdate6);
    form.getTextField('bl6').setText(remove?.bl6);
    form.getTextField('bn7').setText(remove?.bn7);
    form.getTextField('bdes7').setText(remove?.bdes7);
    form.getTextField('bdate7').setText(remove?.bdate7);
    form.getTextField('bl7').setText(remove?.bl7);
    form.getTextField('bn8').setText(remove?.bn8);
    form.getTextField('bdes8').setText(remove?.bdes8);
    form.getTextField('bdate8').setText(remove?.bdate8);
    form.getTextField('bl8').setText(remove?.bl8);
    form.getTextField('bn9').setText(remove?.bn9);
    form.getTextField('bdes9').setText(remove?.bdes9);
    form.getTextField('bdate9').setText(remove?.bdate9);
    form.getTextField('bl9').setText(remove?.bl9);
    form.getTextField('bn10').setText(remove?.bn10);
    form.getTextField('bdes10').setText(remove?.bdes10);
    form.getTextField('bdate10').setText(remove?.bdate10);
    form.getTextField('bl10').setText(remove?.bl10);
    form.getTextField('bn11').setText(remove?.bn11);
    form.getTextField('bdes11').setText(remove?.bdes11);
    form.getTextField('bdate11').setText(remove?.bdate11);
    form.getTextField('bl11').setText(remove?.bl11);
    form.getTextField('bn12').setText(remove?.bn12);
    form.getTextField('bdes12').setText(remove?.bdes12);
    form.getTextField('bdate12').setText(remove?.bdate12);
    form.getTextField('bl12').setText(remove?.bl12);
    form.getTextField('bn13').setText(remove?.bn13);
    form.getTextField('bdes13').setText(remove?.bdes13);
    form.getTextField('bdate13').setText(remove?.bdate13);
    form.getTextField('bl13').setText(remove?.bl13);
    form.getTextField('bn14').setText(remove?.bn14);
    form.getTextField('bdes14').setText(remove?.bdes14);
    form.getTextField('bdate14').setText(remove?.bdate14);
    form.getTextField('bl14').setText(remove?.bl14);

    form.getTextField('title').setText(remove?.title);
    form.getTextField('date').setText(remove?.date);
    form.getTextField('licensee').setText(remove?.licensee);
    form.getTextField('completedDate').setText(remove?.completedDate);
    // Save the modified PDF
    const modifiedPdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

    // Create a download link and trigger a click to download the file
     const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${basicInfo?.residentName}-LIC621.pdf`;
    link.click();
    } catch (error) {
    console.error('Error filling the form:', error);
    }
    }

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic621/${params.id}`);
    if(res.variant === "success"){
      setLoading(false);
      setBasicInfo(res.data.basicInfo)
      setRemove(res.data.pay)
    }else {console.log(res);setLoading(false)};    
   }
   if(params?.id){getData()}
 }, [params?.id])

 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
            <Button variant="contained" onClick={()=>fillForm()}>Download Form LIC 621 </Button>     
               
    </main>
  )
}

export default LIC621;