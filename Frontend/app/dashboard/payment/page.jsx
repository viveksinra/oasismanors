'use client';
import "./paymentStyle.css";
import React,{useEffect, useState} from 'react'
import {Grid,TextField,Typography,InputAdornment,CircularProgress, Button,Input ,Avatar,List,ListItem,ListItemAvatar,ListItemText,ListItemButton, Divider} from '@mui/material/';
import {todayDate} from "../../Components/StaticData";
import Autocomplete from '@mui/material/Autocomplete';
import { FcFullTrash,FcSearch } from "react-icons/fc";
import { MdDoneAll,MdClearAll } from "react-icons/md";
import { useImgUpload } from '@/app/hooks/auth/useImgUpload'; 

function Payment() {
  const [_id, setId] = useState("");
  const [date, setDate] = useState("");
  const [voucher, setVoucher] = useState("432");
  const [cb, setCb] = useState("450");
  const [ledger, setLedger]= useState(null);
  const [amount, setAmount] = useState("");
  const [mode,setMode] = useState(null);
  const [remark, setRemark] = useState("");
  const [reminderDate, setRemind] =useState("");
  const [url, setDocUrl]=useState("");
  const [loadingDoc, setLoadingDoc]= useState(false)
 
  const [allLedgers]= useState([{label:"Raghav Jha", id:"sdw545",category:"Employee"},{label:"Vivek", id:"15465sd",category:"Employee"},{label:"John Petter", id:"65454ewfds",category:"Residents"},{label:"Alecgender", id:"weewe",category:"Residents"},{label:"Jorg Bouse", id:"sdsdsdwe",category:"Residents"}])
  const [allModes] = useState([{label:"Cash 1", id:"sd6551",category:"Cash"},{label:"Cash 2", id:"65484551sdsd",category:"Cash"},{label:"Canara Bank - 4547", id:"1564sds",category:"Banks"},{label:"State Bank of US - 1840", id:"sd13645",category:"Banks"},{label:"Zelle", id:"3164sdsd",category:"Online Wallet"}])
  const [result,setResult]= useState([{_id:"sdsd545",voucher:"431", ledger:"John F Kenedey", date:"Jun-19-2023", amount:"450", mode:"Cash",userImage:"https://mui.com/static/images/avatar/3.jpg", url:"https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/recruitment-disclaimer-min.jpg"},{_id:"sdswe1151",voucher:"430", ledger:"Thmos Alwa Edition", date:"Jun-25-2023", amount:"1654", mode:"Online",userImage:"https://mui.com/static/images/avatar/3.jpg", url:"https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/recruitment-disclaimer-min.jpg"},{_id:"sdsd545",voucher:"431", ledger:"John F Kenedey", date:"Jun-19-2023", amount:"450", mode:"Cash",userImage:"https://mui.com/static/images/avatar/3.jpg", url:"https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/recruitment-disclaimer-min.jpg"},{_id:"sdswe1151",voucher:"430", ledger:"Thmos Alwa Edition", date:"Jun-25-2023", amount:"1654", mode:"Online",userImage:"https://mui.com/static/images/avatar/3.jpg", url:"https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/recruitment-disclaimer-min.jpg"}]);

  const imgUpload= async (e)=>{
    setLoadingDoc(true)
    let url = await useImgUpload(e);
    if(url){
      setDocUrl(url);
      setLoadingDoc(false)
    } else {
      snackRef.current.handleSnack({message:"Image Not Selected", info:"warning"}); 
      setLoadingDoc(false)}
  }

  useEffect(() => {
    setDate(todayDate()) 
  }, [])
  const handleSubmit = ()=>{
    console.log({_id,date,voucher,cb,ledger,amount,mode,remark,reminderDate,url})
  }
  
  return (
    <main >
    <Grid container>
        <Grid item xs={12} md={8} sx={{background:"#fff", borderRadius:"10px", padding:"10px"}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Payment Voucher</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth value={date} sx={{maxWidth:"130px"}} onChange={e=>setDate(e.target.value)} label="Payment Date" size='small' type="date" focused variant="standard" />   
            </Grid>
            <Grid item xs={12} md={4}>
            {/* <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Payment Voucher</Typography> */}
            </Grid>
            <Grid item xs={12} md={4}>
            <Typography color="teal" sx={{fontFamily: 'Courgette'}} variant='body1' align='right'>Voucher No :  {voucher}</Typography>
            <Typography color="tomato" sx={{fontFamily: 'Courgette'}} variant='body1' align='right'>Current Balance : $  {cb}</Typography>
            </Grid>
            <Grid item xs={12}><br/></Grid>
            <Grid item xs={12} md={4}>
            <Autocomplete
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={allLedgers}
            onChange={(e, v) => {
            setLedger(v);
            }}
            value={ledger}
            groupBy={(option) => option.category}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} variant="standard" fullWidth label="Select Ledger for Payment"/>}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <TextField fullWidth value={amount} onChange={e=>setAmount(e.target.value)} label="Amount ($)" size='small' type="number" variant="standard" />   
            </Grid>
            <Grid item xs={12} md={4}>
            <Autocomplete
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={allModes}
            onChange={(e, v) => {
            setMode(v);
            }}
            value={mode}
            groupBy={(option) => option.category}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} variant="standard" fullWidth label="Select Payment Mode"/>}
            /> 
            </Grid>
            <Grid item xs={12} md={4}>
            <TextField fullWidth value={remark} onChange={e=>setRemark(e.target.value)} label="Narration / Remark" placeholder="Type any Remark here..."  size='small' variant="standard" />   
            </Grid>
            <Grid item xs={12} md={4}>
            <TextField label="Document (If Any)" size='small' disabled={loadingDoc} helperText="PDF and Image Files are allowed" inputProps={{ accept:"image/*, application/pdf" }}  InputProps={{
            endAdornment: <InputAdornment position="start">{loadingDoc && <CircularProgress size={25}/>} </InputAdornment>,
          }} onChange={(e) => imgUpload(e.target.files[0])}  type="file" focused fullWidth/>
            </Grid>
            <Grid item xs={12} md={4} className="center">
              <TextField  value={reminderDate} helperText="If you want to be reminded  in future" onChange={e=>setRemind(e.target.value)} label="Reminder Date" size='small' type="date" focused variant="standard" />   
            </Grid>
          
            <Grid item xs={12} sx={{marginTop:"100px"}}>
              <Grid container justifyContent="space-between">
              <Button variant="outlined" startIcon={<MdClearAll />}>Clear</Button>
              <Button variant="contained" onClick={()=>handleSubmit()} startIcon={<MdDoneAll />} sx={{color:"#fff",borderRadius:"20px",padding:"0px 30px"}}>Save</Button>
              <Button variant="outlined" startIcon={<FcFullTrash />}>Delete</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={0.2} className='center'>
        <Divider variant="fullWidth" orientation="vertical" />
        </Grid>
       
        <Grid item xs={12} md={3} className="boxEffect">
          <Grid container>
            <Grid item xs={12} sx={{padding:"10px"}}>
              <Input autoFocus disableUnderline sx={{padding:"10px"}} className="boxEffect" startAdornment={<FcSearch style={{fontSize:"24px", marginRight:"10px"}}/>} fullWidth  placeholder="Search By : Party Name / Voucher No." /> 
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{margin:"10px 0px"}}>Search Result</Divider>
            
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {result.map((r,i)=>
                <ListItem key={i} divider disableGutters>
                  <ListItemButton alignItems="flex-start"  >
                  <ListItemAvatar>
                <Avatar alt={r?.ledger} src={r?.userImage}/>
                </ListItemAvatar>
                <ListItemText primary={r?.ledger} secondary={`Amount : ${r?.amount}, Mode : ${r?.mode}`} />
                  </ListItemButton>
              </ListItem>
              )}
              </List>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
    </main>
  )
}

export default Payment