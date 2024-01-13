"use client";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import "../contactStyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider } from "@mui/material";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import Enquiry from "../../Components/Enquiry/Enquiry";

import Link from "next/link";


function Lifeplan() {
    const [startData] = useState([{title:"You have questions, we have answers.",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/Lifestyle_MonteCedro_DogWalk_4859_150_BL-533x355.jpg",list:["What is a Life Plan community?","What are the Benefits?","What are my Care Options?"],text:"For information on the Benefits and Care Options, visit",linkText:"What is a Life Plan Community?.",link:"/"},{title:"What other questions should I be asking?",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/Lifestyle_MonteCedro_LivingRoom_2732H_300_BL-533x355.jpg",list:["Is the organization for profit or nonprofit?","Are the business practices regularly reviewed?","Are they a certified Continuing Care Retirement Community (CCRC)?","Are they active in the wider community?","How do they support employees?"],text:"For an in-depth perspective on financial considerations, visit",linkText:"Helpful Resources.",link:"/"}])
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="lifeplanBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Lifeplan Communities
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
            <Grid item xs={12} >
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Care, Lifestyle & Peace of Mind</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{display:"flex",alignItems:"center"}}>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                OH Life Plan communities (also known as continuing care retirement communities or CCRC’s) offer exceptional Independent Living residences along with flexible care options to meet your needs should they ever change. Choosing an OH Life Plan community means having a plan, for now and for the future, so you do not have to worry about moving again.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
             <img style={{maxWidth:"100%"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/photo-crop-3-1024x683.jpg" alt="Oasis-Lady" />
            </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={4}>
            <Grid item xs={12}>
            <Divider />
            </Grid>
            <Grid item xs={12} md={3}>
            <img src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/Lifestyle_Canterbury_Wine_0766-533x355.jpg" className="creativeImg" alt="Oasis1" />
            </Grid>
            <Grid item xs={12} md={9}>
            <Typography color="#082952" sx={{fontSize:{xs:"24px",md:"30px"},fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>An enviable lifestyle</Typography>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
            OH communities are lifestyle environments that offer a proactive, holistic approach to your health, wellness, and wellbeing, delivered by trained, caring professionals. Our extensive <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/contact">Creative Living</Link> programming means you enjoy an array of arts and cultural classes and events, fitness and activities for all levels and interests, and exceptional amenities. Here, you have freedom to be as active or as easy going as you want.
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Divider />
            </Grid>
            <Grid item xs={12} md={3}>
            <img src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/photo-call-home-533x355.jpg" className="creativeImg" alt="Oasis2" />
            </Grid>
            <Grid item xs={12} md={9}>
            <Typography color="#082952" sx={{fontSize:{xs:"24px",md:"30px"},fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>A place to call home</Typography>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
            Life at OH communities is defined by the people who call them home. You can choose from a variety of spacious floor plans, many of which can be customized to your individual needs. We are confident you will feel proud to live here, surrounded by your cherished memories and possessions. From hosting family gatherings, sharing a cup of tea with a neighbor, or inviting friends out for lunch in one of our beautiful restaurant-style <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/contact">Dining</Link> rooms, your life and lifestyle are yours to choose.
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Divider />
            </Grid>
            <Grid item xs={12} md={3}>
            <img src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/photo-secure-future-533x355.jpg" className="creativeImg" alt="Oasis2" />
            </Grid>
            <Grid item xs={12} md={9}>
            <Typography color="#082952" sx={{fontSize:{xs:"24px",md:"30px"},fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>A secure future</Typography>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
            Simply put, OH Life Plan communities allow you to age in place, without the worry of having to move again. The Life Plan structure also provides a way for you to secure and preserve your legacy, for you and your loved ones. Our best-in-class Fitch credit rating and overall <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/contact">Financial Strength</Link>, and 100 years of experience are just some of the reasons so many residents and their families have chosen an OH community.
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <Divider />
            </Grid>
        </Grid>
      </Container>
      <br/> <br/>
      <Container>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
       <strong>Confidence is everything.</strong>  Planning for your needs, now and in the future, provides peace of mind knowing your safety, security, and quality of life are assured.
        </Typography> <br/>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:500,fontSize:"20px",lineHeight:"1.8rem"}}>
            OH Life Plan communities are for adults aged 62 and older.
        </Typography> <br/>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
        To learn more, visit <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/about">Our Communities.</Link>
        </Typography> 
      </Container>
      <br/> <br/>
       <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
            <Typography color="#082952" sx={{fontSize:{xs:"24px",md:"34px"},marginTop:"40px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>What are the benefits?</Typography> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"20px",lineHeight:"1.8rem"}}>
                As individuals, we all have physical, emotional, and spiritual needs and our sense of self is directly tied to how well we fulfill them. OH communities are lifestyle environments that offer a proactive, holistic approach to your health, wellness, and wellbeing.
            </Typography> 
            </Grid>
            <Grid item xs={12} md={3}/>
            <Grid item xs={12}>
                <Divider sx={{margin:"20px 0px"}}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <img src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/photo-create-533x355.jpg" className="creativeImg" alt="Oasis3" />
            </Grid>
            <Grid item xs={12} md={8}>
            <Typography color="#082952" sx={{fontSize:{xs:"24px",md:"30px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>What are the benefits?</Typography> <br/>
                
            </Grid>
        </Grid>
      
      
       </Container>
      <Enquiry/>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Lifeplan
