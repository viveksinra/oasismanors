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


function Resources() {
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="resourceBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Helpful Resources
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
            <Grid item xs={12} >
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>All Things Considered</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{display:"flex",alignItems:"center"}}>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                ECS has been providing exceptional nonprofit, active senior living communities and services in Southern California since 1923. Our experience confirms that choosing a Life Plan community as your next home is really about securing your future. <br/>
                To support your decision making, below are curated links to informative articles, reports, and commentary by leading publications and financial and health experts.
                <br/>
                As you plan your next step, please take the time you need to do your due diligence.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
             <img style={{maxWidth:"100%"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/7.3_CA_photo-1024x683.jpg" alt="Oasis-Lady" />
            </Grid>
            <Grid item xs={12}>
            <Typography color="#00a2c2" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>“Planning is the better part of success.”</Typography>
            <Typography color="#00a2c2" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            — An anonymous wise person
                </Typography>
            </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Estate planning</Typography>
            <ul style={{listStyle:"none",marginTop:"20px"}}>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Do it Yourself or Use a Professional</Link> </li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Single Woman’s Guide</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Don’t Forget Retirement Planning</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">A Plan for Your Treasures: Wall Street Journal</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Care for Your Heirs – 8 Steps to Getting Started</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">8 Steps to Estate Planning</Link></li>
          </ul>
            </Grid>
            <Grid item xs={12}>
            <Divider />
            </Grid>
            <Grid item xs={12}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Resource papers and articles</Typography>
            <ul style={{listStyle:"none",marginTop:"20px"}}>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Ways to Improve Brain Health: Mayo Clinic</Link> </li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Keeping Your Brain Young: 12 Steps – Harvard Medical</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Staying in Your Home: The True Cost</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Mathers Institute: Life Plan Community – Age Well Study</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link href="/">Mathers Institute: Study – Living Together Helps You Live Independently</Link></li>
          </ul>
            </Grid>
        </Grid>
      </Container>
      <br/> <br/>
     
       <Container>
        <Grid container spacing={2}>
           

                <Grid item xs={12}>
                <Divider sx={{margin:"30px 0px"}}/>
                </Grid>

                <Grid item xs={12}>
            <Typography color="#082952" sx={{fontSize:{xs:"18px",md:"26px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>If you have any questions ?</Typography> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",lineHeight:"1.8rem"}}>
           We would like more information, clarification on a specific topic, or would like to come by for a visit, please do not hesitate to call or <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/contact">contact us.</Link> 
            </Typography> 
            <br/> <br/>
                </Grid>
        </Grid>
      
      
       </Container>
      <Enquiry/>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Resources
