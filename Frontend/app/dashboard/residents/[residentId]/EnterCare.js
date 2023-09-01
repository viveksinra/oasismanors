'use client';
import React,{ useState,useEffect,forwardRef,useRef,useImperativeHandle} from 'react'
import {Grid, FormGroup,FormLabel,FormControlLabel,Switch, Checkbox,Radio, Typography,TextField,Input,Tooltip,Avatar,RadioGroup,Slider,Table,TableHead,TableRow,TableCell,TableBody, IconButton} from '@mui/material/';
import {FcAddRow,FcDeleteRow } from "react-icons/fc";
import { useImgUpload } from '@/app/hooks/auth/useImgUpload';
import MySnackbar from "../../../Components/MySnackbar/MySnackbar";
import { careService } from "../../../services";
import {scheduleBox, scheduleText} from "./EntryMedication";
import Autocomplete from '@mui/material/Autocomplete';



const EntryCare = forwardRef((props, ref) => {
    const [image, setImgUrl] = useState("https://onemg.gumlet.io/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/hx2gxivwmeoxxxsc1hix.png")
    const snackRef = useRef();
    const [care, setCare] = useState(null);
    const [prn, setPrn] = useState(false);
    const [fullCare, setFullCare]= useState(false);
    const [point, setPoint]= useState("");
    const [discontinue, setDis] =useState(false);
    const [frequency, setFreq] = useState("daily");
    const [days, setDays] =  useState("")
    const [timing, setTiming]= useState([{time:"09:00", qty:"1"}]);
    const [manpower, setManpower]= useState(1);
    const [instruction, setInst]= useState("");
    const [remark,setRemark] = useState("");
    const [allCare,setAllCare] = useState([]);
    useEffect(() => {
      async function getData() {
        try {
          let res = await careService.getCare(`api/v1/residence/resCare/getResCare/getAll/${props.prospectId}`, props.id);
          if(res.variant === "success"){
            props.setId(res.data?._id);
            setImgUrl(res.data?.imageUrl);
            setCare(res.data.care);
            setPrn(res.data?.prn);
            setFullCare(res.data?.fullCare);
            setPoint(res.data?.point);
            setDis(res.data?.discontinue);
            setFreq(res.data?.frequency);
            setDays(res.data?.days);
            setTiming(res.data?.timing);
            setManpower(res.data?.manPower);
            setInst(res.data?.instruction);
            setRemark(res.data?.remark);
            snackRef.current.handleSnack(res);
          }else snackRef.current.handleSnack(res);            
        } catch (error) {
          console.log(error);
          snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
        } 
      }
      if(props.id){getData()}
      
    }, [props.id])
    useEffect(() => {
     async function getAllCare() {
          try {
            let res = await careService.getCare(`api/v1/main/careCat/getCareCat/getAll`, "");
           if(res.variant === "success"){
            setAllCare(res.data);
           }else snackRef.current.handleSnack(res);            
          } catch (error) {
           console.log(error);
           snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
          } 
        }
        getAllCare()
    }, [])
    
    
    const handleClear =()=>{
      props.setId("");
      setImgUrl("https://onemg.gumlet.io/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/hx2gxivwmeoxxxsc1hix.png");
      setCare(null);
      setPrn(false);
      setFullCare(false);
      setPoint("");
      setDis(false);
      setFreq("daily");
      setDays("");
      setTiming([{time:"09:00", qty:"1"}]);
      setManpower(1);
      setInst("");
      setRemark("");
    }
    const handleObjChange=(e,i,p)=>{
        let newArr = [...timing]; // copying the old datas array
        if(p==="time"){
          newArr[i].time = e
        }else if(p==="qty"){
          newArr[i].qty = e
        }
        setTiming(newArr)
    }

    const handleAdd = (mode,i)=>{
        if(mode==="add"){
          let Arr1 = [...timing]
        let newArr=[...Arr1,{time:"09:00", qty:"1"}]
        setTiming(newArr);
        }else if(mode==="delete"){
          let Arr1 = [...timing]
            if (Arr1.length > 1) {
                 var filtered = timing
                   var newArr = [...filtered].filter(function(value, index, arr){ 
                    return index !== i;
                    });
                  setTiming(newArr)
              } else {
                    alert("Not Allowed to delete this.")
              }
  
        }
    }
      useImperativeHandle(ref, () => ({
          handleSubmit: async () => {
            try {
              let data = {prospectId:props.prospectId,care,prn,fullCare,point,discontinue,frequency,days,timing,manpower,remark,instruction };
              let response = await careService.saveCare("api/v1/residence/resCare/addResCare", props.id, data);
               if(response.variant === "success"){
               snackRef.current.handleSnack(response);
               handleClear();
             }else snackRef.current.handleSnack(response?.response?.data);            
            } catch (error) {
             console.log(error);
             snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.response.data.message, variant:"error"});
            } 
         },
         handleClear: () => handleClear() 
      }));
      
    return (
     <main style={{backgroundColor:"#fff", borderRadius:8,marginBottom:2, padding:"10px"}}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container>
        <Grid item xs={0} md={1}/>
          <Grid item xs={12} md={3}>
          <FormGroup>
            <FormControlLabel  control={<Checkbox size="small" checked={prn} onChange={()=>setPrn(!prn)}/>} label="PRN (As per Need)" />
            {props?.id && <FormControlLabel control={<Checkbox size="small" checked={discontinue} onChange={()=>setDis(!discontinue)}  />} label="Discontinued" /> }
          </FormGroup>
          </Grid>
          <Grid item xs={12} md={4} style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
           <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Add New Care</Typography>
  
           <Avatar alt="medication-Img" sx={{cursor: "pointer",width: 112, height: 112, border:"4px solid #d9fdd3"}} variant="square" src={image}/>
          </Grid>
          <Grid item xs={12} md={4}> 
          {!prn && <>
          <div style={{...scheduleText}}>Schedule</div>
          <div style={{...scheduleBox}}>
            <Grid container>
              <Grid item xs={12} style={{display:"flex", justifyContent:"center",height:"40px",}}>
                <RadioGroup row value={frequency} onChange={e=>setFreq(e.target.value)} >
                <FormControlLabel sx={{height:"60px"}} value="daily" control={<Radio size="small" />} label="Daily" />
                <FormControlLabel sx={{marginLeft:"10px", height:"60px"}} value="every" control={<Radio size="small" />} label="Every"/>
                <Input sx={{width:"70px", background:"#fff", height:"20px", padding:"0px 5px", borderRadius:"2px", marginTop:"20px"}} value={days} onChange={e=>setDays(e.target.value)} disableUnderline margin="dense" endAdornment="Days" disabled={frequency==="daily"} type="number" />
              </RadioGroup>
              </Grid>
              <Grid item xs={12} >
              <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{width:"30px"}}> <Tooltip title="Add New Row" placement="left" arrow> <IconButton onClick={()=> handleAdd("add") }>
                  <FcAddRow/>
                  </IconButton> </Tooltip >  </TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Qty Given</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timing.map((row,i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell><Tooltip title="Remove This Row" placement="left" arrow>
                  <IconButton onClick={()=>handleAdd("delete", i)}>
                  <FcDeleteRow/>
                  </IconButton> </Tooltip>
                </TableCell>
                <TableCell align="center"><Input value={row.time} onChange={e=>handleObjChange(e.target.value, i, "time")} type="time"/></TableCell>
                <TableCell align="center"><Input value={row.qty} onChange={e=>handleObjChange(e.target.value, i, "qty")} sx={{width:"50px"}} type="number"/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
              </Grid>
            </Grid>
        </div>
          </> }
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3}>
      <Autocomplete
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={allCare}
            onChange={(e, v) => {
              setCare(v);
              if(v){
                setPrn(v?.prn);
                setImgUrl(v?.image);
                setPoint(v?.point);
                setInst(v?.instruction);
                setManpower(v?.manPower)
              }
            }}
            value={care}
            groupBy={(option) => option.category}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option._id}>
                  {option.label}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} variant="standard" fullWidth label="Select Required Care"/>}
            />
      </Grid>
      <Grid item xs={12} md={3}>
      <FormLabel component="legend">Select Care Type</FormLabel>
      <FormControlLabel
          control={
            <Switch checked={fullCare} onChange={()=>setFullCare(!fullCare)} name="gilad" />
          }
          label={fullCare ? "Full Assist Required" : "Partial Assist Required" }
        />
      </Grid>

      <Grid item xs={12} md={3}>
      <TextField fullWidth label="Care Point" value={point} type='number' onChange={e=>setPoint(e.target.value)} variant="standard" />   
  
      </Grid>
      <Grid item xs={12} md={3}>
      <FormLabel component="legend">Manpower Required : {manpower}</FormLabel>
      <Slider sx={{maxWidth:"240px"}} value={manpower} max={10} onChange={e=>setManpower(e.target.value)} valueLabelDisplay="auto" />
      
      </Grid>
      <Grid item xs={12} md={6}>
      <TextField fullWidth label="Instruction" placeholder='Type any Instruction' value={instruction} multiline row={4} onChange={e=>setInst(e.target.value)} variant="standard" />   

      </Grid>
      <Grid item xs={12} md={6}>
      <TextField fullWidth label="Remarks / Narration" placeholder='Type any Remarks or Narration.' value={remark} multiline row={4} onChange={e=>setRemark(e.target.value)} variant="standard" />   

      </Grid>
     
      </Grid>
      <MySnackbar ref={snackRef} />
     </main>
    )
  });
  
  export default EntryCare;