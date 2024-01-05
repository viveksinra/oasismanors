"use client";
import Header from "../Components/Header/Header"
import "./aboutStyle.css";
import { TopAbstract } from "../MyApp";
import { Container, Typography,Grid,List,ListItem,ListItemText,ListItemIcon, Divider,Fab } from "@mui/material";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill,PiNumberCircleThreeFill,PiNumberCircleFourFill,PiCloudArrowUpBold   } from "react-icons/pi";
// import {FcFinePrint } from "react-icons/fc";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import Link from "next/link";
function About() {
  return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div id="heroAbout">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Typography color="primary" gutterBottom align="center" sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: 'Courgette'}}>Discover Your Lifestyle</Typography>
        <Typography variant="subtitle1" >
        Experience refined living at 15116 Roxford St, Sylmar, CA 91342, where carefree, low-maintenance living and a focus on well-being create a lifestyle as vibrant as your own. Embrace the freedom to pursue your passions and explore new interests, surrounded by like-minded neighbors who share your vision of independent senior living in CALIFORNIA.
        {/*  As the only Life Pl an community in the Sylmar, CA, The Oasis Manors provides an active campus-like experience with a true neighborhood feel. Here, residents enjoy all the comforts of home, along with the security and confidence of having a broad spectrum of care and services available should the need arise. */}
        </Typography>
        <br/> <br/>
       <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="center" sx={{flexDirection:"column"}}>
        <Typography color="#082952" gutterBottom align="center" sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: 'Courgette'}}>Resort-style living</Typography>
         <Typography variant="subtitle1">Nestled on a picturesque bluff amidst the rolling hills of Sylmar, CA, The Oasis Manors offers the perfect blend of an active or relaxed lifestyle, providing the confidence and peace of mind that comes from choosing a Life Plan community to call your own. </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="center" sx={{flexDirection:"column"}}>
        <Typography color="#00a2c2" gutterBottom align="center" sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: 'Courgette'}}>Our Communities List</Typography>
        <List dense sx={{bgcolor: 'background.paper'}}>
        <ListItem>
        <ListItemIcon>
          <PiNumberCircleOneFill style={{fontSize:"36px"}}/>
        </ListItemIcon>
        <ListItemText primary="A Siwa Oasis" primaryTypographyProps={{fontSize:"20px",color:"teal",fontFamily: 'Courgette' }} secondary="15112 Roxford St. Sylmar, CA 91342" />
        </ListItem>
        <ListItem>
        <ListItemIcon>
          <PiNumberCircleTwoFill style={{fontSize:"36px"}} />
        </ListItemIcon>
        <ListItemText primary="A Mara Oasis" primaryTypographyProps={{fontSize:"20px",color:"teal",fontFamily: 'Courgette' }} secondary="15114 Roxford St. Sylmar, CA 91342" />
        </ListItem>
        <ListItem>
        <ListItemIcon>
          <PiNumberCircleThreeFill style={{fontSize:"36px"}} />
        </ListItemIcon>
        <ListItemText primary="A Timia Oasis" primaryTypographyProps={{fontSize:"20px",color:"teal",fontFamily: 'Courgette' }} secondary="15116 Roxford St. Sylmar, CA 91342" />
        </ListItem>
        <ListItem>
        <ListItemIcon>
          <PiNumberCircleFourFill  style={{fontSize:"36px"}} />
        </ListItemIcon>
        <ListItemText primary="An Ubari Oasis" primaryTypographyProps={{fontSize:"20px",color:"teal",fontFamily: 'Courgette' }} secondary="15116 (½) Roxford St, Sylmar, CA 91342" />
        </ListItem>
        </List>
        </Grid>
       </Grid>

       <br/> <br/>
       <Grid container spacing={2}>
        <Grid item xs={12}><Divider/></Grid>
        <Grid item xs={12} md={6} className="center">
          <img src="https://res.cloudinary.com/oasismanors/image/upload/v1704448863/1.1_CAN_photo-533x355_pm26fh.avif" alt="Oasis-Aunty" style={{borderRadius:"20px",width:"400px"}}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{fontFamily: 'Courgette',color:"#082952",fontSize:{xs:"20px",md:"36px"}}}>Choice, freedom, and flexibility</Typography>
          <Typography variant="subtitle1">The Oasis Manors difference can be seen in so many ways.</Typography><br/>
          <ul style={{ listStyle:"none",marginLeft:"10px"}}>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography variant="subtitle1">Our beautiful, spacious homes and Floor Plans</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography variant="subtitle1">A continuum of care with Choice Custom Care</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography variant="subtitle1">An array of services and Amenities</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography variant="subtitle1">An unmatched lifestyle with Creative Living</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography variant="subtitle1">A commitment to our Nonprofit Promise</Typography></li>
          </ul>
        </Grid>
        <Grid item xs={12}><Divider/></Grid>
        </Grid>
        <br/> <br/>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" sx={{fontFamily: 'Courgette',color:"#082952",fontSize:{xs:"20px",md:"36px"}}}>Oasis Manors Floor Plans</Typography>      
          </Grid>
          <Grid item xs={12} md={3}>
            <Link href="https://res.cloudinary.com/oasismanor/image/upload/v1704454163/oasis%20Web%20asset/hb6qekjlvjhuvayl3bvt.pdf" target="_blank">
              <div className="center" style={{flexDirection:"column"}}>
              <img src="https://res.cloudinary.com/oasismanors/image/upload/v1704450979/15112_q7s3v3.webp" style={{width:"100%"}} alt="15112" />     
          <Typography variant="h6" sx={{fontFamily: 'Courgette',color:"teal"}}>A Siwa Oasis</Typography>
          <ul style={{ listStyle:"none",marginLeft:"10px"}}>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography>5 Bedroom</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography>5 Bathroom</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography>1 Common Bathroom</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography>1 Dinning Room</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography>1 Living Room</Typography></li>
            <li style={{listStyleImage: "url('https://res.cloudinary.com/qualifier/image/upload/v1585479266/Default/check-mark_zbl05t.svg')"}}><Typography>1 Kitchen</Typography></li>
          </ul>
          <Fab variant="extended" sx={{marginTop:"10px"}} size="small" color="primary">
          <PiCloudArrowUpBold style={{marginRight:"8px",fontSize:"16px"}} />
          View Floor Plan
          </Fab>
              </div>
            </Link>
          
          </Grid>
          <Grid item xs={12} md={3}>
          <img src="https://res.cloudinary.com/oasismanors/image/upload/v1704450979/15112_q7s3v3.webp" style={{width:"100%"}} alt="15112" />     
          <Typography variant="h6" align="center" sx={{fontFamily: 'Courgette',color:"teal"}}>A Mara Oasis</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
          <img src="https://res.cloudinary.com/oasismanors/image/upload/v1704450979/15112_q7s3v3.webp" style={{width:"100%"}} alt="15112" />     
            <Typography variant="h6" align="center" sx={{fontFamily: 'Courgette',color:"teal"}}>A Timia Oasis</Typography>
          </Grid>
        <Grid item xs={12} md={3}>
        <img src="https://res.cloudinary.com/oasismanors/image/upload/v1704450979/15112_q7s3v3.webp" style={{width:"100%"}} alt="15112" />     
        <Typography variant="h6" align="center" sx={{fontFamily: 'Courgette',color:"teal"}}>An Ubari Oasis</Typography>
        </Grid>
        </Grid>
      </Container>
  
    
      <Footer/>
    </main>
  )
}

export default About
