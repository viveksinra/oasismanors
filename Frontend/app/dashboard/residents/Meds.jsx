'use client';
import "./residentStyle.css";
import React, {useState,useEffect} from 'react'
import {Grid, Avatar, IconButton, Dialog,DialogContent,DialogTitle,Input, Typography,Tab, Divider,Chip,Skeleton} from '@mui/material/';
import {TabList,TabContext,TabPanel} from '@mui/lab/';
import { FcCancel } from "react-icons/fc";
import { BsInfoCircleFill } from "react-icons/bs";
import { medicationService } from "../../services";
import {todayDate,timZone} from "../../Components/StaticData";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";



const Meds = ({openMeds,setOpenMeds,act,popup}) => {
  const [loading, setLoading] = useState(false);
  const [allTabs, setAllTabs]= useState([]);
  const [medTab, setMTab]= useState("");
  const [date, setDate]= useState("");
  const [medData, setMedDat] = useState([]); 
  const [allData, setAllData]= useState([]);
  useEffect(() => {
   if(popup === "Medication"){
    setAllTabs(["Scheduled Medication", "PRN Medication", "Scheduled Treatments", "PRN Treatments"])
    setMTab("Scheduled Medication")
   }else if(popup === "Care"){
    setAllTabs(["Scheduled Care", "PRN Care (As per Need)"])
    setMTab("Scheduled Care")
   }
  }, [popup])
  
    useEffect(() => {
      setDate(todayDate())
    }, [])
    async function fetchAllData() {
      setLoading(true);
      let url = "";
      if(popup === "Medication"){
        url = "api/v1/residence/resMed/getResMed/byDate";
      }else if(popup === "Care"){
        url = "api/v1/residence/resCare/getResCare/byDate";
      }
      if (url) {
        let res = await medicationService.saveMedication(url, act?._id, {date});
        if(res.variant === "success"){
          setLoading(false);
          setAllData(res?.data)
        }else {setLoading(false);console.log(res)}
      } 
    }

    useEffect(() => {     
      if(act?._id) {fetchAllData()}
      return () => setAllData([])
    }, [act,date])

  useEffect(() => {
    if(popup === "Medication"){
      const newAry = allData.filter(f => {
        if(medTab === "Scheduled Medication"){
          return f?.type === "medication" && f?.prn === false
        }else if(medTab === "PRN Medication"){
          return f?.type === "medication" && f?.prn === true
        }else if(medTab === "Scheduled Treatments"){
          return f?.type === "treatment" && f?.prn === false;
        }else if(medTab === "PRN Treatments"){
          return f?.type === "treatment" && f?.prn === true
        }
         })
         setMedDat(newAry)
    }else if(popup ==="Care"){
      const newAry = allData.filter(f => {
        if(medTab === "Scheduled Care"){
          return f?.prn === false && f?.discontinue === false;
        }else if(medTab === "PRN Care (As per Need)"){
          return f?.prn === true && f?.discontinue === false;
        }
         })
         setMedDat(newAry)
    }
  }, [medTab,allData]);
 
  return (
    <Dialog
    open={openMeds}
    onClose={()=>setOpenMeds()}
    maxWidth="lg"
    aria-labelledby="meds-popup"
    aria-describedby="meds-popup-description"
  >
    <DialogTitle>
        <Typography variant='body1' color="primary">{popup} Pass For <b> {`${act?.lastName} ${act?.firstName}`} </b></Typography>
      <IconButton onClick={()=>setOpenMeds()} sx={{position:"absolute", top:0, right:0}}>
        <FcCancel/>
      </IconButton>
    </DialogTitle>
    <Divider/>
    <DialogContent sx={{overflowY:"visible"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
        <Avatar alt={act?.firstName} src={act?.userImage} sx={{width:"120px",height:"80px", borderRadius:"10px"}} className="dialogImg" variant="square" />
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography>{`${act?.lastName} ${act?.firstName}`}</Typography>
        <Typography>{`Room ~ ${act?.room} ${act?.seat}` }</Typography>
        <Typography>{`Birth Date : ~ ${act?.dateOfBirth}` }</Typography>
        </Grid>
        <Grid item xs={12} md={5}>
        Drink more water. If possible, First boiled the water, let it cool and then drink it.
        </Grid>
        <Grid item xs={12} md={2}>
          <Divider>Select Date</Divider>
      <center><Input value={date} onChange={e=>setDate(e.target.value)} sx={{background:"#4caf50", padding:"0px 10px", borderRadius:"20px", color:"#fff"}} disableUnderline margin="dense" type="date" /> </center>  
        </Grid>
      </Grid>
      <Divider sx={{margin:"10px 0px"}}/>
      <TabContext value={medTab} variant="scrollable" allowScrollButtonsMobile scrollButtons>
      <TabList onChange={(e,v)=>setMTab(v)} sx={{height:40}} aria-label="MedsTabs">
          {allTabs && allTabs.map((t,i)=> <Tab key={i} value={t} label={t}  />)}
      </TabList>
      {allTabs && allTabs.map((t,i)=> <TabPanel key={i} value={t}> 
      {loading ? <Skeleton variant="rectangular" className="medCard" /> :  <MedCard popup={popup} medData={medData} date={date} fetchAllData={()=>fetchAllData()}/> }
       </TabPanel>)}
      </TabContext>       
    </DialogContent>
  </Dialog>
  )
}
function MedCard({popup,medData,date,fetchAllData}){
  const handleProvide= async (pass, data)=>{
    let submitData = {...data,date, isProvided:pass,rejectionReason:"",timZone:timZone()};
    if(pass){
      let y = confirm(`Are you sure to Provide : ${popup === "Medication" ? data?.title : popup === "Care" ? data?.careLabel : null} ?`)
      if(y){
        let url = "";
        if(popup === "Medication"){
          url = "api/v1/residence/resMed/addResMed/save/passMed";
        }else if(popup === "Care"){
          url = "api/v1/residence/resCare/addResCare/save/passCare";
        }
        let res = await medicationService.saveMedication(url, "", {...submitData});
        if(res.variant === "success"){
          fetchAllData()
        }else console.log(res)
      }
    }else if(pass === false){
      let reason = prompt(`Why do you want to skip : ${data?.title} ?`);
      submitData.rejectionReason = reason;
      console.log(submitData)
    }
  }
   return(
     <Grid container sx={{maxHeight: "350px", justifyContent:"center"}}>
    {medData.map((m,i)=> <Grid key={i} className="medCard">
    {m.isClicked && <div className="mask"> 
          <Typography variant="h6" component="div" color="white">{m?.isProvided ? "Already Provided!" : "Not Passed!"} </Typography>
          <Typography variant="body1" component="div" color="yellow">Date: {m?.pDate}</Typography>
          <Typography variant="body1" component="div" color="yellow">Time: {m?.pTime}</Typography>
         {m?.rejectionReason &&  <Typography variant="caption" component="div" color="yellow">Rejection Reason: {m?.rejectionReason}</Typography>} 
      </div>}
      <Grid container>
        <Grid item xs={12} className="cardTop" sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex", alignItems:"center",flexDirection:"row"}}><IconButton> <BsInfoCircleFill style={{color:"#fff"}}/> </IconButton> 
          <Typography>{popup==="Medication" ? m?.title : popup==="Care" ? m?.careLabel : null}</Typography> 
          </div>
          <Typography variant="body2">{popup==="Medication" ? m?.time : popup==="Care" ? `${m?.frequency} | ${m?.time}` : null }</Typography> 
        </Grid>
        <Grid item xs={12}> 
        <Grid container sx={{padding:"10px", height:"168px"}}>
            <Grid item xs={12} md={4} >
              <Avatar alt={m?.name} src={popup==="Medication" ? m?.image : popup==="Care" ? m?.imageUrl : null} sx={{width:"100%",height:"85px", borderRadius:"10px"}} className="dialogImg" variant="square" />
              <br/>
             {popup==="Care" && <Typography variant="body2" align="center" color="teal">{m?.careType}</Typography> } 
              <Typography variant="body2" align="center" color="primary">{popup==="Medication" ? m?.brand : popup === "Care" ? `Manpower : ${m?.manPower}` : null}</Typography> 
            </Grid>
            <Grid item xs={12} md={8} sx={{paddingLeft:"30px"}}>
            <Typography variant="body2" color="primary"><b>Advice :</b></Typography> 
            <Typography variant="body2" color="teal">{popup==="Medication" ? m?.medPassNote : popup==="Care" ? m?.instruction : null }</Typography> 
              <Divider/>
              <Typography variant="body2" color="primary">{popup==="Medication" ? <b>Reason :</b> : popup=== "Care" ? <b>Remark</b> : null }</Typography> 
              <Typography variant="body2" color="teal">{popup==="Medication" ? m?.reason : popup==="Care" ? m?.remark : null }</Typography> 
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className="cardBottom"> 
        <Chip label="No Pass" color="warning" onClick={()=>handleProvide(false, m)} sx={{padding:"0px 20px", color:"#fff", cursor:"pointer"}}/>
        <Chip label={popup==="Medication" ? `Qty : ${m?.qty || "As Need"}` : popup==="Care" ? `Points : ${m?.point}` : null} sx={{background:"#fff",color:"teal"}}/>
        <Chip label="Provide" color="primary" onClick={()=>handleProvide(true, m)} sx={{padding:"0px 20px", color:"#fff", cursor:"pointer"}}/>
        </Grid>
      </Grid>
       </Grid> )}
  </Grid>)
}
export default Meds