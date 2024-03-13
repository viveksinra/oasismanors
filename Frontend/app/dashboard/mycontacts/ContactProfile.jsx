
'use client';
import "../prospect/prospectStyle.css";
import React, { useState,useEffect,useRef,lazy,Suspense } from 'react'
import { prospectService,ledgerService } from "../../services";
import {Tabs,Tab,Avatar,Grid,Tooltip,Rating, Typography,Divider,AppBar,Toolbar,Badge,Alert,TextField,FormLabel,Switch,FormControlLabel,Button,ButtonGroup,InputAdornment,CircularProgress,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material/';
import { FcViewDetails,FcDiploma1,FcClock,FcLike,FcExternal,FcHighPriority,FcCheckmark  } from "react-icons/fc";
import { FaStethoscope,FaEdit} from "react-icons/fa";
import { FiCheck,FiFileMinus, } from "react-icons/fi";
import Autocomplete from '@mui/material/Autocomplete';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
import { useImgUpload } from '@/app/hooks/auth/useImgUpload'; 
import MySnackbar from "../../Components/MySnackbar/MySnackbar";
import {ComplianceTab} from "../prospect/ProfileTab";
const FormHistory = lazy(() => import("../forms/FormHistory"));
const FormUpload = lazy(() => import("../forms/FormUpload"));

const ProTabPanel = ({value, contactId,setProData})=>{
    switch (value) {
        case 0:
           return <Summary contactId={contactId} setProData={d=>setProData(d)}/>
        case 1:
            return <ComplianceTab prospectId={contactId} type="myContact"/>
        default:
            break;
    }
  }
const ContactProfile =({contactId})=>{
    const [profileTab, setPTab]=useState(0);
    const [proData, setProData] = useState(null);
   
    const imgUpload= async (e)=>{
        let userImage = await useImgUpload(e)
        try {
            if(userImage){
                let res = await prospectService.add(contactId,{userImage});
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
              <Tab icon={<FcDiploma1 style={{fontSize:20}}/>} iconPosition="start" sx={{textTransform:"none"}} label="Documents" />
              <Tab icon={<FcClock style={{fontSize:20}}/>} iconPosition="start"sx={{textTransform:"none"}} label="Change History"  />
            </Tabs>
            </div>
            </div>
            <ProTabPanel value={profileTab} contactId={contactId} setProData={(d)=>setProData(d)}/>
        </main>
    )
}

const Summary =({contactId, setProData})=>{
    const [loading, setLoading] = useState(false);
    const [totalCount, setTCount] = useState();
    const [forCreateDate, setForCreateDate] = useState("");
    const [forLastModified, setForLastModified] = useState("");
    const [lastTransDate, setLastTransDate] = useState("");
    const [salesAgent, setSalesAgent] = useState(null);
    const [subscribed, setSubscribe] = useState(true);
    const [bankName, setBankName]=useState("");
    const [branch,setBranch] = useState("");
    const [accountNo,setAcNo] = useState("");
    const [remark, setRemark]=useState("");
    const [ledger, setLedgerName]=useState("");
    const [group, setGroup] = useState({label:"",link:"",_id:""});
    const [openingBal, setOpeningBal] = useState("");
    const [isDr, setIsDr] = useState(false);
    const [street, setStreet] = useState("");
    const [unit, setUnit] = useState("");
    const [gender, setGender] = useState(null);
    const [home, setHome] = useState("")
    const [office, setOffice] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] =useState("");
    const [state, setState]=useState(null);
    useEffect(() => {
        async function getOneData(){
        setLoading(true) 
        let res = await ledgerService.getLedger(`api/v1/account/ledger/getledger/getAll/${contactId}`);
        if(res.variant === "success"){
            // console.log(res.data)
        setLoading(false)
        setProData({name:`${res.data.ledger}`, subTitle: `Group ~ ${res.data.group?.label}`, important:res.data.important, userImage: res.data.ledgerImage})
        setForCreateDate(res.data.forCreateDate);
        setForLastModified(res.data.forLastModified);
        setLastTransDate(res.data.lastTransDate);
        setSalesAgent(res.data.salesAgent);
        setSubscribe(res.data.marketingStatus);
        setBankName(res.data.bankName);
        setBranch(res.data.branch);
        setAcNo(res.data.accountNo);
        setRemark(res.data.remark);
        setLedgerName(res.data.ledger);
        setGroup(res.data.group);
        setOpeningBal(res.data.openingBal);
        setIsDr(res.data.isDr)
        setStreet(res.data.street);
        setUnit(res.data.unit);
        setGender(res.data.gender);
        setHome(res.data.home);
        setOffice(res.data.office);
        setMobile(res.data.mobile);
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
       if(contactId){getOneData()}
      }, [contactId])
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
              
                <Grid item>
                    <Typography variant="h6" color="black" align="center" >{totalCount?.totalPendingTask}</Typography>
                    <Typography variant="caption" color="primary">Pending Tasks</Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item >
                    <Typography variant="h6" color="black" align="center">{totalCount?.totalNotes}</Typography>
                    <Typography variant="caption" color="primary">Notes</Typography>
                </Grid>
            </Grid>
            <Grid container direction="column" sx={{justifyContent:"space-evenly",height:260, border:"1px solid #dbe0e0",borderRadius:5,paddingLeft:5,marginTop:2}}>
                <Grid item>
                <Typography color="black" variant="subtitle1">Important Dates</Typography>
                </Grid>
                <Divider orientation="horizontal" flexItem />
                <Grid item>
                <Typography variant="subtitle1" sx={{color:"#76838e"}}>Create Date : </Typography>
                <Typography color="black" variant="subtitle2">{forCreateDate}</Typography>
                </Grid>
                <Divider orientation="horizontal" flexItem />
                <Grid item>
                <Typography variant="subtitle1" sx={{color:"#76838e"}}>Last Modified Date : </Typography>
                <Typography color="black" variant="subtitle2">{forLastModified}</Typography>
                </Grid>
                <Divider orientation="horizontal" flexItem />
                <Grid item>
                <Typography variant="subtitle1" sx={{color:"#76838e"}}>Opening Balance : </Typography>
                <Typography color="black" variant="subtitle2">{`${openingBal} ${isDr ? "Dr" : "Cr"}`}</Typography>
            
                </Grid>
                </Grid>

            {/* <Grid container sx={{marginTop:2,padding:{xs:"20px",md:"0px"}}}>
                <Grid item>
                <Typography variant="subtitle1" color="primary">Community :</Typography>
                <Typography color="black" variant="subtitle2">Assisted Living Retirement Homes</Typography>
                </Grid>
            </Grid> */}
            {/* <Grid container spacing={1} sx={{padding:{xs:"20px",md:"0px"}}}>
                <Grid item xs={12}>
                <Typography variant="subtitle1" color="primary">Sales Agent</Typography>
                <Typography color="black" variant="subtitle2">{salesAgent?.label}</Typography>
                </Grid>
               
                <Grid item xs={12}>
                    {subscribed ?  <Alert severity="success">Subscribed Marketing</Alert> :  <Alert severity="info">Not Subscribed for Marketing</Alert>  }
               
                </Grid>
            </Grid> */}

            
           </Grid>
            <Grid item xs={8}>
                <Grid container rowSpacing={2} sx={{padding:{xs:"20px",md:"0px"}}}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center" color="primary">-: Contact Details :-</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Contact Name</Typography>
                        <Typography color="black" variant="subtitle2"> {ledger}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Contact Group</Typography>
                        <Typography color="black" variant="subtitle2">{group?.label}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Unit</Typography>
                        <Typography color="black" variant="subtitle2">{unit}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Divider />
                    </Grid>
                  
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Mobile No.</Typography>
                        <Typography color="black" variant="subtitle2">{mobile}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Email Id</Typography>
                        <Typography color="black" variant="subtitle2">{email}</Typography>
                    </Grid>
                  
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Street Address</Typography>
                        <Typography color="black" variant="subtitle2">{street}</Typography>
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
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Bank Name</Typography>
                        <Typography color="black" variant="subtitle2">{bankName}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" sx={{color:"#76838e"}}>Branch Name</Typography>
                        <Typography color="black" variant="subtitle2">{branch}</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Typography variant="subtitle1" sx={{color:"#76838e"}}>Account Number</Typography>
                        <Typography color="black" variant="subtitle2">{accountNo}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{color:"#76838e"}}>Story</Typography>
                    <Typography color="black" variant="subtitle2">{remark}</Typography>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </main>
    )
}

export default ContactProfile;
