"use client";
// import MainContext from './Components/Context/MainContext';
import React, { useEffect } from 'react'
import "./pageStyle.css";
import Amenities, {OurCommunity} from "./Components/Amenities/Amenities";
import { useState,Suspense  } from "react";
// import {DARKMODE} from "./Components/Context/types"
import Header from "./Components/Header/Header";
import Enquiry from "./Components/Enquiry/Enquiry";
import {NewFooter} from "./Components/Footer/Footer";
import {Grid, TextField,styled, Typography,Box,Button,IconButton,InputAdornment, Container,Tabs,Tab} from '@mui/material';
import Link from 'next/link';
import { FcBusinessman,FcBusinesswoman,} from "react-icons/fc";
import {authService} from "./services/index"
import Loading from "./Components/Loading/Loading";
import CompressionTable from "./Components/Amenities/CompressionTable";

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
  const [hero,setHero] = useState({btn:"Assisted Living",link:"/lifestyle/care",text:"We provide the care that you need.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1706128914/Oasis2_clq4l3.webp"})
  const [allItems] = useState([{btn:"Amenities",link:"/amenities",text:"We respect your wishes in crafting your living plan.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1706128914/Oasis1_rwtkv6.webp"},{btn:"Assisted Living",link:"/lifestyle/care",text:"We provide the care that you need.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1706128914/Oasis2_clq4l3.webp"},{btn:"Joy in Living",link:"/lifestyle",text:"We seek to bring joy into your life.",bgImg:"https://res.cloudinary.com/oasismanors/image/upload/v1706128914/Oasis3_biy68f.webp"}])

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

  
    const HeroImg = styled('div')(({ theme }) => ({
      background:`linear-gradient(to left, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.65) 100%),\n   url(${hero.bgImg}) no-repeat`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      overflow:"hidden",
      [theme.breakpoints.down('md')]: {
        height: "420px",
      },
      [theme.breakpoints.up('md')]: {
        height: "720px",
      },
    }));

    return (
        <Header>
        <Suspense fallback={<Loading />}>
        <TopAbstract/>
        <HeroImg>
          <Container maxWidth="xl">
            <Grid sx={{backgroundColor:"rgba(0, 0, 0, 0.1)",width:{xs:"100%",md:"max-content"},minHeight:"250px", marginTop:{xs:"80px",md:"250px"}, padding:"1rem",borderRadius:"10px"}}>
            <Tabs textColor="inherit" value={value} onChange={(e,v)=>{setValue(v);setHero(allItems[v])}} aria-label="basic tabs example">
            <Tab sx={tabsStyle} label="Respect."/>
            <Tab sx={tabsStyle} label="Care."/>
            <Tab sx={tabsStyle} label="Joy."/>
          </Tabs>
          <h4 id="heroText">{hero.text}</h4>
           <Link href={hero.link}> <button id="heroBtn">{hero.btn}</button></Link> 
            </Grid>
          </Container>
          <div id="design"/>
        </HeroImg>
       

        <Grid sx={{background:"#fff"}}>
        <Container>
          <div id="visit">
            <span><p><Link href="/contact" id="firstText">Schedule Your Visit  ➡ </Link></p> </span>
            <span id="secoundText" style={{color:"#00a2c2"}}>Call now  <Link href="tel:310-995-4859"><strong>(310) 995-4859</strong></Link> </span>
          </div>

        <Grid container spacing={2} className="sectionMargin">
            <Grid item xs={12} md={6} className="center" sx={{flexDirection:"column"}}>
            <Typography color="#082952" align='center' gutterBottom sx={{fontSize:{xs:"20px",md:"32px"}, lineHeight:"1.2", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Welcome to Oasis Homes </Typography>
            <p style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",color:"#333333"}}>Come home to sophisticated living in the Sylmar, where relaxed, maintenance-free living and proactive wellness ensure your lifestyle is as vibrant as you are. Here, you are free to pursue your passions and discover new interests, all in the company of neighbors who share your view of what independent senior living in Los Angeles should be.</p>
            <br/><p style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",color:"#333333"}}>Perched on a scenic bluff in the rolling hills of Sylmar, Oasis Homes, provides the setting to be as active or easygoing as you want with the confidence and peace of mind that comes from choosing a Life Plan community to call home.</p>
            </Grid>
             <Grid item xs={12} md={6} className="center">
                <img src="https://res.cloudinary.com/oasismanors/image/upload/v1706128214/OasisHome_azsxab.webp" alt="Oasis Homes" style={{width:"100%",borderRadius:"20px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}} />
             </Grid>
        </Grid>
          </Container>
        </Grid> 

        <CompressionTable/> 
  
        <Suspense fallback={<Loading />}>
         <OurCommunity/>
         </Suspense>
         <Suspense fallback={<Loading />}>
          <Amenities/>
          </Suspense>
        <Suspense fallback={<Loading />}>
        <Enquiry/>
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