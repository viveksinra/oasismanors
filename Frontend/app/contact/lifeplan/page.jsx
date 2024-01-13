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
            <Typography color="#082952" sx={{fontSize:{xs:"18px",md:"26px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Create the future you want</Typography> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",lineHeight:"1.8rem"}}>
            Getting the care you need, when you need it, is one of the foundational benefits of ECS Life Plan communities, but that is just part of the ECS story. Our outlook on what an active senior lifestyle can be is something we call <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/about">Creative Living. </Link> It means:
            </Typography> 
            <ul style={{listStyle:"none",marginTop:"20px"}}>
            <li className="stayList">A belief in continuous learning. </li>
            <li className="stayList">Regular opportunities to try something new. </li>
            <li className="stayList">Events and experiences that open both the mind and the heart. </li>
            <li className="stayList">A lifestyle that helps you maintain and expand your social connections.</li>
          </ul>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{margin:"30px 0px"}}/>
            <Typography color="#082952" sx={{fontSize:{xs:"18px",md:"30px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>What are my care options?</Typography> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",lineHeight:"1.8rem"}}>
            An important part of the ECS promise is ensuring all residents have the freedom and flexibility to manage their personal care needs. At ECS, choice is not a luxury, it is part of daily life, ensuring you receive the care you want, when you want it.
            </Typography> 
            <Divider sx={{margin:"30px 0px"}}/>
            </Grid>

            <Grid item xs={12} md={4}>
              <img style={{maxWidth:"100%"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/7.2_CA_photo-6-533x355.jpg" alt="Oasis-4" />
            </Grid>
            <Grid item xs={12} md={8}>
            <Typography color="#082952" sx={{fontSize:{xs:"18px",md:"26px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Create the future you want</Typography> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",lineHeight:"1.8rem"}}>
            We all need a little help now and then and ECS communities offer a variety of <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/about"> Choice Custom Care </Link> options to fit your needs and lifestyle.
            </Typography> 
            <ul style={{listStyle:"none",marginTop:"20px"}}>
            <li className="stayList">Independent Living – Perfect for those needing only occasional assistance. </li>
            <li className="stayList">Assisted Living – Best suited for those seeking additional care and support. </li>
            <li className="stayList">Recovery Care – Care for short-term rehabilitation. </li>
            <li className="stayList">Memory Care – Created specifically for those dealing with memory loss challenges.</li>
          </ul>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{margin:"30px 0px"}}/>
                </Grid>
                <Grid item xs={12} md={4}>
                <img style={{maxWidth:"100%"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/7.2_CA_photo-7-533x355.jpg" alt="Oasis-5" />
                </Grid>
                <Grid item xs={12} md={8}>
                <Typography color="#082952" sx={{fontSize:{xs:"18px",md:"26px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Care as individual as you are</Typography> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",lineHeight:"1.8rem"}}>
            Within each option, our CareOne program allows you to customize the level and frequency of care you receive. From intermittent, task-based assistance, either daily or throughout the week, to more detailed, personalized care on a regular basis including a care companion, the choice is yours.
            </Typography> 
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",lineHeight:"1.8rem"}}>
            To learn more about ECS care options, please visit <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/contact/starting">Care</Link>.
            </Typography> 
                </Grid>

                <Grid item xs={12}>
                <Divider sx={{margin:"30px 0px"}}/>
                </Grid>

                <Grid item xs={12}>
            <Typography color="#082952" sx={{fontSize:{xs:"18px",md:"26px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Here to help.</Typography> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"20px",lineHeight:"1.8rem"}}>
            Choosing the right community is an important decision. If you have any questions, would like more information, clarification on a specific topic, or even arrange to drop by for a visit, please do not hesitate to call or <Link style={{color:"#00a2c2",fontWeight:500,textDecoration:"underline"}} href="/contact">contact us.</Link> 
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

export default Lifeplan
