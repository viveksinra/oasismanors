"use client";
import { useState,Suspense } from "react";
import Header from "../Components/Header/Header";
import "./lifestyle.css";
import { TopAbstract } from "../MyApp";
import { Container, Typography,Grid,  Breadcrumbs,CircularProgress, Divider } from "@mui/material";
import {Newsletter} from "../Components/Amenities/Amenities";
import {NewFooter} from "../Components/Footer/Footer";
import Link from "next/link";

function CreativeLiving() {
    const [creativeData] = useState([{title:"wellness",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.1_CAN_wellness-533x355.jpg",text:"Feel inspired through movement, nutrition, creativity and more to live richly each day. Options include yoga, swimming, meditation, cooking classes, and fitness classes."},{title:"culture",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.1_CAN_culture-533x355.jpg",text:"Connect with the richness of our world through stories, languages, travel talks and discussions about the vibrancy of our planet and our people. Participate in Spanish lessons, OneWorld Discussions, Choir, and book clubs."},{title:"arts",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.1_CAN_arts-533x355.jpg",text:"Express yourself through a breadth of creative endeavors that allow you to reconnect with passions or discover new ones. Opportunities include painting, sculpture, photography, and writing."},{title:"experience",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.1_CAN_experience-533x355.jpg",text:"We all have a bucket-list. Every month at OH is a new opportunity to try activities you have always wanted to experience, accompanied by your neighbors and friends. Experience NASCAR, go skydiving, ride a Ferris wheel."},{title:"academy",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.1_CAN_academy-533x355.jpg",text:"Craft your lifestyle. The resident-led Creative Living Academy is the most expansive, lifelong learning program in Southern California.  Enjoy dance lessons, lectures and TED Talks, live theater, and tours and excursions."}])
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="livingBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Creative Living
        </Typography>
        </Breadcrumbs>
        <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Discover Your Lifestyle</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2.4rem"}}>
        <strong>A new approach to active senior living in Los Angeles.</strong> At The Oasis Homes, our commitment to Creative Living ensures your life remains as vibrant as you are. Here, you can explore your passions or discover new ones with our robust array of events and outings, educational and artistic pursuits, and cultural and social opportunities.
        </Typography>
        
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"30px"}, marginTop:"60px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Bring out the best in you.</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2.4rem"}}>
        The Oasis Homes offers a beautiful setting, incomparable service, and superb amenities to support your <br/> physical, emotional, and intellectual needs, encouraging growth, self-expression, and enjoyment.
        </Typography>
        <img src="https://www.ecsforseniors.org/wp-content/uploads/2022/11/ECS005_Creative-Living-Logo_Aqua.svg" style={{width:"520px",marginTop:"30px"}} alt="CreativeLiving" />
        <Grid container spacing={2}>
        {creativeData.map((c,i)=><Grid item xs={12}>
            <Divider sx={{margin:"30px 0px"}}/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <img src={c?.img} className="creativeImg" alt={c?.title} />
                </Grid>
                <Grid item xs={12} md={9}>
               <div style={{display:"flex"}}> 
               <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"36px"},fontWeight:600, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Creative</Typography>  <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"36px"},fontWeight:100, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>{c.title}</Typography> 
                </div> 
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                {c?.text}
                 </Typography>
                </Grid>
            </Grid>
             </Grid>)}
        <Grid item xs={12}>
        <Divider sx={{margin:"30px 0px"}}/>
        </Grid>
        <Grid item xs={12}>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2.4rem"}}>
        Read <Link style={{color:"#00a2c2",fontWeight:600,textDecoration:"underline"}} href="/">testimonials</Link>  from those already enjoying the Creative Living lifestyle at The Oasis Homes.
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"30px", fontWeight:100, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Resident led, staff supported</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2.0rem"}}>
        The Academy draws on the insights and direction of a volunteer group of Oasis Homes resident advisors who assist in its development and oversight. Creative Living mindfully celebrates the talents and life experiences of those who live at The Oasis Homes Residents are encouraged to be facilitators and teachers.
        </Typography><br/>
            <Typography color="black" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem"}}> <br/>
            To learn more about creative living, or if you have any questions, please do not hesitate to call or <Link style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,color:"#00a2c2",fontSize:"1.2rem"}} href="/contact">Contact US</Link>
            </Typography>
        </Grid>
        </Grid>
      </Container>
      
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default CreativeLiving
