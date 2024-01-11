"use client";
// import MainContext from './Components/Context/MainContext';
import React, { useEffect } from 'react'
import "./pageStyle.css";
import {OurCommunity,Newsletter} from "./Components/Amenities/Amenities";
import { useState,Suspense  } from "react";
// import {DARKMODE} from "./Components/Context/types"
import Header from "./Components/Header/Header";
import Enquiry from "./Components/Enquiry/Enquiry";
import {NewFooter} from "./Components/Footer/Footer";
import {Grid, TextField, Typography,Box,Button,IconButton,InputAdornment, Container,Tabs,Tab} from '@mui/material';
import Link from 'next/link';
import { FcBusinessman,FcBusinesswoman,} from "react-icons/fc";
import {authService} from "./services/index"
import Loading from "./Components/Loading/Loading";

const tabsStyle = {
  fontFamily: "Adequate, Helvetica Neue, Helvetica, \"sans-serif\"",
  fontWeight:300,
  color:"#fff",
  fontSize: "18px",
  lineHeight:"1.6rem",
  textTransform: "none"
}
function MyApp() {  
  // const {state, dispatch} = useContext(MainContext)
  const [value, setValue] = React.useState(0);
  const [hero,setHero] = useState({btn:"Creative Living",link:"",text:"Bring out the best in you.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1704819303/hero_creativity-3-1440x630_f0gobc.avif"})
  const [allItems] = useState([{btn:"Floor Plans",link:"",text:"Live life on your terms.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1704819321/hero_choice-3-1440x630_po0gdo.avif"},{btn:"Creative Living",link:"",text:"Bring out the best in you.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1704819303/hero_creativity-3-1440x630_f0gobc.avif"},{btn:"Our Community",link:"",text:"Feel right at home.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1704819223/hero_connection-3-1440x630_xnhwlx.avif"},{btn:"Supportive Services",link:"",text:"Support you can count on.",bgImg:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/hero_confidence-3-1536x672.jpg"}])

  useEffect(() => {
    const interval = setInterval(() => {  //assign interval to a variable to clear it.
      if(value < allItems.length-1 ){
        setHero(allItems[value+1]) ;
          setValue(value+1)
      }else {
        setHero(allItems[0]) ;
        setValue(0);
      }
    }, 3000)
    return () => clearInterval(interval); //This is important
   
  }, [value])

  const heroImg = {
    background:`linear-gradient(to left, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.65) 100%),\n   url(${hero.bgImg}) no-repeat`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "720px",
    display: "flex",
    alignItems: "center"
  }
    return (
        <Header>
        <Suspense fallback={<Loading />}>
        <TopAbstract/>
        <Grid sx={heroImg}>
          <Container maxWidth="xl">
            <Grid sx={{backgroundColor:"rgba(0, 0, 0, 0.1)",width:"max-content",padding:"1rem",borderRadius:"10px"}}>
            <Tabs textColor="inherit" value={value}  onChange={(e,v)=>{setValue(v);setHero(allItems[v])}} aria-label="basic tabs example">
            <Tab sx={tabsStyle} label="Choice."/>
            <Tab sx={tabsStyle} label="Creativity."/>
            <Tab sx={tabsStyle} label="Connection."/>
            <Tab sx={tabsStyle} label="Confidence."/>
          </Tabs>
          <h4 id="heroText">{hero.text}</h4>
          <button id="heroBtn">{hero.btn}</button>
            </Grid>
          </Container>
        </Grid>
        <div id="design"/>

        <div style={{background:"#fff", marginTop:"-63px"}}>
        <Container>
          <div id="visit">
            <span><p><Link href="/contact" id="firstText">Schedule Your Visit  ➡ </Link></p> </span>
            <span id="secoundText" style={{color:"#00a2c2"}}>Call now  <Link href="tel:310-995-4859"><strong>(310) 995-4859</strong></Link> </span>
          </div>

        <Grid container spacing={4} className="sectionMargin">
            <Grid item xs={12} md={6} className="center" sx={{flexDirection:"column"}}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"48px"}, lineHeight:"1.2", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Welcome to The Canterbury </Typography>
            <p style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",color:"#333333"}}>Come home to sophisticated living in the South Bay, where relaxed, maintenance-free living and proactive wellness ensure your lifestyle is as vibrant as you are. Here, you are free to pursue your passions and discover new interests, all in the company of neighbors who share your view of what independent senior living in Los Angeles should be.</p>
        <br/><p style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",color:"#333333"}}>Perched on a scenic bluff in the rolling hills of Rancho Palos Verdes, The Canterbury, provides the setting to be as active or easygoing as you want with the confidence and peace of mind that comes from choosing a Life Plan community to call home.</p>
            </Grid>
             <Grid item xs={12} md={6}  className="center">
                <div id="welcomeImg"/>
             </Grid>
        </Grid>
          </Container>
        </div> 
        <br/><br/> <br/>
         <OurCommunity/>
       
        <Suspense fallback={<Loading />}>
        <Enquiry/>
        <Newsletter/>
        {/* <Amenities/> */}
        <Suspense fallback={<Loading />}>
        {/* <Footer/> */}
        <NewFooter/>
          </Suspense>
          </Suspense>
        </Suspense>
      </Header>
    )
  }


  
export function TopAbstract() {
    return (
      <div id="topAbstract"/>
    )
  }


  
 function QuickCallBack() {
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
      <div id="availability">
            <Typography align="center" sx={{fontSize:{xs:"18px",md:"22px"}, fontFamily: 'Courgette',fontWeight:500}} color="darkcyan">Get a Quick Callback</Typography>
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
    )
  }
 
export default MyApp