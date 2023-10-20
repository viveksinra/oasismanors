'use client'
import React,{useState,useEffect} from 'react'
import {Grid,Typography,  Tab, Box,AppBar,Toolbar,Tooltip,Fab,CircularProgress,Table,TableHead,TableRow,TableBody,TableCell,Chip,TablePagination,IconButton,Dialog,DialogContent,TextField,DialogActions,RadioGroup,FormControlLabel,Radio,MenuItem } from '@mui/material/';
import PropTypes from 'prop-types';
import {TabContext,TabList } from '@mui/lab/';
import {FaUsers,FaRegCalendarAlt} from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { FcReadingEbook,FcPlus,FcCheckmark,FcCancel } from "react-icons/fc";
import {todayDate} from "../../../Components/StaticData";
import { useImgUpload } from '@/app/hooks/auth/useImgUpload';
import {ToggleFab} from "../../prospect/page";
import {employeeService} from "../../../services"



function Leave() {
  const [user, setUTab]=useState("me");
  const [balanceLeave, setLeave] = useState([{title:"My Total Leave",current:32,total:40},{title:"Leave without Pay",current:20,total:30},{title:"Sick Leave",current:6,total:10},{title:"Privilege Leave",current:5,total:8},])
  const [leaveData, setLeaveData] = useState([{_id:"21564564sdsd", applied:"Oct-09-2023",from:"Oct-09-2023",to:"Oct-09-2023",days:"1",type:"Sick",frist:false,second:true,reason:"I was very seek",status:"Pending"}])
  const router = useRouter();
  const [openLeave,setOpenLeave]=useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const getLeaveData = async ()=>{
    try {
      let response = await employeeService.getEmployee(`api/v1/employee/empLeave/getEmpLeave/getDataWithPage/${rowsPerPage}/${page}`, "")
      if(response.variant === "success"){
        setLeaveData(response.data)
      }else alert(response.message);            
      } catch (error) {
      console.log(error);
      } 
}

  useEffect(() => {
     getLeaveData();    
  }, [openLeave])
  
  
  const handleCancel = async (id)=>{
    let y = confirm("Do you want to Cancel your Pending Leave ?")
    if(y){
      try {
        let response = await employeeService.getEmployee(`api/v1/employee/empLeave/addEmpLeave/cancel/${id}`, "")
        if(response.variant === "success"){
          getLeaveData()
        }else alert(response.message);            
        } catch (error) {
        console.log(error);
        } 
    }
  }
  return (
    <main style={{background:"#fff",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"10px",padding:20}}>
    <Typography color="teal" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Leave Summary</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
      <TabContext value={user} variant="scrollable" allowScrollButtonsMobile scrollButtons>
      <Box sx={{  maxWidth: { xs: "320px", sm: "480px",md:"max-content" }, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={(e,v)=>setUTab(v)} sx={{height:60}} aria-label="Building Tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
      <Tab value="me" icon={<FcReadingEbook style={{fontSize:20}}/>} iconPosition="bottom" label="Me"/>
      <Tab value="myTeam" icon={<FaUsers style={{fontSize:20}}/>} iconPosition="bottom" label="My Team"/>
      </TabList>
      </Box>
      </TabContext>
      </Grid>
      <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"right"}}>
      <Fab onClick={()=>setOpenLeave(true)} variant="extended" size="small" color="success">
        <FcPlus style={{fontSize:"18px",marginRight:"5px"}} />
        Apply Leave
      </Fab>
      </Grid>
      <Grid item xs={12}>
      <Typography color="teal" sx={{fontFamily: 'Courgette',margin:"10px 0px"}} variant="subtitle1" align='center'>Balance Leave of this year</Typography>
      </Grid>
      {balanceLeave.map((l,i)=>  <Grid item key={i} xs={12} md={3} className='center' sx={{flexDirection:"column"}}>
      <Box sx={{width:"150px",height:"150px",flexDirection:"column",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"20px"}} className='center'>
      <Typography color="GrayText" variant="subtitle2" align='center'>{l.title}</Typography>
      <CircularProgressWithLabel value={Number(((+l.current*100)/+l.total)) }/>
      <Typography color="steelblue" variant="h6" align='center'>{`${l.current}/${l.total}`}</Typography>
      </Box> 
      </Grid> )}
      <Grid item xs={12} sx={{margin:"10px 0px"}}>
      <Table size="small" aria-label="Leave table">
        <TableHead>
        <TableRow>
          <TableCell>Applied On</TableCell>
          <TableCell align="left">From</TableCell>
          <TableCell align="left">To</TableCell>
          <TableCell align="left">Type</TableCell>
          <TableCell align="center">First Half</TableCell>
          <TableCell align="center">Second Half</TableCell>
          <TableCell align="center">Reason</TableCell>
          <TableCell align="center">Status</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {leaveData && leaveData.map((r,i)=> <TableRow
              key={i}
              hover
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell> {r.applied} </TableCell>
            <TableCell align="left"> {r.from} </TableCell>
            <TableCell align="left">{r.to} </TableCell>
            <TableCell align="left"> {r.leaveType} </TableCell>
            <TableCell align="center"> { (r.shift === "First Half" || r.shift === "") &&  <FcCheckmark style={{fontSize:"20px"}}/>} </TableCell>
            <TableCell align="center"> {(r.shift === "Second Half" || r.shift === "") &&  <FcCheckmark style={{fontSize:"20px"}}/>} </TableCell>
            <TableCell align="center"> {r.reason} </TableCell>
            <TableCell align="center">
              {r.status === "Pending" ? <Chip label="Pending" onClick={()=>handleCancel(r._id)} deleteIcon={<FcCancel/>} onDelete={()=>handleCancel(r._id)} color="secondary" variant="outlined" /> : <Typography variant="body1" color={r.status === "Approved" ? "teal" : "tomato"}>{r.status} </Typography> } 
               </TableCell>
            </TableRow> )}
        </TableBody>
       </Table>
      </Grid>
      <Grid item xs={12}>
        <TablePagination
                rowsPerPageOptions={[10,20,50,100]}
                component="div"
                count={leaveData.length}
                sx={{overflowX:"hidden"}}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(e,v)=>setPage(v)}
                onRowsPerPageChange={e=>{
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setPage(0)
                }}
              />
        </Grid>
    </Grid>
   <ApplyLeave open={openLeave} handleApplyOpen={()=>setOpenLeave(!openLeave)}/>
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
    <Toolbar variant="dense">
        <Tooltip arrow title="Attendance">
        <ToggleFab onClick={()=> router.push('/dashboard/attendance')} color="secondary" size="medium">
        <FaRegCalendarAlt style={{fontSize:24}}/> 
        </ToggleFab>
        </Tooltip>
    </Toolbar>
  </AppBar>
    </main>
  )
}

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};



function ApplyLeave(props) {
  const [duration, setDuration]= useState("half")
  const [from,setFrom]=useState("");
  const [shift, setShift] = useState("First Half");
  const [to, setTo] = useState("");
  const [url, setImgUrl]=useState("");
  const [imgLoading, setLoadingImg] = useState(false);
  const [reason,setReason] = useState("");
  const [leaveType, setLeaveType] = useState("")
    
  useEffect(() => {
    setFrom(todayDate())
  }, [])

  const imgUpload= async (e)=>{
    setLoadingImg(true)
    let url = await useImgUpload(e);
    if(url){
      setImgUrl(url);
      setLoadingImg(false)
    } else {
      snackRef.current.handleSnack({message:"Employee Image Not Selected", info:"warning"}); 
      setLoadingImg(false)}
  }
  const handleLeave = async ()=>{
        try {
        let data={duration,from,to,shift,url,leaveType,reason}
          let response = await employeeService.saveEmployee("api/v1/employee/empLeave/addEmpLeave", "", data)
          if(response.variant === "success"){
            alert(response.message)
            props.handleApplyOpen();
          }else alert(response.message);            
          } catch (error) {
            console.log(error);
          } 
  }
  return (
    <Dialog
        open={props.open}
        onClose={()=>props.handleApplyOpen()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <span />
          <Typography color="steelblue" variant="subtitle1" align='center'>Apply for Leave</Typography>
          <IconButton onClick={()=>props.handleApplyOpen()}><FcCancel/></IconButton>
          </Box>
        
        <TabContext value={duration}> 
      <TabList onChange={(e,v)=>setDuration(v)} aria-label="Duration Tabs">
      <Tab value="half" label="Half Day"/>
      <Tab value="full" label="Full Day"/>
      <Tab value="longer" label="Longer"/>
      </TabList>
      <br/>
      </TabContext>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className='center'>
            <TextField size="small" focused type='date' value={from} onChange={e=>setFrom(e.target.value)} fullWidth label={duration === "longer" ? "From": "Leave Date" } variant="standard" />  
            </Grid>
            <Grid item xs={12} md={6} className='center'>
              {duration === "half" ?    <RadioGroup defaultValue="First Half" row onChange={e=>setShift(e.target.value)} value={shift}  >
      <FormControlLabel value="First Half" control={<Radio />} label="First Half" />
      <FormControlLabel value="Second Half" control={<Radio />} label="Second Half" />
      </RadioGroup> : duration === "longer" ? <TextField size="small" focused type='date' value={to} onChange={e=>setTo(e.target.value)} fullWidth label="To" variant="standard" /> : null  }
          </Grid>
          <Grid item xs={12}>
          <TextField
          id="Type of Leave"
          select
          fullWidth
          value={leaveType}
          onChange={e=>setLeaveType(e.target.value)}
          label="Type of Leave"
          helperText="Select a Leave Type"
        >
           <MenuItem disabled>Please Select Leave Type</MenuItem>
            {["Sick Leave","Casual Leave","Paid Leave"].map((option,i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
          </TextField>
          </Grid>
          <Grid item xs={12} className='center'>
            {imgLoading ? <Grid className='center'> <CircularProgress sx={{margin:"0px 20px"}}/> Uploading Your Document </Grid> : url ? <a href={url} target="_blank" rel="noopener noreferrer">📎 See Your Attachment →</a> : <TextField
          fullWidth
          label="Upload File (If Any)"
          onChange={(e) => imgUpload(e.target.files[0])}
          focused
          type='file'
        /> }
          
          </Grid>
          <Grid item xs={12}>
          <TextField
          fullWidth
          label="Type Reason"
          value={reason}
          onChange={e=>setReason(e.target.value)}
          placeholder="Type here..."
          multiline
          minRows={4}
        />
          </Grid>
          </Grid>
          
        </DialogContent>
        <DialogActions sx={{justifyContent:"center"}}>
          <Fab onClick={()=>handleLeave()} variant="extended" size="small" color="success">
          <FcPlus style={{fontSize:"18px",marginRight:"5px"}} />
          Apply Leave
          </Fab>
        </DialogActions>
      </Dialog>
  );
}

export default Leave