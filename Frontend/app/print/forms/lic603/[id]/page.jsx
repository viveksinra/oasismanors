'use client';
import React,{useEffect} from 'react'
import {Button,CircularProgress,Typography  } from '@mui/material/';
import { useState,} from 'react';
import { PDFDocument } from 'pdf-lib'
import {invoiceService} from "../../../../services/index"


export function LIC603({params}) {
    const [loading, setLoading] = useState(false);
    const [basicInfo, setBasicInfo] = useState({applicantName:"sdd",age:"sadasf",health1:"asdfsd",health2:"adsfdsf",disabile1:"asdfsd",disabile2:"sdf",disabile3:"asdfasd",disabile4:"asdf",disabile5:"asdf",mental1:"asdf",mental2:"asdf",mental3:"asdf",mental4:"asdf",history1:"wedfasdf",history2:"asdfasdfwef",history3:"asdfasdf",history4:"asdfasdf",history5:"asdfsd",social1:"asdfasdf",social2:"asdfsdf",social3:"asdf",comment:"asdf",dateOfTBTest:"asdf",actionTaken:"asdf",givenDetails:"asdf",outOfBed:false,bedAll:false,bedPart:"yes",tuberculosis:"yes",ambulatory:"yes"});
    const [amb, setAmb] = useState({amy1:true,amn1:true,amy2:true,amn2:true,amy3:true,amn3:true,amy4:true,amn4:true})
    const [fnc, setFnc] = useState({fy1:true,fn1:true,fy2:true,fn2:true,fy3:true,fn3:true,fy4:true,fn4:true,fy5:true,fn5:true,fy6:true,fn6:true,fy7:true,fn7:true,fy8:true,fn8:true,fy9:true,fn9:true,fy10:true,fn10:true})
    const [ser, setSer] = useState({sy1:true,sn1:true,sy2:true,sn2:true,sy3:true,sn3:true,sy4:true,sn4:true,sy5:true,sn5:true,sy6:true,sn6:true,sy7:true,sn7:true,sy8:true,sn8:true,sy9:true,sn9:true,sy10:true,sn10:true,sy11:true,sn11:true,sy12:true,sn12:true,sy13:true,sn13:true,sy14:true,sn14:true,sy15:true,sn15:true,sy16:true,sn16:true,dateComp:"dsdfsdf",dateCom2:"sdsdsd54",dateOfComp3:"sdsfsdf",licensee:"sdfsdfsdf",applicantRepre:"asfsdf"})
    async function fillForm() {
    try {
    const formUrl = 'https://res.cloudinary.com/oasismanor/image/upload/v1702794638/formOasisManors/q46nwuoabk9yh3jbxyvs.pdf';
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();
    form.getTextField('applicantName').setText(basicInfo?.applicantName);
    form.getTextField('age').setText(basicInfo?.age);
    form.getTextField('health1').setText(basicInfo?.health1);
    form.getTextField('health2').setText(basicInfo?.health2);
    form.getTextField('disabile1').setText(basicInfo?.disabile1);
    form.getTextField('disabile2').setText(basicInfo?.disabile2);
    form.getTextField('disabile3').setText(basicInfo?.disabile3);
    form.getTextField('disabile4').setText(basicInfo?.disabile4);
    form.getTextField('disabile5').setText(basicInfo?.disabile5);
    form.getTextField('mental1').setText(basicInfo?.mental1);
    form.getTextField('mental2').setText(basicInfo?.mental2);
    form.getTextField('mental3').setText(basicInfo?.mental3);
    form.getTextField('mental4').setText(basicInfo?.mental4);
    form.getTextField('history1').setText(basicInfo?.history1);
    form.getTextField('history2').setText(basicInfo?.history2);
    form.getTextField('history3').setText(basicInfo?.history3);
    form.getTextField('history4').setText(basicInfo?.history4);
    form.getTextField('history5').setText(basicInfo?.history5);
    form.getTextField('social1').setText(basicInfo?.social1);
    form.getTextField('social2').setText(basicInfo?.social2);
    form.getTextField('social3').setText(basicInfo?.social3);
    form.getTextField('comment').setText(basicInfo?.comment);
    form.getTextField('dateOfTBTest').setText(basicInfo?.dateOfTBTest);
    form.getTextField('actionTaken').setText(basicInfo?.actionTaken);
    form.getTextField('givenDetails').setText(basicInfo?.givenDetails);
    {basicInfo?.outOfBed ? form.getCheckBox('outOfBed').check() : form.getCheckBox('outOfBed').uncheck }
    {basicInfo?.bedAll ? form.getCheckBox('bedAll').check() : form.getCheckBox('bedAll').uncheck }
    {basicInfo?.bedPart ? form.getCheckBox('bedPart').check() : form.getCheckBox('bedPart').uncheck }
    form.getRadioGroup('tuberculosis').select(basicInfo?.tuberculosis);
    form.getRadioGroup('ambulatory').select(basicInfo?.ambulatory);
    {amb?.amy1 ? form.getCheckBox('amy1').check() : form.getCheckBox('amy1').uncheck }
    {amb?.amn1 ? form.getCheckBox('amn1').check() : form.getCheckBox('amn1').uncheck }
    {amb?.amy2 ? form.getCheckBox('amy2').check() : form.getCheckBox('amy2').uncheck }
    {amb?.amn2 ? form.getCheckBox('amn2').check() : form.getCheckBox('amn2').uncheck }
    {amb?.amy3 ? form.getCheckBox('amy3').check() : form.getCheckBox('amy3').uncheck }
    {amb?.amn3 ? form.getCheckBox('amn3').check() : form.getCheckBox('amn3').uncheck }
    {amb?.amy4 ? form.getCheckBox('amy4').check() : form.getCheckBox('amy4').uncheck }
    {amb?.amn4 ? form.getCheckBox('amn4').check() : form.getCheckBox('amn4').uncheck }
    {fnc?.fy1 ? form.getCheckBox('fy1').check() : form.getCheckBox('fy1').uncheck }
    {fnc?.fn1 ? form.getCheckBox('fn1').check() : form.getCheckBox('fn1').uncheck }
    {fnc?.fy2 ? form.getCheckBox('fy2').check() : form.getCheckBox('fy2').uncheck }
    {fnc?.fn2 ? form.getCheckBox('fn2').check() : form.getCheckBox('fn2').uncheck }
    {fnc?.fy3 ? form.getCheckBox('fy3').check() : form.getCheckBox('fy3').uncheck }
    {fnc?.fn3 ? form.getCheckBox('fn3').check() : form.getCheckBox('fn3').uncheck }
    {fnc?.fy4 ? form.getCheckBox('fy4').check() : form.getCheckBox('fy4').uncheck }
    {fnc?.fn4 ? form.getCheckBox('fn4').check() : form.getCheckBox('fn4').uncheck }
    {fnc?.fy5 ? form.getCheckBox('fy5').check() : form.getCheckBox('fy5').uncheck }
    {fnc?.fn5 ? form.getCheckBox('fn5').check() : form.getCheckBox('fn5').uncheck }
    {fnc?.fy6 ? form.getCheckBox('fy6').check() : form.getCheckBox('fy6').uncheck }
    {fnc?.fn6 ? form.getCheckBox('fn6').check() : form.getCheckBox('fn6').uncheck }
    {fnc?.fy7 ? form.getCheckBox('fy7').check() : form.getCheckBox('fy7').uncheck }
    {fnc?.fn7 ? form.getCheckBox('fn7').check() : form.getCheckBox('fn7').uncheck }
    {fnc?.fy8 ? form.getCheckBox('fy8').check() : form.getCheckBox('fy8').uncheck }  
    {fnc?.fn8 ? form.getCheckBox('fn8').check() : form.getCheckBox('fn8').uncheck }
    {fnc?.fy9 ? form.getCheckBox('fy9').check() : form.getCheckBox('fy9').uncheck }
    {fnc?.fn9 ? form.getCheckBox('fn9').check() : form.getCheckBox('fn9').uncheck }
    {fnc?.fy10 ? form.getCheckBox('fy10').check() : form.getCheckBox('fy10').uncheck }
    {fnc?.fn10 ? form.getCheckBox('fn10').check() : form.getCheckBox('fn10').uncheck }
    
    {ser?.sy1 ? form.getCheckBox('sy1').check() : form.getCheckBox('sy1').uncheck }
    {ser?.sn1 ? form.getCheckBox('sn1').check() : form.getCheckBox('sn1').uncheck }
    {ser?.sy2 ? form.getCheckBox('sy2').check() : form.getCheckBox('sy2').uncheck }
    {ser?.sn2 ? form.getCheckBox('sn2').check() : form.getCheckBox('sn2').uncheck }
    {ser?.sy3 ? form.getCheckBox('sy3').check() : form.getCheckBox('sy3').uncheck }
    {ser?.sn3 ? form.getCheckBox('sn3').check() : form.getCheckBox('sn3').uncheck }
    {ser?.sy4 ? form.getCheckBox('sy4').check() : form.getCheckBox('sy4').uncheck }
    {ser?.sn4 ? form.getCheckBox('sn4').check() : form.getCheckBox('sn4').uncheck }
    {ser?.sy5 ? form.getCheckBox('sy5').check() : form.getCheckBox('sy5').uncheck }
    {ser?.sn5 ? form.getCheckBox('sn5').check() : form.getCheckBox('sn5').uncheck }
    {ser?.sy6 ? form.getCheckBox('sy6').check() : form.getCheckBox('sy6').uncheck }
    {ser?.sn6 ? form.getCheckBox('sn6').check() : form.getCheckBox('sn6').uncheck }
    {ser?.sy7 ? form.getCheckBox('sy7').check() : form.getCheckBox('sy7').uncheck }
    {ser?.sn7 ? form.getCheckBox('sn7').check() : form.getCheckBox('sn7').uncheck }
    {ser?.sy8 ? form.getCheckBox('sy8').check() : form.getCheckBox('sy8').uncheck }
    {ser?.sn8 ? form.getCheckBox('sn8').check() : form.getCheckBox('sn8').uncheck }
    {ser?.sy9 ? form.getCheckBox('sy9').check() : form.getCheckBox('sy9').uncheck }
    {ser?.sn9 ? form.getCheckBox('sn9').check() : form.getCheckBox('sn9').uncheck }
    {ser?.sy10 ? form.getCheckBox('sy10').check() : form.getCheckBox('sy10').uncheck }
    {ser?.sn10 ? form.getCheckBox('sn10').check() : form.getCheckBox('sn10').uncheck }
    {ser?.sy11 ? form.getCheckBox('sy11').check() : form.getCheckBox('sy11').uncheck }
    {ser?.sn11 ? form.getCheckBox('sn11').check() : form.getCheckBox('sn11').uncheck }
    {ser?.sy12 ? form.getCheckBox('sy12').check() : form.getCheckBox('sy12').uncheck }
    {ser?.sn12 ? form.getCheckBox('sn12').check() : form.getCheckBox('sn12').uncheck }
    {ser?.sy13 ? form.getCheckBox('sy13').check() : form.getCheckBox('sy13').uncheck }
    {ser?.sn13 ? form.getCheckBox('sn13').check() : form.getCheckBox('sn13').uncheck }
    {ser?.sy14 ? form.getCheckBox('sy14').check() : form.getCheckBox('sy14').uncheck }
    {ser?.sn14 ? form.getCheckBox('sn14').check() : form.getCheckBox('sn14').uncheck }
    {ser?.sy15 ? form.getCheckBox('sy15').check() : form.getCheckBox('sy15').uncheck }
    {ser?.sn15 ? form.getCheckBox('sn15').check() : form.getCheckBox('sn15').uncheck }
    {ser?.sy16 ? form.getCheckBox('sy16').check() : form.getCheckBox('sy16').uncheck }
    {ser?.sn16 ? form.getCheckBox('sn16').check() : form.getCheckBox('sn16').uncheck }
    form.getTextField('dateComp').setText(basicInfo?.dateComp);
    form.getTextField('dateCom2').setText(basicInfo?.dateCom2);
    form.getTextField('dateOfComp3').setText(basicInfo?.dateOfComp3);
    form.getTextField('applicantRepre').setText(basicInfo?.applicantRepre);
    form.getTextField('licensee').setText(basicInfo?.licensee);

  
  

 // Save the modified PDF
 const modifiedPdfBytes = await pdfDoc.save();

 // Create a Blob from the PDF bytes
 const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

 // Create a download link and trigger a click to download the file
 const link = document.createElement('a');
 link.href = URL.createObjectURL(blob);
 link.download = `${basicInfo?.applicantName}-LIC603.pdf`;
 link.click();
} catch (error) {
 console.error('Error filling the form:', error);
}
}

useEffect(() => {
  // Getting all the data
  async function getData(){
    setLoading(true);
    let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic603/${params.id}`);
    if(res.variant === "success"){
      setLoading(false);
      setAmb(res.data.amb);
      setBasicInfo(res.data.basicInfo);
      setFnc(res.data.fnc);
      setSer(res.data.ser);
    }else {console.log(res);setLoading(false)};    
   }
   if(params?.id){getData()}

 }, [params?.id])

 useEffect(() => {
  fillForm()
 }, [])
 
if(loading){
    return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Form...</Typography></div>
  } else
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}} className='center'>
           <Button variant="contained" onClick={()=>fillForm()}>Download Form LIC 603 </Button>   
            
    </main>
  )
}




export default LIC603;