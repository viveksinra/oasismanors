
'use client';
import "./prospectStyle.css";
import React, { useState,useEffect,useRef,lazy,Suspense } from 'react'
import { prospectService } from "../../services";
import {Tabs,Tab,Avatar,Grid,Tooltip,Rating, Typography,Divider,AppBar,Toolbar,Badge,Alert,TextField,FormLabel,Switch,FormControlLabel,Button,ButtonGroup,InputAdornment,CircularProgress,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material/';
import { FcViewDetails,FcDiploma1,FcClock,FcLike,FcExternal,FcHighPriority,FcCheckmark  } from "react-icons/fc";
import { FaStethoscope,FaEdit} from "react-icons/fa";
import { FiCheck,FiFileMinus, } from "react-icons/fi";
import Autocomplete from '@mui/material/Autocomplete';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
import { useImgUpload } from '@/app/hooks/auth/useImgUpload'; 
import MySnackbar from "../../Components/MySnackbar/MySnackbar"

const FormHistory = lazy(() => import("../forms/FormHistory"));
const FormUpload = lazy(() => import("../forms/FormUpload"));

const ProTabPanel = ({value, prospectId,setProData})=>{
    switch (value) {
        case 0:
           return <Summary prospectId={prospectId} setProData={d=>setProData(d)}/>
        case 1:
            return <HealthTab prospectId={prospectId}/>
        case 2:
            return <ComplianceTab prospectId={prospectId} type="prospect"/>
        default:
            break;
    }
  }
const ProfileTab =({prospectId})=>{
    const [profileTab, setPTab]=useState(0);
    const [proData, setProData] = useState(null);
   
    const imgUpload= async (e)=>{
        let userImage = await useImgUpload(e)
        try {
            if(userImage){
                let res = await prospectService.add(prospectId,{userImage});
                if(res.variant === "success"){
                setProData({...proData,userImage})
                }
            }
        } catch (error) {
            alert("Image not uploaded. Please try again.")
        }
      }
    return(
        <main>
            <div className="profileBg">
                <label htmlFor="image">
                <input type="file" id="image" style={{display:"none"}} onChange={(e) => imgUpload(e.target.files[0])}  accept="image/*"  />
                <Tooltip title="Upload Your Photo" arrow>
                <Avatar alt="User Image" sx={{cursor: "pointer"}} src={proData?.userImage} className="userAvatar"/>
                </Tooltip>
               </label>
            <div className="userName">
            <Badge invisible={!proData?.important} badgeContent={<FcLike style={{fontSize:18}}/>} color="primary">
            <h3>{proData?.name}</h3>
            </Badge>
            <p>{proData?.subTitle}</p>
            </div>
            <div className="profileBgBtm">
            <Tabs value={profileTab} onChange={(e,v)=>setPTab(v)} aria-label="main_Tabs" sx={{height:55,float:"right",maxWidth: { xs: 350, sm: 480,md:"100%" }}} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
              <Tab icon={<FcViewDetails style={{fontSize:20}}/>} iconPosition="start" sx={{textTransform:"none"}} label="Personal Details"  />
              <Tab icon={<FaStethoscope style={{fontSize:20}}/>} iconPosition="start" sx={{textTransform:"none"}} label="Health Details"  />
              <Tab icon={<FcDiploma1 style={{fontSize:20}}/>} iconPosition="start" sx={{textTransform:"none"}} label="Compliance" />
              <Tab icon={<FcClock style={{fontSize:20}}/>} iconPosition="start"sx={{textTransform:"none"}} label="Change History"  />
            </Tabs>
            </div>
            </div>
            <ProTabPanel value={profileTab} prospectId={prospectId} setProData={(d)=>setProData(d)}/>
        </main>
    )
}

const Summary =({prospectId, setProData})=>{
    const [loading, setLoading] = useState(false);
    const [totalCount, setTCount] = useState();
    const [inquiryDate, setInquiryDate] = useState("");
    const [financialMoveInDate, setFinancialDate] = useState("");
    const [physicalMoveInDate, setPhysicalDate] = useState("");
    const [salesAgent, setSalesAgent] = useState(null);
    const [prospectStage, setProspectStage] = useState(null);
    const [prospectScore, setProspectScore] = useState(null);
    const [prospectSource, setProspectSource]  = useState(null);
    const [subscribed, setSubscribe] = useState(true);
    const [message, setMsg]=useState("");
    const [firstName, setFN]=useState("");
    const [lastName, setLN] = useState("");
    const [dateOfBirth, setDOB] = useState("");
    const [streetAddress, setStreet] = useState("");
    const [unit, setUnit] = useState("");
    const [gender, setGender] = useState(null);
    const [home, setHome] = useState("")
    const [office, setOffice] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] =useState("");
    const [state, setState]=useState(null);
    useEffect(() => {
        async function getOneData(){
        setLoading(true)
        let res = await prospectService.getOne(prospectId);
        if(res.variant === "success"){
        setLoading(false)
        setProData({name:`${res.data.firstName} ${res.data.lastName}` , subTitle: `Stage ~ ${res.data.prospectStage?.label}`, important:res.data.important, userImage: res.data.userImage})
        setInquiryDate(res.data.inquiryDate);
        setFinancialDate(res.data.financialMoveInDate);
        setPhysicalDate(res.data.physicalMoveInDate);
        setSalesAgent(res.data.salesAgent);
        setProspectStage(res.data.prospectStage);
        setProspectScore(res.data.prospectScore);
        setProspectSource(res.data.prospectSource);
        setSubscribe(res.data.marketingStatus);
        setMsg(res.data.message);
        setFN(res.data.firstName);
        setLN(res.data.lastName);
        setDOB(res.data.dateOfBirth);
        setStreet(res.data.streetAddress);
        setUnit(res.data.unit);
        setGender(res.data.gender);
        setHome(res.data.home);
        setOffice(res.data.office);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setZip(res.data.zipCode);
        setCity(res.data.city);
        setState(res.data.state);
        setTCount(res.data.totalCount);
        // snackRef.current.handleSnack(res);
        }
        setLoading(false)
        // else snackRef.current.handleSnack(res);    
       }
       if(prospectId){getOneData()}
      }, [prospectId])
    if(loading){
     return (<Grid sx={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px", flexDirection:"column",height:"400px",width:"100%",background:"#fff"}}>
     <CircularProgress color="primary" />
     <Typography align="center" color="teal">Loading ...</Typography>
     <Typography align="center" color="steelblue">Please Wait</Typography>
   </Grid>) 
    }else
    return(
        <main>
          <Grid container spacing={2} sx={{backgroundColor:"#fff", borderRadius:4,marginBottom:2}}>
          <Grid item xs={12} md={4}>
            <Grid container sx={{justifyContent:"space-evenly"}}>
                <Grid item sx={{alignItems:"center"}}>
                    <Typography variant="h6" color="black" align="center">{totalCount?.totalContact}</Typography>
                    <Typography variant="caption" color="primary">All Contacts</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item>
                    <Typography variant="h6" color="black" align="center" >{totalCount?.totalPendingTask}</Typography>
                    <Typography variant="caption" color="primary">Pending Tasks</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item >
                    <Typography variant="h6" color="black" align="center">{totalCount?.totalNotes}</Typography>
                    <Typography variant="caption" color="primary">All Notes</Typography>
                </Grid>
            </Grid>
            <Grid container direction="column" sx={{justifyContent:"space-evenly",height:260, border:"1px solid #dbe0e0",borderRadius:5,paddingLeft:5,marginTop:2}}>
                <Grid item>
                <Typography color="black" variant="subtitle1">Important Dates</Typography>
                </Grid>
                <Divider orientation="horizontal" flexItem />
                <Grid item>
                <Typography variant="subtitle1" sx={{color:"#76838e"}}>Inquiry Date : </Typography>
                <Typography color="black" variant="subtitle2">{inquiryDate}</Typography>
                </Grid>
                <Divider orientation="horizontal" flexItem />
                <Grid item>
                <Typography variant="subtitle1" sx={{color:"#76838e"}}>Financial Move-In Date : </Typography>
                <Typography color="black" variant="subtitle2">{financialMoveInDate}</Typography>
                </Grid>
                <Divider orientation="horizontal" flexItem />
                <Grid item>
                <Typography variant="subtitle1" sx={{color:"#76838e"}}>Physical Move-In Date : </Typography>
                <Typography color="black" variant="subtitle2">{physicalMoveInDate}</Typography>
                </Grid>
                </Grid>

            <Grid container sx={{marginTop:2,padding:{xs:"20px",md:"0px"}}}>
                <Grid item>
                <Typography variant="subtitle1" color="primary">Community :</Typography>
                <Typography color="black" variant="subtitle2">Assisted Living Retirement Homes</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{padding:{xs:"20px",md:"0px"}}}>
                <Grid item xs={12}>
                <Typography variant="subtitle1" color="primary">Sales Agent</Typography>
                <Typography color="black" variant="subtitle2">{salesAgent?.label}</Typography>
                </Grid>
                {/* <Divider orientation="vertical" flexItem /> */}
                <Grid item xs={12}>
                    {subscribed ?  <Alert severity="success">Subscribed Marketing</Alert> :  <Alert severity="info">Not Subscribed for Marketing</Alert>  }
               
                </Grid>
            </Grid>
           </Grid>
            <Grid item xs={8}>
                <Grid container rowSpacing={2} sx={{padding:{xs:"20px",md:"0px"}}}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center" color="primary">-: Personal Details :-</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>First Name</Typography>
                        <Typography color="black" variant="subtitle2"> {gender?.label === "Male" ? "Mr." : gender?.label ==="Female" ? "Mrs." : null} {firstName}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Last Name</Typography>
                        <Typography color="black" variant="subtitle2">{lastName}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Date of Birth</Typography>
                        <Typography color="black" variant="subtitle2">{dateOfBirth}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Divider />
                    </Grid>
                  
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Mobile No.</Typography>
                        <Typography color="black" variant="subtitle2">{phone}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Email Id</Typography>
                        <Typography color="black" variant="subtitle2">{email}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Unit</Typography>
                        <Typography color="black" variant="subtitle2">{unit}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Divider />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>ZIP Code</Typography>
                        <Typography color="black" variant="subtitle2">{zip}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>City</Typography>
                        <Typography color="black" variant="subtitle2">{city}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>State</Typography>
                        <Typography color="black" variant="subtitle2">{state?.label}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Divider />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Street Address</Typography>
                        <Typography color="black" variant="subtitle2">{streetAddress}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Home Address</Typography>
                        <Typography color="black" variant="subtitle2">{home}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Office Address</Typography>
                        <Typography color="black" variant="subtitle2">{office}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Divider />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Prospect Stage</Typography>
                        <Typography color="black" variant="subtitle2">{prospectStage?.label}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Prospect Source</Typography>
                        <Typography color="black" variant="subtitle2">{prospectSource?.label}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel control={<Rating name="Prospect-Score" readOnly value={prospectScore} />} label="Prospect Score" />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{color:"#76838e"}}>Story</Typography>
                    <Typography color="black" variant="subtitle2">{message}</Typography>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </main>
    )
}

const HealthTab =({prospectId})=>{
    const snackRef = useRef();
    const [editMode, setEditMode] = useState(false)
    const [language, setLanguage] = useState([]);
    const [ethnicity, setEthnicity]=useState(null);
    const [marital, setMarital] = useState(null);
    const [races, setRaces]= useState(null);
    const [religion, setReligion] = useState(null);
    
    const [isDiabetic, setIsDia]=useState(false);
    const [isIncontinent, setIsIncont]=useState(false);
    const [isTobacco, setIsTobacco] = useState(false);
    const [isAlcohol, setIsAlcohol] = useState(false);
    const [pDiagnosis, setPDiag] = useState("");
    const [sDiagnosis, setSDiag] = useState("");
    const [diet, setDiet] = useState("");
    const [allergies, setAllergies] =useState("");
    const [vision, setVision] = useState(null);
    const [ambulation,setAmbulation] = useState(null);
    const [visionNotes, setVisionNotes] = useState("");
    const [ambulationNotes, setAmbNotes] = useState("");
    const [hearingNotes, setHearing] = useState("");
    const [smellNotes, setSmell] = useState("");
    const [hearingAid, setHearingAid] = useState(null);
    const [dentures, setDentures] =useState(null);
    const [devices, setDevices] = useState([]);
    const [notes, setNotes] = useState("");
    const allLanguage = [{label:"Hindi",id:"4154514hghjg"},{label:"English",id:"415451sdsd4hghjg"},{label:"Spanish",id:"415545421dsd4hghjg"},{label:"Aribic",id:"4sddsd4hghjg"}]
    const allEthnicity = [{label:"Asian",id:"sd5s4d5"},{label:"Quaban",id:"sdsdsd5s4d5"},{label:"Africian",id:"sdsdssdsdsd5sds4d5"}]
    const allMarital =[{label:"Single", id:"sdsseas"},{label:"Married", id:"sdas55sdsd"},{label:"Devorce", id:"sdassds4d"}]
    const allRaces = [{label:"White",id:"sdsad"},{label:"Black",id:"sdsdsdsdad"},{label:"Other Option",id:"sdsdsdsdsdsdad"}]
    const allReligion = [{label:"Hindu",id:"sdadsd"},{label:"Muslim",id:"sdsdsdsdssd"},{label:"Christian",id:"sdsdssdsdsddsdssd"}]
    const allVision =[{label:"Glaucoma",id:"asdjhfjksdfh"}];
    const allAmbulation = [{label:"None Selected",id:"sdhsklejw56454"},{label:"Selected",id:"sdhsklejwsds"}];
    const allHearingAid = [{label:"None", id:"dhkahdsdsad"},{label:"Left", id:"dhkahsdsdsdsdsad"},{label:"Right", id:"sdsdsdsdsdsdsad"},{label:"Both", id:"bothdsdsad"}]
    const allDentures = [{label:"None",id:"sdsd"},{label:"Partial",id:"sdwejk"},{label:"Full",id:"sdsdsejk"}]
    const additionalDevices =[{label:"Assist Bed Rail",id:"shasd"},{label:"Bed Mobility Device",id:"sdsdshasd"},{label:"Cane",id:"644sdshasd"},{label:"Commode",id:"sdsd45hasd"}]
    const handleMode= async ()=>{
        if(editMode){
            try {
                let data = {language,ethnicity,marital,races,religion,isDiabetic,isIncontinent,isTobacco,isAlcohol,pDiagnosis,sDiagnosis,diet,allergies,vision,ambulation,visionNotes,ambulationNotes,hearingNotes,smellNotes,hearingAid,dentures,devices,notes};
                let response;
                  response = await prospectService.saveHealth(prospectId, data);
                  if(response.variant === "success"){
                    snackRef.current.handleSnack(response);
                    // handleClear();
                    setEditMode(false)
                  }else snackRef.current.handleSnack(response);            
                 } catch (error) {
                  console.log(error);
                  snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.response.data.message, variant:"error"});
                 } 
        }else setEditMode(!editMode) 
    }
    useEffect(() => {
        async function getOneData(){
        let res = await prospectService.getHealth(prospectId);
        if(res.variant === "success"){
        setLanguage(res.data.language)
        setEthnicity(res.data.ethnicity);
        setMarital(res.data.marital);
        setRaces(res.data.races);
        setReligion(res.data.religion);
        setIsDia(res.data.isDiabetic);
        setIsIncont(res.data.isIncontinent);
        setIsTobacco(res.data.isAlcohol);
        setIsAlcohol(res.data.isAlcohol);
        setPDiag(res.data.pDiagnosis);
        setSDiag(res.data.sDiagnosis);
        setDiet(res.data.diet);
        setAllergies(res.data.allergies);
        setVision(res.data.vision);
        setAmbulation(res.data.ambulation);
        setVisionNotes(res.data.visionNotes);
        setAmbNotes(res.data.ambulationNotes);
        setHearing(res.data.hearingNotes);
        setSmell(res.data.smellNotes);
        setHearingAid(res.data.hearingAid);
        setDentures(res.data.dentures);
        setDevices(res.data.devices);
        setNotes(res.data.notes)
        // snackRef.current.handleSnack(res);
        }
        else snackRef.current.handleSnack(res);    
       }
       if(prospectId){getOneData()}
      }, [prospectId])
    return (
        <main>
        <Grid container spacing={2} sx={{backgroundColor:"#fff", borderRadius:4,marginBottom:2}}>
            <Grid item xs={12} md={3}>
            <Grid item xs={12}>
            <Typography variant="subtitle1" align="center" color="primary">Demographic Information</Typography>
            </Grid>
            <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    options={allLanguage}
                    value={language}
                    disabled={!editMode}
                    multiple
                    onChange={(e, v) => {
                    setLanguage(v);
                    }}
                    renderOption={(props, option) => {
                        return (
                          <li {...props} key={option.id}>
                            {option.label}
                          </li>
                        );
                      }}
                    renderInput={(params) => <TextField {...params} label="Select Languages" color="primary" variant="outlined" />}
                />
                </Grid>
                <Grid item xs={12}>
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    options={allEthnicity}
                    value={ethnicity}
                    disabled={!editMode}
                    onChange={(e, v) => {
                        setEthnicity(v);
                    }}
                    renderOption={(props, option) => {
                        return (
                          <li {...props} key={option.id}>
                            {option.label}
                          </li>
                        );
                      }}
                    renderInput={(params) => <TextField {...params} label="Ethnicity" color="primary" variant="outlined" />}
                />
                </Grid>
                <Grid item xs={12}>
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    options={allMarital}
                    disabled={!editMode}
                    value={marital}
                    onChange={(e, v) => {
                        setMarital(v);
                    }}
                    renderOption={(props, option) => {
                        return (
                          <li {...props} key={option.id}>
                            {option.label}
                          </li>
                        );
                      }}
                    renderInput={(params) => <TextField {...params} label="Marital Status" color="primary" variant="outlined" />}
                />
                </Grid>
                <Grid item xs={12}>
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    options={allRaces}
                    value={races}
                    disabled={!editMode}
                    onChange={(e, v) => {
                        setRaces(v);
                    }}
                    renderOption={(props, option) => {
                        return (
                          <li {...props} key={option.id}>
                            {option.label}
                          </li>
                        );
                      }}
                    renderInput={(params) => <TextField {...params} label="Races" color="primary" variant="outlined" />}
                />
                </Grid>
                <Grid item xs={12}>
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    options={allReligion}
                    value={religion}
                    disabled={!editMode}
                    onChange={(e, v) => {
                        setReligion(v);
                    }}
                    renderOption={(props, option) => {
                        return (
                          <li {...props} key={option.id}>
                            {option.label}
                          </li>
                        );
                      }}
                    renderInput={(params) => <TextField {...params} label="Religion"  variant="outlined" />}
                />
                </Grid>
            </Grid>
            <br/>
            <Grid container spacing={2}>
                 <Grid item xs={12}>
                    <Divider orientation="horizontal"/>
                </Grid>
                 <Grid item xs={12} md={5.5}>
                  <FormLabel component="legend">Is Diabetic ?</FormLabel>
                  <FormControlLabel
                    value={isDiabetic}
                    control={<Switch disabled={!editMode} checked={isDiabetic} onChange={()=>setIsDia(!isDiabetic)} color="primary" />}
                    label={isDiabetic ? "Diabetic" : "Not Diabetic"}/>
                 </Grid>
                  <Grid item xs={12} md={0.5}>
                    <Divider orientation="vertical"/>
                 </Grid>
                  <Grid item xs={6} md={5.5}>
                  <FormLabel component="legend">Is Incontinent ?</FormLabel>
                  <FormControlLabel
                    value={isIncontinent}
                    control={<Switch disabled={!editMode} checked={isIncontinent}  onChange={()=>setIsIncont(!isIncontinent)} color="primary" />}
                    label={isIncontinent ? "Incontinent" : "Restrained"}/>
                 </Grid>
                  <Grid item xs={12}>
                    <Divider orientation="horizontal" flexItem/>
                 </Grid>
                  <Grid item xs={12} md={5.5}>
                  <FormLabel component="legend">Tobacco Use ?</FormLabel>
                  <FormControlLabel
                    value={isTobacco}
                    control={<Switch disabled={!editMode} checked={isTobacco} onChange={()=>setIsTobacco(!isTobacco)} color="primary" />}
                    label={isTobacco ? "Tobacco" : "Non Tobacco"}/>
                 </Grid>
                <Grid item xs={12} md={0.5}>
                    <Divider orientation="vertical"/>
                 </Grid>
                  <Grid item xs={12} md={5.5}>
                  <FormLabel component="legend">Alcohol Use ?</FormLabel>
                  <FormControlLabel
                    value={isAlcohol}
                    control={<Switch disabled={!editMode} checked={isAlcohol} onChange={()=>setIsAlcohol(!isAlcohol)} color="primary" />}
                    label={isAlcohol ? "Alcoholic" : "Not Alcoholic"}/>
                 </Grid>
            </Grid>
            </Grid>
            <Grid item>
                <Divider orientation="vertical"/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <Typography variant="subtitle1" align="center" color="primary">Diagnoses, Diet & Allergies</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        id="primaryDia"
                        label="Primary Diagnosis"
                        multiline
                        value={pDiagnosis}
                        onChange={e=>setPDiag(e.target.value)}
                        disabled={!editMode} 
                        fullWidth
                        rows={4}
                        variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        id="secondaryDia"
                        label="Secondary Diagnosis"
                        disabled={!editMode} 
                        value={sDiagnosis}
                        onChange={e=>setSDiag(e.target.value)}
                        multiline
                        fullWidth
                        rows={4}
                        variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        id="diet"
                        label="Diet"
                        disabled={!editMode} 
                        value={diet}
                        onChange={e=>setDiet(e.target.value)}
                        multiline
                        fullWidth
                        rows={4}
                        variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        id="allergies"
                        label="Food & Medical Allergies"
                        value={allergies}
                        onChange={e=>setAllergies(e.target.value)}
                        disabled={!editMode} 
                        multiline
                        fullWidth
                        rows={4}
                        variant="filled"
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5.8}>
                    <Typography variant="subtitle1" align="center" color="primary">Sensory / Functional / Communication Limitations</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                        <Autocomplete
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={allVision}
                            disabled={!editMode} 
                            value={vision}
                            fullWidth
                            onChange={(e, v) => {
                                setVision(v);
                            }}
                            renderOption={(props, option) => {
                                return (
                                  <li {...props} key={option.id}>
                                    {option.label}
                                  </li>
                                );
                              }}
                            renderInput={(params) => <TextField {...params}  label="Vision"  variant="standard" />}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Autocomplete
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={allAmbulation}
                            disabled={!editMode} 
                            fullWidth
                            value={ambulation}
                            onChange={(e, v) => {
                                setAmbulation(v);
                            }}
                            renderOption={(props, option) => {
                                return (
                                  <li {...props} key={option.id}>
                                    {option.label}
                                  </li>
                                );
                              }}
                            renderInput={(params) => <TextField {...params} label="Ambulation"  variant="standard" />}
                        />
                        </Grid>
                        <Grid item xs={12}>
                             <Divider orientation="horizontal" flexItem />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={!editMode} value={visionNotes} onChange={e=>setVisionNotes(e.target.value)}  label="Vision Notes" multiline rows={2} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={!editMode} value={ambulationNotes} onChange={e=>setAmbNotes(e.target.value)} label="Ambulation Notes" multiline rows={2} />
                        </Grid>
                          <Grid item xs={12}>
                             <Divider disabled={!editMode}  orientation="horizontal" flexItem />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={!editMode} value={hearingNotes} onChange={e=>setHearing(e.target.value)} label="Hearing Notes" multiline rows={2} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField disabled={!editMode} value={smellNotes} onChange={e=>setSmell(e.target.value)}  label="Smell Notes" multiline rows={2} />
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={0.3}>
                <Divider orientation="vertical"/>
            </Grid>
                    <Grid item xs={12} md={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                             <Typography variant="subtitle1" align="center" color="primary">Assistive / Adaptive Devices</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Autocomplete
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={allHearingAid}
                            disabled={!editMode} 
                            fullWidth
                            value={hearingAid}
                            onChange={(e, v) => {
                                setHearingAid(v);
                            }}
                            renderOption={(props, option) => {
                                return (
                                  <li {...props} key={option.id}>
                                    {option.label}
                                  </li>
                                );
                              }}
                            renderInput={(params) => <TextField {...params} label="Hearing Aid"  variant="standard" />}
                        />
                            </Grid>
                             <Grid item xs={12} md={6}>
                                <Autocomplete
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={allDentures}
                            disabled={!editMode} 
                            fullWidth
                            value={dentures}
                            onChange={(e, v) => {
                                setDentures(v);
                            }}
                            renderOption={(props, option) => {
                                return (
                                  <li {...props} key={option.id}>
                                    {option.label}
                                  </li>
                                );
                              }}
                            renderInput={(params) => <TextField {...params} label="Dentures"  variant="standard" />}
                        />
                            </Grid>
                            <Grid item xs={12}>
                             <Divider orientation="horizontal" flexItem />
                            </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={additionalDevices}
                            disabled={!editMode} 
                            fullWidth
                            value={devices}
                            multiple
                            onChange={(e, v) => {
                                setDevices(v);
                            }}
                            renderInput={(params) => <TextField {...params} label="Additional Devices"  variant="standard" />}
                        />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField disabled={!editMode} value={notes} onChange={e =>setNotes(e.target.value)} label="Notes" fullWidth multiline rows={4} />
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
         <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
         <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
         <Button variant="contained" startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button>
        <span style={{flexGrow:0.3}}/>
          <span style={{flexGrow:0.3}}/>
         <Button variant="contained" onClick={() => handleMode()} startIcon={ editMode ?  <FiCheck /> : <FaEdit/>} size='small' color="success" >
            {editMode ? "Save" : "Edit"}
          </Button>
            </Toolbar>         
      </AppBar>
      <MySnackbar ref={snackRef} />
    </main>
    )
   
}


export const ComplianceTab = ({prospectId,type})=>{
    const snackRef = useRef();
    const [id, setId] = useState("")
    const [documentName, setFileName] = useState("");
    const [documentUrl, setDocUrl] = useState("");
    const [loading, setLoading ] = useState(false);
    const [expiryDate, setExpiryDate ] = useState("");
    const [complianceRow, setRow]= useState([]);
    const [resForm, setResForms] = useState([]);
    const [selector, setSelector] = useState({open:false});
    const [uploader, setUploader] = useState({open:false});
    useEffect(() => {
        async function getData() {
          try {
            let res = await prospectService.getCompliance(`${type}/${prospectId}`, id);
           if(res.variant === "success"){
            setRow(res.data)
            snackRef.current.handleSnack(res);
           }else snackRef.current.handleSnack(res);            
          } catch (error) {
           console.log(error);
           snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
          } 
        }
        if(prospectId){getData()}
        
      }, [prospectId])

      async function getForms() {
        try {
          let res = await prospectService.getTask(`api/v1/form/main/allForm/oneResident/${prospectId}`);
          if(res.variant === "success"){
          setResForms(res.data);
          snackRef.current.handleSnack(res);
          }else snackRef.current.handleSnack(res);            
        } catch (error) {
          console.log(error);
          snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
        } 
      }

    useEffect(() => {
      if(prospectId && type==="prospect"){getForms()}
    }, [prospectId])

    const imgUpload= async (e)=>{
        setLoading(true)
        let url = await useImgUpload(e);
        if(url){
          setDocUrl(url);
          setLoading(false)
        } else {
          snackRef.current.handleSnack({message:"Image Not Selected", info:"warning"}); 
          setLoading(false)}
      }
    const handleSubmit =async ()=>{
        try {
          if(!documentName){
            snackRef.current.handleSnack({message:"Document Name is Required.", variant:"info"}); 
          }
            let data = {documentName,documentUrl,expiryDate,type,prospectId};
            let response;
              response = await prospectService.saveCompliance(id, data);
              if(response.variant === "success"){
                setFileName("");
                setDocUrl("");
                setExpiryDate("")
                snackRef.current.handleSnack(response);
              } else snackRef.current.handleSnack(response?.response?.data);            
             } catch (error) {
              console.log(error);
              snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.response.data.message, variant:"error"});
             } 
    }
    return (
     <main>
        <Grid sx={{background:"#fff", borderRadius:"10px", width: '100%' }}> 
        {type==="prospect" && <>
        <Divider>   <Typography color="primary" style={{fontFamily: 'Courgette'}} variant='h6' gutterBottom align='center'>All Uploaded Documents</Typography> </Divider>
      <Table size='small'> 
          <TableHead>
                <TableRow>
                  <TableCell align="left">Form Description </TableCell>
                  <TableCell align="left">Form Number</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center">Present</TableCell>
                  <TableCell align="left">Last Modification</TableCell>
                  <TableCell align="left">Last uploaded By</TableCell>
                  <TableCell align="center">Action</TableCell>
                  </TableRow>
            </TableHead>
            <TableBody>  
            {resForm?.forms?.map((m,k)=> <TableRow hover key={k}> 
            <TableCell align="left">{m.formName}</TableCell>
                  <TableCell align="left">{m.formNo}</TableCell>
                  <TableCell align="center">{m.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{m.present ? <FcCheckmark style={{fontSize:22}} /> : m.required ? <FcHighPriority style={{fontSize:18}}/> : null }</TableCell>
                  <TableCell align="left">{m.lastModified}</TableCell>
                  <TableCell align="left">{m.lastUploadBy}</TableCell>
                  <TableCell align="center">
                  <ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m,r:resForm})} >History</Button>
                  <Button size="small" color="success"><Link target="_blank" rel="noopener noreferrer" href={`/print/forms/${m?.formNoLink}/${resForm?._id}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m,r:resForm})} >Upload</Button>
                    </ButtonGroup></TableCell>
            </TableRow>  )}
            </TableBody>
        </Table>
        
        <br/> <br/>
        </> }
        
        <Typography variant="h6" align="center" style={{fontFamily: 'Courgette'}} color="primary">Upload Other Documents</Typography>
        <br/>
    <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
            <TextField label="Document Name" value={documentName} onChange={e=>setFileName(e.target.value)}  placeholder="Name of the File" type="text" fullWidth/>
            </Grid>
            <Grid item xs={12} md={3}>
            <TextField label="Document" disabled={loading} helperText="PDF and Image Files are allowed" inputProps={{ accept:"image/*, application/pdf" }}  InputProps={{
            endAdornment: <InputAdornment position="start">{loading && <CircularProgress size={25}/>} </InputAdornment>,
          }} onChange={(e) => imgUpload(e.target.files[0])}  type="file" focused fullWidth/>
            </Grid>
            <Grid item xs={12} md={3}>
            <TextField fullWidth type="date" value={expiryDate} onChange={e=>setExpiryDate(e.target.value)} focused label="Expiry Date (If Any)" variant="standard" />               
            </Grid>
            <Grid item xs={12} md={3} className="center">
            <Button variant="outlined" color="secondary" onClick={handleSubmit} startIcon={<FcExternal style={{fontSize:24}}/>}>Upload File</Button>
            </Grid>
        </Grid>
        <DataGrid
        rows={complianceRow}
        columns={complianceColumn}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        
      />
    </Grid>
    <Suspense fallback={<CircularProgress/>}> <FormHistory selector={selector} setSelector={()=>setSelector({open:false})}/> </Suspense>
    <Suspense fallback={<CircularProgress/>}> <FormUpload uploader={uploader} setUploader={()=>setUploader({open:false})} getForms={()=>getForms()}/> </Suspense>
    <Suspense fallback={null}> <MySnackbar ref={snackRef} /></Suspense>
   
    </main>
    )
}

const complianceColumn = [
    {
      field: 'documentName',
      headerName: 'Document Name',
      width: 200,
    },
    {
      field: 'documentUrl',
      headerName: 'Document Link',
      width: 150,
      renderCell: props=> <Link href={`${props?.row?.documentUrl}`} target="_blank">Click Here  ➡ </Link>,
    },
    {
      field: 'expiryDate',
      headerName: 'Expiry Date',
      type: 'text',
      width: 150,
    },
    {
        field: 'date',
        headerName: 'Upload Date',
        sortable: false,
        width: 160,
      },
    {
        field: 'lastModified',
        headerName: 'Last Modified',
        width: 160,
      },
    // {
    //   field: 'action',
    //   headerName: 'Action',
    //   width: 120,
    //   sortable: false,
    //   renderCell:  <Button onClick={()=>console.log(props)} variant="text">Delete</Button>,
    // },
  ];


export default ProfileTab;
