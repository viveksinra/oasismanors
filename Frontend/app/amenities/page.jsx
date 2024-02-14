"use client";
import { TopAbstract } from "../MyApp";
import { useState } from 'react';
import Header from "../Components/Header/Header";
import "./amenityStle.css";
import { Container, Typography,Grid,  Breadcrumbs, } from "@mui/material";
import Enquiry from "../Components/Enquiry/Enquiry";
import {NewFooter} from "../Components/Footer/Footer";
import Link from "next/link";

function AmenitiesPage() {
    // const [amenities] = useState([{title:"Fitness Center",link:"/", img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/06/ECS_Amenities_fitness-455x330.jpg"},{title:"Pet Friendly",link:"/", img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/COV-Lorelie-Miller1_Gallery-533x356.jpg"},{title:"Courtyard for Spectacular Views",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/courtyard_sie00n.webp"},{title:"Swimming Pool With Heated Pool",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/swimmingPool_cwmuvr.webp"},{title:"Proper Diet & Nutrition",link:"/amenities/menu", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/properDiet_yjypj2.webp"},{title:"Golf Course Area",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1704099976/oasisApi/golf-oasis_qb7jgz.webp"},{title:"Regular Health Checkup",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/healthCheckUp_rpxyng.webp"},{title:"Yoga & Exercise Events",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/yoga_kj8yxf.webp"},{title:"Big Garden with Lord Buddha statue",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/stone-gautama-buddha_elxxg5.webp"},])
    const [amenities] = useState([{category:"Your Safety",items:[{title:"Cushioned Outdoor Floors - that help absorb pratfalls",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1705513450/rubber-gym-flooring_eha3up.webp"},{title:"24-hour security for building and grounds",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1707581108/security-guard_rkdtq5.jpg"},{title:"Full backup generator for 24x7 uptime of your equipment",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1705514113/generator_dkbnwe.webp"}]},{category:"Your Home",items:[{title:"Choice of Private Bedrooms and Bathrooms",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589806/oasisApi/bedroom_splw9e.webp"},{title:"Garden Courtyard for the joy of nature",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1707579232/CourtyardOasisHome_n2kjyt.jpg"},{title:"Indoor/outdoor maintenance and management",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1705515613/chambermaid_mqzcoz.webp"}]},{category:"Your Joy",items:[{title:"Heated Pool, sparkling spa and steam sauna",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1707580010/jpeg-optimizer_heatedPool_q3ttkw.jpg"},{title:"Putting Green",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/yoga_kj8yxf.webp"},{title:"Courtyard Game Room",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1707581766/budha_taqdfx.jpg"}]},{category:"Your Lifestyle Choices",items:[{title:"Bring your friendly pet – we love them!",link:"/",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/COV-Lorelie-Miller1_Gallery-533x356.jpg"},{title:"Personalized Meals from our in-house kitchen",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/properDiet_yjypj2.webp"},{title:"Personalized web portal for you and your loved ones to interact",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1703594840/oasisApi/image1_vo2crp.webp"}]},{category:"Your Concierge Services",items:[{title:"Housekeeping and laundry services",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1705515613/chambermaid_mqzcoz.webp"},{title:"Scheduled transportation to your choice destinations",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1705516060/people-helping-old-neighbor_l9zfa9.webp"},{title:"Community-wide WiFi",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1705516509/technology_rrdltz.webp"}]}])
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
    
        <br/>  <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"36px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Let Joy into your Life</Typography>

        <Grid container spacing={2}>
        {amenities.map((a,i)=>
            <Grid key={i} item xs={12}>
          <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"}, marginTop:"30px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>{a.category}</Typography>
                <Grid container spacing={4}>
                  {a.items.map((c,j)=><Grid key={j} item xs={12} md={4}>
                     <img src={c?.img}  style={{width: "100%",maxHeight: "250px",borderRadius: "10px",cursor:"pointer", backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundSize:"cover"}} alt={c?.title} />
                     <Link href={c.link}><Typography style={{fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\"",fontWeight:500,fontSize:"14px",cursor:"pointer",}} color="#082952">{c.title}</Typography></Link>
                     </Grid>)}
                </Grid>
            </Grid>)}
        </Grid>
       </Container>
       <br/>  
       <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography color="black" sx={{fontFamily:"acumin-pro,\"sans-serif\"", marginTop:"30px",fontWeight:200,fontSize:"1.4rem"}}> <br/>
            To learn more about creative living, or if you have any questions, please do not hesitate to call or <Link style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,color:"#00a2c2", fontSize:"1.4rem"}} href="/contact">Contact US</Link>
            </Typography>
            </Grid>
         
        </Grid>
       </Container>
        <Enquiry/>
    
      <NewFooter/>
    </main>
  )
}

export default AmenitiesPage

