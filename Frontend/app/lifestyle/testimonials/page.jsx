"use client";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import "../lifestyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider } from "@mui/material";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import Link from "next/link";

function Testimonials() {
    const [testimonials] = useState([{text:"The staff is made up of individuals who are warm, friendly, helpful, understanding, and a pleasure to be near.",by:"Resident"},{text:"Our Activities Director really keeps us on the go with interesting places to visit, tours, and luncheons.",by:"Resident"},{text:"I enjoy dining with different people every night. It is mentally stimulating and a good way to become friends with many residents.",by:"Resident"},{text:"Exercise classes are at different levels and our brain stimulating computer (DAKIM) challenges, as well as challenging activities keep us sharp",by:"Resident"},{text:"The feeling of belonging to another family. The staff and employees can’t seem to do enough to make us all content.",by:"Resident"},{text:"The painting classes and the ceramics classes keep me satisfied. These are one of the reasons I live here. I love them!",by:"Resident"},{text:"The compassion, care, and capability of Management, particularly our Executive Director, are outstanding.",by:"Resident"},{text:"The view from this property is gorgeous, the air is clean, and the breeze off the ocean is refreshing!",by:"Resident"},{text:"This is a note of appreciation to all of you who come here every day to take care of us. Many thanks!",by:"Resident"},{text:"Thank you to the entire staff of The Oasis Homes for all your efforts and care for our dad and all the residents. It gives us peace of mind to know that you are all there for him.",by:"Resident"},{text:"Every one of the staff have been superb and we appreciate you so much!",by:"Odette & Art S."},{text:"From the concern and care that all your employees provide to the residence regarding their comfort and safety to the small things they do that are so good for morale. I just want to say well done and thank you so much.",by:"Libby B."},{text:"We appreciate all that your staff are doing to keep all the residents safe during this pandemic. My brothers and I speak with my parents, and they are very pleased with the meal delivery. You know my parents are foodies",by:"Diana N."},{text:"Thank you all for doing such a terrific job to see that we stay well. Bless you all.",by:"Joan B."},{text:"I am so grateful for your loving care and creativity.",by:"Lenny C."},{text:"Thank you so much for keeping our seniors and community safe.",by:"Tim & Heather B."}])
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="testimonialsBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" style={{fontFamily:"acumin-pro,\"sans-serif\""}} color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Testimonials
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"46px"},lineHeight:"60px", marginTop:"30px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Why The Oasis?</Typography>
            <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            <strong>Our residents say it best. </strong>We appreciate that making a move to a continuing care retirement community is a major decision. Here are some comments from a few who were once where you are; and we hope you will be where they are soon.
            </Typography> <br/> 
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <img style={{maxWidth:"200px"}} src="https://www.ecsforseniors.org/wp-content/uploads/2023/02/CAN-Best-of-Southland-SouthBay-region_emblem-1.jpeg" alt="Logo1" />
                <img style={{maxWidth:"200px"}} src="https://www.ecsforseniors.org/wp-content/uploads/2022/06/ECS_CAN-Award.png" alt="Logo1" />
                <br/>
            </div>
            <br/> <br/> 
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        1st Place Winner many years in a row for Best Active Adult Living Community in the Daily Breeze & The Beach Reporter Readers’  Choice Awards
        </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="center">
            <video style={{width:"100%"}} controls autoPlay poster="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/05/ECS_Canterbury-testimonials_hero-683x349.jpg" src="https://ecsforseniors.org/wp-content/uploads/2021/05/MC-Testimonials-Blurred.mp4" preload="auto">
            </video>
            </Grid>
        </Grid>
        <br/> <br/> 

        <Grid container spacing={2}>
        {testimonials.map((c,i)=><Grid item xs={12}>
            <Divider sx={{margin:"30px 0px"}}/>
            <Grid container>
                <Grid item xs={12}>
                <Typography color="#00a2c2" gutterBottom sx={{fontSize:{xs:"14px",md:"20px"},fontWeight:400, fontFamily:"acumin-pro,\"sans-serif\""}}>{c.text}</Typography> 
                <br/>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                {`–${c?.by}`}
                 </Typography>
                </Grid>
            </Grid>
             </Grid>)}
        <Grid item xs={12}>
        <Divider sx={{margin:"30px 0px"}}/>
        </Grid>
        </Grid>
      </Container>
      
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Testimonials
