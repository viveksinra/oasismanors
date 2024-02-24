"use client";
import MainContext from '../Context/MainContext';
import { useState,Suspense,useContext } from "react";
import "./headerStyle.css";
import {Container,Box,CssBaseline, Hidden,AppBar,Toolbar,Skeleton,styled,Typography,List,Fab,ListItemButton,ListItemIcon,ListItemText, useScrollTrigger,SwipeableDrawer, IconButton, Divider } from '@mui/material/';
import { Global } from '@emotion/react';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import { FcMenu,FcPhone,FcFeedback,FcHome,FcAssistant,FcPlanner  } from 'react-icons/fc';
import { MdOutlineClose  } from "react-icons/md";
import MyDrawer from "../Drawer/MyDrawer";
import Loading from "../Loading/Loading";
import { authService } from "../../services";

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const Header = ( { children,window }) => {
  const [openDrawer, setDrawer]=useState(false);
  const {state, dispatch} = useContext(MainContext)
  const [openBtmDrawer, setBtmDrawer] = useState(false);
  const handleDrawer=()=>{
    setDrawer(!openDrawer)
  }
  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  
  return (
    <Box sx={{ display:'flex', backgroundColor:"#fff"}}>
       <CssBaseline />
       <AppBar component="nav" elevation={0} sx={{backgroundColor:"#fff",maxHeight:"118px"}}>
            <Hidden mdDown> 
            <Toolbar disableGutters>
            <Container>
            <div className="dataBox">
           <ul> 
            <li style={{borderLeft:"none"}}><Link style={{margin:"0px 5px 0px 0px",padding:"0px 10px 0px 0px"}} href="/login">Resident Portal</Link></li>
            <li><Link style={{margin:"0px 5px",padding:"0px 10px"}} href="/contact/careers">Careers</Link></li>
            <li><Link style={{margin:"0px 0px 0px 5px",padding:"0px 0px 0px 10px"}} href="tel:310-995-4859">310-995-4859</Link></li>
           </ul>
            </div>
            </Container>   
            </Toolbar>
            </Hidden>
       
        <Toolbar disableGutters>
        <div id={trigger ? "headerCompress" : "topHeader"}>
            <Container id="navContainer">
              <Hidden mdUp>
                <IconButton onClick={handleDrawer}>
                <FcMenu  />
                </IconButton> 
            
              <div style={{flexGrow:1 }}/>
              </Hidden>
              <Link href="/">
                <img src="https://res.cloudinary.com/qualifier/image/upload/v1705684670/OasisLogo_kngpov.svg" alt="Oasis Manor" id={trigger ? "OasisLogoComp" : "OasisLogo"} />
              </Link>
              <div style={{flexGrow:1}}/>
              <Hidden mdUp>
              <IconButton onClick={()=>setBtmDrawer(true)}>
              <FcAssistant/>
              </IconButton>
              </Hidden>
              <Hidden mdDown>
              <ul>
                <li id="about" ><Link href="/about">About us</Link>
                <div id="dropdownAbout" className='dropdownMenu'>
               <Link href="/about">Oasis Gateway</Link>
               <Link href="/about/gallery">Gallery</Link>
               <Link target='_blank' href="https://www.facebook.com/oasishomesinc">Our Facebook Page</Link>
               <Link href="/about/resources">Resources</Link>
                </div>
                  </li>
                  <li ><Link href="/amenities">Amenities</Link></li>
                  <li id="care"><Link href="/lifestyle/care">Care</Link>
                  <div id="dropdownCare" className='dropdownMenu'>
                  <Link href="/lifestyle/care">Assisted Living</Link>
                  <Link href="/about/respiteCare">Respite Care</Link>
                </div>
                  </li>
                  <li><Link href="/lifestyle/cuisine">Cuisine</Link></li>
                  <li id="started"><Link href="/lifestyle">Joy in Living</Link></li>
                  <li><Link href="/lifestyle/events">Events</Link></li>
                  <li><Link href="/contact">Contact</Link> </li>
              </ul> 
              </Hidden>
              {/* {state?.isAuthenticated ?  <Link href="/dashboard"><Button color="secondary" startIcon={<Avatar alt={state.name}  src={authService.getLoggedInUser()?.userImage ?? "https://res.cloudinary.com/oasismanors/image/upload/v1687519053/user_myqgmv.png"}/>}>Dashboard</Button> </Link> :  <Link href="/login"> <Button startIcon={<FaUserCircle />}>Login</Button></Link>  } */}
              </Container>    
              </div>
        </Toolbar>
      </AppBar>

    
    
    <Suspense fallback={<Loading />}>
    {openBtmDrawer && <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${56}px)`,
            overflow: 'visible',
          },
        }}
      /> }
      
    <SwipeableDrawer
        anchor="bottom"
        open={openBtmDrawer}
        onClose={()=>setBtmDrawer(false)}
        onOpen={()=>setBtmDrawer(true)}
        swipeAreaWidth={56}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -56,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <div style={{height:"60px",}}>
          <Typography sx={{p: 2, color:'text.secondary' }}>Contact & Support</Typography> 
          <IconButton onClick={()=>setBtmDrawer(false)} sx={{position:"absolute",right:"10px",marginTop:"-50px"}}>
          <MdOutlineClose/>
          </IconButton>
          </div>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      dense
      disablePadding
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <ListItemButton>
        <ListItemIcon>
          <FcPhone style={{fontSize:"25px"}} />
        </ListItemIcon>
        <ListItemText primary={<Link style={{color:"#00b3ff"}} href="tel:310-995-4859" target='_blank'>+1 (310)-995-4859</Link>} secondary="Call now" />
      </ListItemButton>
      <Divider light/>
      <ListItemButton>
        <ListItemIcon>
          <FcFeedback style={{fontSize:"25px"}} />
        </ListItemIcon>
        <ListItemText primary={<Link style={{color:"#00b3ff"}} href="mailto:info@oasismanors.com" target='_blank'>info@oasismanors.com</Link>} secondary="Email us" />
      </ListItemButton>
      <Divider light/>
      <ListItemButton>
        <ListItemIcon>
        <img src="https://www.cholainsurance.com/o/chola-corporate-theme/images/icons/whatsapp.png" alt="WhatsApp" />
        </ListItemIcon>
        <ListItemText primary={<Link style={{color:"#00b3ff"}} href="https://wa.me/+13109954859?text=Hi,%20I'm%20interested%20in%20Oasis%20Homes." target='_blank'>+1 (310)-995-4859</Link>} secondary="WhatsApp us" />
      </ListItemButton>
      <Divider light/>
      <ListItemButton>
        <ListItemIcon>
          <FcHome style={{fontSize:"25px"}}/>
        </ListItemIcon>
        <ListItemText primary={<Link style={{color:"#00b3ff"}} href="https://maps.app.goo.gl/bzTmavQ2H6z7v5ik9" target='_blank'>15116 Roxford St, Sylmar, CA 91342</Link>} secondary="Visit our facility" />
      </ListItemButton>
      <Divider light/>
     <center> <Link style={{color:"#00b3ff",textTransform:"none"}} href="/contact"><Fab variant="extended" sx={{marginTop:"10px"}} size="small" color="primary">
  <FcPlanner sx={{ mr: 1 }} />
 <Typography sx={{textTransform:"none",padding:"0px 5px",fontSize:"14px"}}>Schedule a Visit</Typography>
</Fab></Link> </center>
    </List>
          {/* <Skeleton variant="rectangular" height="100%" /> */}
        </StyledBox>
      </SwipeableDrawer>

    <SwipeableDrawer open={openDrawer} onClose={handleDrawer} onOpen={handleDrawer} variant="temporary" ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}> 
      <MyDrawer handleDrawer={()=>handleDrawer()}/>
    </SwipeableDrawer>
    </Suspense>
    <Box component="main" sx={{ marginTop:{xs:"0px",md:"60px"},width:"100%"}}>
        <Toolbar disableGutters/>
        { children }
      </Box>
    </Box>
  )
}


export default Header