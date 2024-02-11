'use client';
import "./residentStyle.css";
import React, { Fragment, lazy, useEffect, Suspense } from 'react'
import {Grid,Skeleton,Typography, Fab,styled,Button,Badge,ToggleButtonGroup,ToggleButton,Tooltip, Tab, Box,MobileStepper, Avatar, List,ListItem,ListItemIcon,ListItemText, Divider} from '@mui/material/';
import { useState,useRef} from 'react';
import {TabContext,TabList,TabPanel } from '@mui/lab/';
import { residentService } from "../../services";
import Link from 'next/link';
import NoResult from "@/app/Components/NoResult/NoResult";
import {FaUsersSlash ,FaHandHoldingHeart,FaHandHoldingMedical,FaTelegramPlane } from "react-icons/fa";
import { FcOrgUnit,FcTimeline,FcDebt,FcPhone,FcFeedback,FcHome,FcPrevious,FcNext } from "react-icons/fc";
import {MdCake } from "react-icons/md";
import clsx from 'clsx';
const Meds = lazy(() => import("./Meds"));




function   Residents () {
  const [viewTabular,toggleView] = useState(true);
  const [id, setId] =useState("");
  const entryRef = useRef();
  return (
    <main> 
        <SearchArea handleEdit={(id)=>{toggleView(false); setId(id)}} />
      {/* {viewTabular ? <SearchArea handleEdit={(id)=>{toggleView(false); setId(id)}} />  : <EntryArea ref={entryRef} id={id} setId={(e)=>setId(e)}/>} */}
      {/* <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
        {!viewTabular &&  <Button variant="contained" onClick={() => entryRef.current.handleClear()} startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button> }
        <span style={{flexGrow:0.3}}/>
        <Tooltip arrow title={viewTabular ? "Add Prospect" : "Show All"}>
        <ToggleFab onClick={()=>toggleView(!viewTabular)} color="secondary" size="medium">
        {viewTabular ?   <FaUserPlus style={{fontSize:24}}/> : <BsTable style={{fontSize:24}}/>}
        </ToggleFab>
        </Tooltip>
          <span style={{flexGrow:0.3}}/>
          {!viewTabular && <Button variant="contained" onClick={() => entryRef.current.handleSubmit()} startIcon={<FiCheck />} size='small' color="success" >
            { id ? "Update" : "Save"}
          </Button>}
      </Toolbar>         
      </AppBar> */}
       </main>
  )
}



export const ToggleFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -25,
  left: 0,
  right: 0,
  margin: '0 auto',
});



export function SearchArea({handleEdit}) {
  const [view, setView] = useState('grid');
  const [community,setCommunity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterRes, setFilterRes] = useState([]);
  const [allRes, setAllRes]= useState([]);
  const [residentTab, setRTab]=useState("incoming");
  
  useEffect(() => {
    async function fetchCommunity() {
      let response = await residentService.getResident("api/v1/main/community/getCommunity/getAll", "");
      if(response.variant === "success"){
        setCommunity(response.data)
        setRTab(response.data[0]._id)
      }else {console.log(response)}
    }
    fetchCommunity()
  }, [])
  
  useEffect(() => {
    setLoading(true)
    async function fetchAllResi() {
      let response = await residentService.getResident("api/v1/residence/getResidence/getAll", "");
      if(response.variant === "success"){
        setLoading(false);
        setAllRes(response.data)
      }else {setLoading(false);console.log(response)}
    }
    fetchAllResi()
  }, [])

  useEffect(() => {
   let filtArr = allRes.filter(f => {
      if(f.residenceStage === "residence"){
        return f?.communityId === residentTab
      }else if(f.residenceStage === "incoming" || f.residenceStage === "movedOut"){
        return f.residenceStage === residentTab
      }
       })
     setFilterRes(filtArr) 
  }, [residentTab,allRes])
      
  return (
    <main>
      <Box sx={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", borderRadius:"10px", width: '100%',padding:"10px", minHeight: "785px" }}>
        <Grid container>
          <Grid item xs={0} md={4}/>
          <Grid item xs={12} md={4}>
          <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>All Residents</Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{display:"flex", justifyContent:"end", display:{xs:"none", md:"flex"}}} >
          {/* <ToggleButtonGroup aria-label="ViewMode">
          <Tooltip arrow title="Grid View">
          <ToggleButton value="grid" onClick={()=>setView("grid")} aria-label="gridView">
          <FcOrgUnit/>
          </ToggleButton>
          </Tooltip>
          <Tooltip arrow title="List View">
          <ToggleButton value="list" onClick={()=>setView("list")} aria-label="listView">
          <FcTimeline />
          </ToggleButton>
          </Tooltip>
          </ToggleButtonGroup> */}
          </Grid> 
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={residentTab} variant="scrollable" allowScrollButtonsMobile scrollButtons>
            <Box sx={{  maxWidth: { xs: 340, sm: 480,md:800 }, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={(e,v)=>setRTab(v)} sx={{height:60}} aria-label="Resident Tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
              {community.map((t,i)=> <Tab key={i} iconPosition="bottom" icon={<Typography variant="caption">{t?.buildingNumber}</Typography>} value={t?._id} label={t?.communityName}  />)}
              <Tab value="incoming" icon={<FcDebt style={{fontSize:20}}/>} iconPosition="bottom" label="Incoming"/>
              <Tab value="movedOut" icon={<FaUsersSlash style={{fontSize:20}} />} iconPosition="bottom" label="Moved Out" />
              </TabList>
            </Box>
            {community.map((t,i)=> <TabPanel key={i} value={t?._id}> <ResidentView view={view} loading={loading} filterRes={filterRes} setFilterRes={e=>setFilterRes(e)} />
             </TabPanel>)}
            <TabPanel value="incoming"> <ResidentView view={view} loading={loading} filterRes={filterRes} setFilterRes={e=>setFilterRes(e)}/> </TabPanel>
            <TabPanel value="movedOut"> <ResidentView view={view} loading={loading} filterRes={filterRes} setFilterRes={e=>setFilterRes(e)}/> </TabPanel>
          </TabContext>
           </Box>
          </Grid>
        </Grid>
      
      
    </Box>
    </main>
  )
}

function ResidentView({view,loading,filterRes,setFilterRes}){
    const [act, setAct] = useState();
    const [openMeds, setOpenMeds] = useState(false);
    const [popup, setPopup] = useState("");
    const handleCard =(i)=>{
        let newArr =  filterRes.map((obj, j)=> {
          if(i === j){
            setAct(obj)
            return { ...obj, active:true}
          } else {
            return {...obj,active:false}
          }
        })
      setFilterRes(newArr);
      }
    return <section> 
      {loading===false && filterRes.length === 0 &&  
          <NoResult label="No Resident Available"/>
        }
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
        {loading ? <Skeleton variant="rectangular" className="residentCard" /> : 
        <Grid container spacing={2}>
        {filterRes.map((r,i)=> <Grid key={i} item xs={12} md={4} lg={3}>
          <div className={clsx("residentCard", r?.active && "activeCard")} onClick={()=>handleCard(i)}>
          <div className="cross">{r.room}</div>  
          <img alt={r?.firstName} src={r?.userImage} className="residentImg" variant="square" />
          <Typography variant="subtitle2" color="primary" sx={{ top: "-15px",position: "relative"}} align="center">{`${r?.firstName} ${r?.lastName}`} </Typography>
          <div style={{display:"flex", justifyContent:"space-evenly", top: "-15px",position: "relative"}}> 
          <Badge badgeContent={r?.pendingCare} max={9} color="success">
          <Button  variant="outlined" size="small" onClick={()=>{setOpenMeds(!openMeds);setPopup("Care")}} sx={{background:"#fff"}}>
          <FaHandHoldingHeart style={{marginRight:5}}/>
            Care
          </Button >
       
          </Badge>
          <Badge badgeContent={r?.pendingMed} max={9} color="success">
          <Button variant="outlined" onClick={()=>{setOpenMeds(!openMeds);setPopup("Medication")}} size="small" sx={{background:"#fff"}}>
            <FaHandHoldingMedical style={{marginRight:5}}/>
            Meds
          </Button >
          </Badge>
          </div>
          </div>
           </Grid>)}
        </Grid>}
        </Grid>
        <Grid item xs={12} md={3}>
          <DetailedCard act={act}/>
        </Grid>
      </Grid>
      <Suspense fallback={null}>  {act && <Meds setOpenMeds={()=>setOpenMeds(!openMeds)} popup={popup} openMeds={openMeds} act={act} /> }  </Suspense>
     
    </section>
}

function DetailedCard({act}){
  // const [cardStep, setCardStep] = useState(0)
  return(
  <Fragment>
    {act && 
      <Grid container id="moreCard" sx={{marginTop:{xs:"20px", md:"0px"}}}>
      <Grid item xs={12} sx={{display:"flex", flexDirection:"column", position: "relative", top:"-65px"}}>
      <Avatar alt={act?.firstName} src={act?.userImage} id="moreImg" />
      <Typography variant="subtitle1" color="primary" align="center">{`${act?.firstName} ${act?.lastName}`} </Typography>
      <Typography variant="body2" color="black" align="center"> {`Resident Since ~ ${act?.physicalMoveInDate}`}</Typography>
      <Typography variant="body2" color="black" align="center"> {`Room No. ~ ${act?.room} ${act?.seat}` }</Typography>
      <Typography variant="body2" color="black" align="center"> {`${act?.floor?.label}`}</Typography>
      <br />
       <center> <Link href={`/dashboard/residents/${act?._id}`}> <Fab size="small" variant="extended" color="success" sx={{padding:"0px 20px"}}>View Profile <FaTelegramPlane style={{marginLeft:5}}/></Fab></Link></center>  
      </Grid> 
      <Grid item xs={12} sx={{overflow:"hidden", position: "relative", top:-40}}>
        <List>
        {act?.phone && <ListItem dense disablePadding>
            <ListItemIcon sx={{minWidth:40}}>
              <FcPhone style={{fontSize:25}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{color:"Scrollbar"}} primary={act?.phone} secondary="Phone Number" />
        </ListItem>}
        <Divider light/>
        {act?.email && <ListItem dense disablePadding>
            <ListItemIcon sx={{minWidth:40}}>
              <FcFeedback style={{fontSize:25}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{color:"Scrollbar"}} primary={act?.email} secondary="Email Id" />
        </ListItem>}
        <Divider light/>
        {act?.zipCode && <ListItem dense disablePadding>
            <ListItemIcon sx={{minWidth:40}}>
              <FcHome style={{fontSize:25}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{color:"Scrollbar"}} primary={act?.streetAddress} secondary={`${act?.city} ~ ${act?.state}, ${act?.zipCode}`} />
        </ListItem>}
        <Divider light/>
          {act?.dateOfBirth && <ListItem dense disablePadding>
            <ListItemIcon sx={{minWidth:40}}>
              <MdCake style={{fontSize:25}} />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{color:"Scrollbar"}} primary={act?.dateOfBirth} secondary="Date of Birth" />
        </ListItem>}
        </List>
      </Grid>
      {/* <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={cardStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={()=>setCardStep(cardStep+1)} disabled={cardStep === 3}>
            Next
            <FcNext/>
          </Button>
        }
        backButton={
          <Button size="small" onClick={()=>setCardStep(cardStep-1)} disabled={cardStep === 0}>
            <FcPrevious/>
            Back
          </Button>
        }
      /> */}
    </Grid>
   } 
  </Fragment>
  )
}




export default Residents;