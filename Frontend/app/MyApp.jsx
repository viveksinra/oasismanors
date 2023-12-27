"use client";
import MainContext from './Components/Context/MainContext';
import React, { Fragment } from 'react'
import "./pageStyle.css";
import Amenities from "./Components/Amenities/Amenities";
import { useState,Suspense,useContext  } from "react";
// import {DARKMODE} from "./Components/Context/types"
import Header from "./Components/Header/Header";
import Enquiry from "./Components/Enquiry/Enquiry";
import Footer from "./Components/Footer/Footer";
import {Grid, TextField, Typography,Box,Button,IconButton,InputAdornment, Container,} from '@mui/material';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineDot,TimelineContent} from '@mui/lab';
import { FcBusinessman,FcBusinesswoman,FcLandscape     } from "react-icons/fc";
import {GiHotMeal} from 'react-icons/gi';
import { FaSwimmer,FaBed,FaTree,FaChartLine    } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import {authService} from "./services/index"
import Loading from "./Components/Loading/Loading";

function MyApp() {  
  const {state, dispatch} = useContext(MainContext)
    const [male, setSex] = useState(true);
    const [name, setName]=useState("");
    const [mobile, setMobile] =useState("")
    const handleAvailability = async ()=>{
      if(name && mobile) {
        try {
          let res = await authService.post(`api/v1/public/enquiry`,{male,name,mobile});
          if(res.variant ==="success"){
            setName("");
            setMobile("");
            alert(res.message)
          }  
        } catch (error) {
          console.log(error);
        }
      }else alert("Kindly Enter your Name and Contact Number.")
    }
    return (
      <Fragment>
        <Header/>
        <Suspense fallback={<Loading />}>
        <TopAbstract/>
        <div id="heroBack">
        <Suspense fallback={<Loading />}>
          <Container maxWidth="xl">
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}></Grid>
              <Grid item xs={12} md={4} className='center'>
                  <div id="availability">
                    <Typography align="center" sx={{fontSize:{xs:"18px",md:"22px"}, fontFamily: 'Courgette',fontWeight:500}} color="darkcyan">Grab the Early Bird Discount</Typography>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <IconButton color="primary" component="label" onClick={()=>setSex(!male)}>
                    {male ? <FcBusinessman sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize={30} /> :   <FcBusinesswoman sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize={30} /> }
                    </IconButton>
                    <TextField id="standard-basic" fullWidth size="small" value={name} onChange={e=>setName(e.target.value)} label="Enter your Full Name" variant="standard" /> 
                    </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField id="standard-basic" fullWidth size="small" InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                      +1
                    </InputAdornment>
                    ),
                    }}value={mobile} onChange={e=>setMobile(e.target.value)} label="Mobile Number" type="number" variant="standard" />  
                    </Grid>
                    <Grid item xs={12} className="center">
                    <Button variant="contained" color="success" onClick={handleAvailability}>Check Availability </Button>
                    </Grid>
                    </Grid>
              </div>
              </Grid>
              <Grid item xs={12} md={4} sx={{display:{xs:"none",lg:"block"}}}>
                <br/>
                <Timeline position="alternate">
                <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="success">
                <FaSwimmer />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{fontFamily: 'Courgette'}} color="mediumspringgreen">
                Swimming Pool
                </Typography>
                <Typography color="white">Easy accessible Swimming Pool.</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                <GiHotMeal   />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="mediumspringgreen" sx={{fontFamily: 'Courgette'}} component="span">
                Proper Diet
                </Typography>
                <Typography color="white">Get the fresh, Healthly and balanced meal.</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="grey" >
                <FcLandscape   />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="mediumspringgreen" sx={{fontFamily: 'Courgette'}} component="span">
                Big Courtyard
                </Typography>
                <Typography color="white">Comfortable Courtyard for spacious living.</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector  />
                <TimelineDot color="secondary">
                <FaBed   />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="mediumspringgreen" sx={{fontFamily: 'Courgette'}} component="span">
                Private Bedrooms
                </Typography>
                <Typography color="white">With attach Bathroom, Flat TV, AC, etc.</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'mediumspringgreen' }} />
                <TimelineDot color="success">
                <FaTree   />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="mediumspringgreen" sx={{fontFamily: 'Courgette'}} component="span">
                Exercise Garden
                </Typography>
                <Typography color="white">Grab Natural & Positive Vibes.</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'mediumspringgreen' }} />
                <TimelineDot color="secondary">
                <FaUserDoctor  />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="mediumspringgreen" sx={{fontFamily: 'Courgette'}} component="span">
                Regular Checkup
                </Typography>
                <Typography color="white">Free Health Chechup and diagnosis.</Typography>
                </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'mediumspringgreen' }} />
                <TimelineDot color="success">
                <FaChartLine    />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" color="mediumspringgreen" sx={{fontFamily: 'Courgette'}} component="span">
                  Online Tracking
                </Typography>
                <Typography color="white">Best in Class Software guided Care.</Typography>
                </TimelineContent>
                </TimelineItem>
                
                </Timeline>
              </Grid>
            </Grid>

          </Container>
       
          </Suspense>
        </div>
        
        <Amenities/>
        <Suspense fallback={<Loading />}>
        <Enquiry/>
        <Suspense fallback={<Loading />}>
        <Footer/>
          </Suspense>
          </Suspense>
        </Suspense>
     </Fragment>
    )
  }


  
export function TopAbstract() {
    return (
      <div id="topAbstract"/>
    )
  }

export default MyApp