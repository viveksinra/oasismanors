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


function GettingStarted() {
    const [startData] = useState([{title:"You have questions, we have answers.",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/Lifestyle_MonteCedro_DogWalk_4859_150_BL-533x355.jpg",list:["What is a Life Plan community?","What are the Benefits?","What are my Care Options?"],text:"For information on the Benefits and Care Options, visit",linkText:"What is a Life Plan Community?.",link:"/"},{title:"What other questions should I be asking?",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/Lifestyle_MonteCedro_LivingRoom_2732H_300_BL-533x355.jpg",list:["Is the organization for profit or nonprofit?","Are the business practices regularly reviewed?","Are they a certified Continuing Care Retirement Community (CCRC)?","Are they active in the wider community?","How do they support employees?"],text:"For an in-depth perspective on financial considerations, visit",linkText:"Helpful Resources.",link:"/"}])
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="startedBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Getting Started
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
                <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>The Choice Is Yours</Typography>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                The decision to move is never easy. Fortunately, there are a range of excellent options for seniors wanting to continue living a life full of possibility.
                </Typography>
                <br/>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                This guide walks you through important practical, lifestyle, and financial considerations when choosing a Life Plan community (also known as a continuing care retirement community, or CCRC).
                </Typography>
                <br/>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                We have strived to ensure the information you find here is clear and straightforward.
            </Typography>
            </Grid>
            <Grid item xs={12} md={3}/>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={2}>
            {startData.map((s,i)=><Grid item key={i} xs={12}>
                <Divider sx={{margin:"30px 0px"}}/>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                <img src={s.img} alt={s.title} style={{maxWidth:"100%"}} />    
                </Grid>
                <Grid item xs={8}>
                <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"14px",md:"26px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>{s.title}</Typography>
                    <ul style={{listStyle:"none",marginTop:"10px",marginLeft:"30px"}}>
                        {s.list && s.list.map((l,j)=> <li key={j} className="choiceList">{l}</li>)}
                    </ul>
                    <br/>
                    <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                    {s.text} <Link href={s.link} style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}}>{s.linkText}</Link>
                    </Typography>
                </Grid>
            </Grid> 
            </Grid>)}
            <Grid item xs={12}>
            <Divider sx={{margin:"30px 0px"}}/>
            </Grid>
            <Grid item xs={12} md={9}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Committed to your needs.</Typography>
            <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
            Choosing the right community is an important decision. If you have any questions, would like more information, clarification on a specific topic, or even arrange to drop by for a visit, please do not hesitate to call or <Link style={{color:"#00a2c2",fontWeight:500}} href="/contact">Contact Us.</Link>
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}/>
        </Grid>
      </Container>
      <br/> <br/>
      <Enquiry/>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default GettingStarted
