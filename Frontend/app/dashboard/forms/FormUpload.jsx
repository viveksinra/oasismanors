import React,{useState,useRef} from 'react'
import { useImgUpload } from '@/app/hooks/auth/useImgUpload';
import { payReceiveService } from "../../services";
import {FcBinoculars} from "react-icons/fc";
import {Typography, CircularProgress,Dialog,DialogContent,DialogActions, Grid,TextField, Button,Divider, InputAdornment} from '@mui/material/';
import Link from 'next/link';
import MySnackbar from "../../Components/MySnackbar/MySnackbar";

function FormUpload({uploader,setUploader,getForms}) {
    const [fileUrl, setFileUrl] = useState("");
    const [loadingImg, setLoadingImg] = useState(false);
    const [file, setFile] = useState(null);
    const [signatureDate, setSignDate] = useState("");
    const [expirationDate, setExpiryDate] = useState("");
    const snackRef = useRef();

    const imgUpload= async (formNoLink, residenceId)=>{
        setLoadingImg(true)
        let url = await useImgUpload(file);
        if(url){
          let res = await payReceiveService.savePayRec(`api/v1/common/complianceDocs/addComplianceDocs`, {fileLink:url, formNoLink,residenceId,signatureDate,expirationDate});
          if(res.variant === "success"){
            snackRef.current.handleSnack(res);
            setFileUrl(url)
            getForms();
          }else snackRef.current.handleSnack({message:"Something Went Wrong.", variant:"warning"}); 
          setLoadingImg(false)
        } else {
          snackRef.current.handleSnack({message:"Something Went Wrong. Please try again.", variant:"warning"}); 
          setLoadingImg(false)}
      }
      
  return (
    <section>
    <Dialog  maxWidth="md" open={uploader.open}>
      <DialogContent>
      {fileUrl ? <Typography align="center" variant="subtitle1" color="green">Your file has been uploaded, Successfully.</Typography> : <Typography variant="h6" align='center'>Upload</Typography> } 
      <Typography variant="subtitle1" align="center"><strong>{uploader?.m?.formName} ~ {uploader?.m?.formNo}</strong> </Typography>
      {uploader?.r?.residentName && <Typography color="teal" align="center">For Resident : {uploader?.r?.residentName}</Typography>}
      <Divider/>
        <br/>
        {fileUrl ? <Grid>
           <Link target="_blank" rel="noopener noreferrer" href={fileUrl}><Button fullWidth variant="contained" endIcon={<FcBinoculars  />}>View Uploaded Form</Button></Link>  </Grid> : 
        <Grid>
        <TextField type="file" fullWidth label="Upload your Document" disabled={loadingImg} helperText="PDF and Image Files are only allowed." InputProps={{
              endAdornment: <InputAdornment position="start">{loadingImg && <CircularProgress size={25}/>} </InputAdornment>,
            }} focused onChange={(e) => setFile(e.target.files[0])} inputProps={{ accept:"image/*, application/pdf" }} variant="outlined" />
              <br/> 
        <Grid container spacing={2}>
        <Grid item xs={6}> <TextField focused fullWidth label="Signature Date" type="date" disabled={loadingImg} onChange={e=>setSignDate(e.target.value)} value={signatureDate} variant="standard" /> </Grid>
        <Grid item xs={6}> <TextField focused fullWidth label="Expiration Date" type="date" disabled={loadingImg} onChange={e=>setExpiryDate(e.target.value)} value={expirationDate} variant="standard" />  </Grid>
        <Grid item xs={12}>
          <Button variant="contained" disabled={loadingImg} onClick={()=>imgUpload(uploader?.m?.formNoLink, uploader?.r?._id)} fullWidth>Upload File</Button>
        </Grid>
          </Grid>
        </Grid>  }
      </DialogContent>
      <DialogActions>
          <Button onClick={()=>{setUploader({open:false}); setFile(null); setFileUrl(""); setSignDate(""); setExpiryDate("")}} variant="outlined" color="warning">Close</Button>
        </DialogActions>
    </Dialog>
    <MySnackbar ref={snackRef} />
  </section>
    
  )
}

export default FormUpload