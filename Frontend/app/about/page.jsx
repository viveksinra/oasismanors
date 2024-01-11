"use client";
import Header from "../Components/Header/Header"
import "./aboutStyle.css";
import { TopAbstract } from "../MyApp";
import { Container, Typography,Grid, Divider,Fab,Breadcrumbs  } from "@mui/material";
// import {FcFinePrint } from "react-icons/fc";
import {Newsletter} from "../Components/Amenities/Amenities";
import {NewFooter} from "../Components/Footer/Footer";
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
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontSize:"20px"}} color="text.primary">
        About
        </Typography>
        </Breadcrumbs>
        <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>A Community to Call Home</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.2rem"}}>
        As the only Life Plan community in the South Bay, The Canterbury provides an active campus-like experience with a true neighborhood feel. Here, residents enjoy all the comforts of home, along with the security and confidence of having a broad spectrum of care and services available should the need arise. Exceptional Rancho Palos Verdes senior living has never looked so good.
        </Typography>
        <br/> <br/>
       <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"36px"}, fontFamily: 'AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"'}}>Resort-style living</Typography>
         <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100, fontSize:"1.2rem"}}>The Canterbury is a nonprofit Life Plan community created specifically for active seniors aged 62+. Our resort-style experience and distinctive approach to lifelong learning reflects our commitment to enriching pursuits, and keeps you connected to your friends, family, and neighbors. Our vibrant community has multiple dining venues, panoramic views, sparkling heated pool, beauty salon and barbershop, fitness center, art studio, and so much more.</Typography>
        </Grid>
        <Grid item xs={12} md={6} className="center" sx={{flexDirection:"column"}}>
        <Typography color="#00a2c2" sx={{paddingBottom:"2rem",fontFamily:"Adequate,Helvetica Neue,Helvetica,\"sans-serif\"",fontSize:"2rem"}}>“This is the place for me!”</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"1.5rem"}}>~ Kathleen D, Canterbury resident</Typography>
          </Grid>
        <Grid item xs={12} md={9}>
        <Typography color="#082952" sx={{paddingBottom:"2rem",marginTop:"100px", fontFamily:"AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"",fontSize:"2rem"}}>Craft the life you want</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"", fontWeight:100, fontSize:"1.2rem"}}>An integral part of life at The Canterbury is something we call <Link style={{fontWeight:600,color:"#00a2c2",textDecoration:"underline",overflowWrap:"break-word"}} href="/">Creative Living</Link> , an innovative approach to active lifestyle. It drives the culture of our community, providing daily opportunities for quality, purpose, and sense of fulfillment through meaningful engagement, activities, and continuous learning opportunities.</Typography>
        </Grid>
        <Grid item xs={12} md={3}/>
       </Grid>
       
       
       <br/> <br/>
       <Grid container spacing={2}>
        <Grid item xs={12}><Divider sx={{marginBottom:"30px"}}/></Grid>
        <Grid item xs={12} md={6} className="center">
          <img src="https://res.cloudinary.com/oasismanors/image/upload/v1704448863/1.1_CAN_photo-533x355_pm26fh.avif" alt="Oasis-Aunty" style={{borderRadius:"20px",width:"500px"}}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom sx={{fontFamily: 'AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"',color:"#082952",fontSize:{xs:"20px",md:"30px"}}}>Choice, freedom, and flexibility</Typography>
          <Typography color="#333" sx={{fontSize:"1.2rem",fontFamily: "acumin-pro, \"sans-serif\""}}>The Oasis Manors difference can be seen in so many ways.</Typography><br/>
          <ul style={{ listStyle:"none",marginLeft:"10px"}}>
            <li className="ChoiceList"><Typography variant="subtitle1">Our beautiful, spacious homes and Floor Plans</Typography></li>
            <li className="ChoiceList"><Typography variant="subtitle1">A continuum of care with <Link href="/">Choice Custom Care</Link> </Typography></li>
            <li className="ChoiceList"><Typography variant="subtitle1">An array of services and <Link href="/amenities">Amenities</Link></Typography></li>
            <li className="ChoiceList"><Typography variant="subtitle1">An unmatched lifestyle with <Link href="/">Creative Living</Link></Typography></li>
            <li className="ChoiceList"><Typography variant="subtitle1">A commitment to our Nonprofit Promise</Typography></li>
          </ul>
        </Grid>
        <Grid item xs={12}><Divider sx={{marginTop:"30px"}}/></Grid>
        </Grid>
        <br/> <br/>
        <Grid container>
          <Grid item xs={12} md={9}>
          <br/>
          <Typography gutterBottom sx={{fontFamily: 'AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"',color:"#082952",fontSize:{xs:"20px",md:"30px"}}}>You have questions, we have answers.</Typography>
          <Typography gutterBottom sx={{fontFamily: "acumin-pro, \"sans-serif\"",color:"#333",fontWeight:"100", fontSize:{xs:"20px",md:"20px"}}}>Everyone has different needs. To learn more about The Canterbury senior living in Rancho Palos Verdes, how it may be right for you or a loved one, or to arrange for a visit, please do not hesitate to <Link style={{color:"#00a2c2",fontWeight:500}} href="/contact">Contact Us.</Link></Typography>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default About
