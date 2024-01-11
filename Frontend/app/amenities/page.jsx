"use client";
import { TopAbstract } from "../MyApp";
import { useState } from 'react';
import Header from "../Components/Header/Header";
import "./amenityStle.css";
import { Container, Typography,Grid,  Breadcrumbs, } from "@mui/material";
import {Newsletter} from "../Components/Amenities/Amenities";
import {NewFooter} from "../Components/Footer/Footer";
import Link from "next/link";

function AmenitiesPage() {
    const [amenities] = useState([{title:"Fitness Center",link:"/", img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/06/ECS_Amenities_fitness-455x330.jpg"},{title:"Pet Friendly",link:"/", img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/COV-Lorelie-Miller1_Gallery-533x356.jpg"},{title:"24-Hour Security",link:"/", img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/06/ECS_Amenities_security-455x330.jpg"},{title:"Courtyard for Spectacular Views",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/courtyard_sie00n.webp"},{title:"Swimming Pool With Heated Pool",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/swimmingPool_cwmuvr.webp"},{title:"Proper Diet & Nutrition",link:"/amenities/menu", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/properDiet_yjypj2.webp"},{title:"Golf Course Area",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1704099976/oasisApi/golf-oasis_qb7jgz.webp"},{title:"Regular Health Checkup",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/healthCheckUp_rpxyng.webp"},{title:"Yoga & Exercise Events",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/yoga_kj8yxf.webp"},{title:"All Private Bedrooms",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589806/oasisApi/bedroom_splw9e.webp"},{title:"Big Garden with Lord Buddha statue",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/stone-gautama-buddha_elxxg5.webp"},{title:"Online Activities Tracking",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703594840/oasisApi/image1_vo2crp.webp"}])
  
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div id="amenitiesHero" className="topBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontSize:"20px"}} color="text.primary">
         Amenities
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, marginTop:"30px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>The Lifestyle You Seek</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
          The Canterbury is a vibrant community where engaged, like-minded individuals enjoy a full range of exceptional amenities. These features and services are at the heart of our <Link href="/lifestyle" style={{color:"#00a2c2",fontWeight:500, textDecoration:"underline"}}>Creative Living</Link> culture, designed for lifelong intellectual, spiritual, and physical growth.
          </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography color="#00a2c2" align="center" gutterBottom sx={{fontSize:{xs:"18px",md:"30px"},fontWeight:500, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>“Everyone I know who doesn’t live here wants to move in.”</Typography>
          <Typography color="#00a2c2" align="center"  sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:500,fontSize:"1.3rem",lineHeight:"1.4rem"}}>
          ~ Pat W, Canterbury resident
        </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"}, marginTop:"50px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Resort-style living at The Canterbury</Typography>
          <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
          Our resort-style campus offers a fresh perspective on what retirement living in Los Angeles can be. Here, you have access to a wealth of choices each day, which reflect our commitment to enriching pursuits and keep you connected to your friends, family, and neighbors. It’s why we call ourselves a community.
        </Typography>
          </Grid>
        </Grid>
        <br/>  <br/>
        <Grid container spacing={4}>
        {amenities.map(a=>
            <Grid key={a.title} item xs={12} md={4}>
                <img src={a?.img}  style={{width: "100%",maxHeight: "250px",borderRadius: "10px",cursor:"pointer", backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundSize:"cover"}} alt={a?.title} />
                <Link href={a.link}><Typography style={{fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\"",fontWeight:600,fontSize:"16px",cursor:"pointer",}} color="#082952">{a.title}</Typography></Link>
            </Grid>)}
        </Grid>
       </Container>
       <br/>  <br/>  <br/>  <br/>
       <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Stay active, connected, and engage</Typography>
          <ul style={{listStyle:"none"}}>
            <li className="stayList"><Link style={{color:"#00a2c2",fontWeight:500, textDecoration:"underline"}} href="/dining">Dining </Link>– All meals are freshly prepared every day </li>
            <li className="stayList"> <strong>Game Room </strong>– Join in a lively game of Bridge or board game </li>
            <li className="stayList"> <strong>Pet-friendly </strong>–  The Canterbury welcomes well-behaved pets </li>
            <li className="stayList"><Link style={{color:"#00a2c2",fontWeight:500, textDecoration:"underline"}} href="/dining">Creative Living Academy </Link>– Classes, activities, and more to support life-long learning </li>
          </ul>
          </Grid>
          <Grid item xs={12}>
          <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"}, marginTop:"60px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Services to help you keep your edge</Typography>
          <ul style={{listStyle:"none"}}>
            <li className="stayList">Weekly housekeeping services </li>
            <li className="stayList"> Laundry lounges</li>
            <li className="stayList">Scheduled transportation </li>
            <li className="stayList">Complete indoor/outdoor maintenance and groundskeeping</li>
            <li className="stayList">Community-wide WIFI</li>
            <li className="stayList">24-hour security for building and grounds</li>
          </ul>
          </Grid>
          <Grid item xs={12}>
          <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"}, marginTop:"60px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Personal care and support</Typography>
          <ul style={{listStyle:"none"}}>
            <li className="stayList">24-hour licensed nurses on duty. </li>
            <li className="stayList"><Link style={{color:"#00a2c2",fontWeight:500, textDecoration:"underline"}} href="/dining">CareOne  </Link>– Our innovative approach to personalized, à la carte care services that comes to you in the comfort of your Canterbury home, providing a seamless continuum of care </li>
            <li className="stayList">The security of having access to a specialized and collaborative health plan for now and in the future</li>
          </ul>
          </Grid>
          <Grid item xs={12}>
          <Typography color="black" sx={{fontFamily:"acumin-pro,\"sans-serif\"", marginTop:"30px",fontWeight:200,fontSize:"1.4rem"}}> <br/>
            To learn more about creative living, or if you have any questions, please do not hesitate to call or <Link style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,color:"#00a2c2", fontSize:"1.4rem"}} href="/contact">Contact US</Link>
            </Typography>
            </Grid>
         
        </Grid>
       </Container>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default AmenitiesPage

