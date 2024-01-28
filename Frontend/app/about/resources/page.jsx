"use client";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import "../../contact/contactStyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider } from "@mui/material";
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
      <Container className="sectionMargin">
        <br/>
        <Breadcrumbs separator="›" sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Resources for You
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
       

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
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://smartasset.com/taxes/the-dangers-of-diy-estate-planning">Do it Yourself or Use a Professional</Link> </li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.forbes.com/sites/christinefletcher/2019/03/15/5-estate-planning-strategies-for-singles/?sh=29b17f541794">Single Woman’s Guide</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.kiplinger.com/real-estate/real-estate-investing/602912/retirement-planning-dont-forget-about-investment-real">Don’t Forget Retirement Planning</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.wsj.com/articles/an-estate-plan-for-your-treasures-1414680743">A Plan for Your Treasures: Wall Street Journal</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.rosevilla.org/docs/19/0e3679b9d33650a2255602b95d933f4287538467/estate_planningcare_for_your_heirs_8_steps_to_get_started.pdf">Care for Your Heirs – 8 Steps to Getting Started</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.thyroid.org/donate/planned-gift/hypothyroidism-support-estate-planning/">8 Steps to Estate Planning</Link></li>
          </ul>
            </Grid>
            <Grid item xs={12}>
            <Divider />
            </Grid>
            <Grid item xs={12}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Resource papers and articles</Typography>
            <ul style={{listStyle:"none",marginTop:"20px"}}>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/5-tips-to-keep-your-brain-healthy">Ways to Improve Brain Health: Mayo Clinic</Link> </li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.health.harvard.edu/mind-and-mood/12-ways-to-keep-your-brain-young">Keeping Your Brain Young: 12 Steps – Harvard Medical</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.cnbc.com/2015/05/08/ord-to-grow-old-in-your-home.html">Staying in Your Home: The True Cost</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://information.matherinstitute.com/age-well-study-year-4">Mathers Institute: Life Plan Community – Age Well Study</Link></li>
            <li style={{color:"#00a2c2",textDecoration:"underline",fontSize:"24px"}}><Link target="_blank" href="https://www.matherinstitute.com/2022/06/27/how-senior-living-communities-can-foster-aging-in-place/">Mathers Institute: Study – Living Together Helps You Live Independently</Link></li>
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
            Please do not hesitate to call or <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/contact">Contact us.</Link> for any clarifications or to come by for a visit.
            </Typography> 
            <br/> <br/>
                </Grid>
        </Grid>
       </Container>
      <Enquiry/>
      <NewFooter/>
    </main>
  )
}

export default Resources
