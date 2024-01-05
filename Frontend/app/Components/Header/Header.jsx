"use client";
import MainContext from '../Context/MainContext';
import { Fragment,useState,Suspense,useContext } from "react";
import "./headerStyle.css";
import Image from 'next/image';
import {Container,Hidden, Typography,Avatar,SwipeableDrawer,Button } from '@mui/material/';
import Link from 'next/link';
import { FcMenu,FcPhone } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import MyDrawer from "../Drawer/MyDrawer";
import Loading from "../Loading/Loading";
import { authService } from "../../services";

const Header = () => {
  const [openDrawer, setDrawer]=useState(false);
  const {state, dispatch} = useContext(MainContext)
  // console.log(state)
  const handleDrawer=()=>{
    setDrawer(!openDrawer)
  }
  return (
    <Fragment>
        <div id="topData">
        <Container>
          <div className="center" style={{height:40}}>
          <div className="dataBox">
            <FcPhone style={{fontSize:24,marginRight:10}} />
            <Typography color="seagreen" variant="body1"><Link href="tel:310-995-4859">310-995-4859</Link></Typography>
            </div>   
            <span style={{flexGrow:1}}/>
            <Hidden mdDown> 
            <div className="dataBox">
            <MdLocationOn style={{fontSize:24,marginRight:10}} />
            <Typography color="seagreen" variant="body1">15116 Roxford St, Sylmar, CA 91342</Typography>
            </div>
            </Hidden>
          </div>
        </Container>
        </div>
   
    <header id="topHeader">
      <Container id="navContainer">
        <Hidden mdUp> 
        <FcMenu style={{fontSize:25}} onClick={handleDrawer}/>
        <div style={{flexGrow:1}}/>
        </Hidden>
        <Link href="/">
        <Image priority width={160} height={60} src="https://res.cloudinary.com/oasismanors/image/upload/v1685029880/Logo_hmwkcj.svg" alt="Oasis Manor"/>
        </Link>
        <div style={{flexGrow:1}}/>
        <Hidden mdDown>
        <ul>
            <li><Link href="/about"> <Typography color="primary" variant="body1">About us</Typography></Link></li>
            <li><Link href="/amenities"><Typography color="primary" variant="body1">Amenities</Typography></Link></li>
            <li><Link href="/"><Typography color="primary" variant="body1">Gallery</Typography></Link></li>
            <li><Link href="/"><Typography color="primary" variant="body1">Pricing</Typography></Link></li>
            <li><Link href="/contact"><Typography color="primary" variant="body1">Contact Us</Typography></Link></li>
            <li id="callBackBtn"><Link href="/#enquiry"><Typography variant="body2">Get a Call Back</Typography></Link></li>
        </ul> 
        </Hidden>
    
    {state?.isAuthenticated ?  <Link href="/dashboard"><Button color="secondary" startIcon={<Avatar alt={state.name}  src={authService.getLoggedInUser()?.userImage ?? "https://res.cloudinary.com/oasismanors/image/upload/v1687519053/user_myqgmv.png"}/>}>Dashboard</Button> </Link> :  <Link href="/login"> <Button startIcon={<FaUserCircle />}>Login</Button></Link>  }
    </Container>    
    </header>
    <Suspense fallback={<Loading />}>
    <SwipeableDrawer open={openDrawer} onClose={handleDrawer} onOpen={handleDrawer} variant="temporary" ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }}> 
      <MyDrawer handleDrawer={()=>handleDrawer()}/>
    </SwipeableDrawer>
    </Suspense>
    </Fragment>
  )
}


export default Header