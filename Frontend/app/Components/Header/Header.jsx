"use client";
import MainContext from '../Context/MainContext';
import { useState,Suspense,useContext } from "react";
import "./headerStyle.css";
import {Container,Box,CssBaseline, Hidden,AppBar,Toolbar, useScrollTrigger,SwipeableDrawer } from '@mui/material/';
import Link from 'next/link';
import { FcMenu,FcPhone } from 'react-icons/fc';
import MyDrawer from "../Drawer/MyDrawer";
import Loading from "../Loading/Loading";
import { authService } from "../../services";

const Header = ( { children,window }) => {
  const [openDrawer, setDrawer]=useState(false);
  const {state, dispatch} = useContext(MainContext)
  const handleDrawer=()=>{
    setDrawer(!openDrawer)
  }
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Box sx={{ display:'flex', backgroundColor:"#fff"}}>
       <CssBaseline />
       <AppBar component="nav" elevation={0} sx={{backgroundColor:"#fff"}}>
        <Toolbar disableGutters>
        <Container >
            <Hidden mdDown> 
            <div className="dataBox">
           <ul> 
            <li style={{borderLeft:"none"}}><Link style={{margin:"0px 5px 0px 0px",padding:"0px 10px 0px 0px"}} href="/login">Resident Portal</Link></li>
            <li><Link style={{margin:"0px 5px",padding:"0px 10px"}} href="/contact/careers">Careers</Link></li>
            <li><Link style={{margin:"0px 0px 0px 5px",padding:"0px 0px 0px 10px"}} href="tel:310-995-4859">310-995-4859</Link></li>
           </ul>
            </div>
            </Hidden>
            <Hidden mdUp>
              <div style={{display:"flex"}}>
              <span style={{flexGrow:1}}/>
              <FcPhone style={{fontSize:24,marginRight:10}} />
              <Link href="/">310-995-4859</Link>
              </div>
            </Hidden>
        </Container>      
        </Toolbar>
        <Toolbar disableGutters>
        <div id={trigger ? "headerCompress" : "topHeader"}>
            <Container id="navContainer">
              <Hidden mdUp> 
              <FcMenu style={{fontSize:25}} onClick={handleDrawer}/>
              <div style={{flexGrow:1}}/>
              </Hidden>
              <Link href="/">
                <img src="https://res.cloudinary.com/oasismanors/image/upload/v1685029880/Logo_hmwkcj.svg" alt="Oasis Manor" id={trigger ? "OasisLogoComp" : "OasisLogo"} />
              </Link>
              <div style={{flexGrow:1}}/>
              <Hidden mdDown>
              <ul>
                <li id="about" ><Link href="/about">About us</Link>
                <div id="dropdownAbout" className='dropdownMenu'>
               <Link href="/about">Oasis Gateway</Link>
               <Link href="/about/gallery">Gallery</Link>
               <Link target='_blank' href="https://www.facebook.com/oasismanors">Our Facebook Page</Link>
               <Link href="/about/resources">Resources</Link>
               <Link href="/about/future">Secure your Future</Link>
           
                </div>
                  </li>
                  <li id="lifestyle" ><Link href="/amenities">Amenities</Link>
                  <div id="dropdownLifeStyle" className='dropdownMenu'>
                  <Link href="/amenities">Amenities & Activities</Link>
                  <Link href="/lifestyle/testimonials">Testimonials</Link>
                  <Link href="/contact/lifeplan">Lifeplan</Link>
                </div>
                  </li>
                  <li><Link href="/lifestyle/care">Care</Link></li>
                  <li><Link href="/lifestyle/cuisine">Cuisine</Link></li>
                  <li id="started"><Link href="/lifestyle">Joy in Living</Link></li>
                  <li><Link href="/lifestyle/events">Events</Link></li>
                  <li id="contact"><Link href="/contact">Contact</Link>
                  <div id="dropdownContact" className='dropdownMenu'>
                  <Link href="/contact/careers">Careers & Volunteers</Link>
                  <Link href="/contact/starting">Where to Begin</Link>
                </div>
                  </li>
              </ul> 
              </Hidden>
              {/* {state?.isAuthenticated ?  <Link href="/dashboard"><Button color="secondary" startIcon={<Avatar alt={state.name}  src={authService.getLoggedInUser()?.userImage ?? "https://res.cloudinary.com/oasismanors/image/upload/v1687519053/user_myqgmv.png"}/>}>Dashboard</Button> </Link> :  <Link href="/login"> <Button startIcon={<FaUserCircle />}>Login</Button></Link>  } */}
              </Container>    
              </div>
        </Toolbar>
      </AppBar>

       
   
    
    <Suspense fallback={<Loading />}>
    <SwipeableDrawer open={openDrawer} onClose={handleDrawer} onOpen={handleDrawer} variant="temporary" ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}> 
      <MyDrawer handleDrawer={()=>handleDrawer()}/>
    </SwipeableDrawer>
    </Suspense>
    <Box component="main" sx={{ marginTop:"60px",width:"100%" }}>
        <Toolbar disableGutters/>
        { children }
      </Box>
    </Box>
  )
}


export default Header