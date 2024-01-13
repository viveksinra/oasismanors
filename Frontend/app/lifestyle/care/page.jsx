"use client";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import "../lifestyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider } from "@mui/material";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import Link from "next/link";

function CarePage() {
    const [customCare] = useState([{title:"independent",text:"Enjoy relaxed, maintenance-free, independent senior living, a luxury lifestyle, and proactive health and wellness. Life at OH allows you to continue to forge your own path and enjoy all our community offers, including:",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/3.0_CA_independent-533x355.jpg",list:["Exceptional gourmet dining choices","An array of enrichment and lifelong learning programs","Complimentary transportation services","Fitness and wellness programs","Housekeeping and maintenance","A continuum of supportive care services","Financial options","Move-in support to help you transition into your new Independent Living lifestyle."]},{title:"assisted",text:"Sometimes, a little extra help is all you need. For assisted living, Los Angeles is a wonderful choice. Calling The Oasis Homes in Sylmar home means having access to a continuum of care – custom-tailored by you – to ensure a plan for your needs, now and in the future. With our exclusive CareOne program, means you enjoy all the benefits of Independent Living, complemented by the services you want, when and how you want them. Your CareOne program provides the assistance you need through a flexible range of services, including:",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/3.0_CA_assisted-533x355.jpg",list:["Personal assistance – bathing, dressing, grooming, toileting ","Delivery of prepared meals","Meal reminders or escorting to the dining rooms","Assistance with incontinence care","Arrangement of transportation to medical or dental appointments","Escorting to offsite recreation, events, or appointments","Observation of overall health status to identify and assist with dietary, social, and health needs."]},{title:"memory",text:"The Courtyards at The Oasis Homes was created specifically for those needing Alzheimer’s care or assistance with mild memory loss or cognitive decline. Our specialized programs are designed specifically to enhance our residents’ individual abilities and preferences. Every day, a dedicated group of specially trained, compassionate life-enrichment professionals come together with residents and their families to create meaningful, joyful experiences. In consultation with families, we develop plans of personalized care, integrating each resident’s interests into daily life while respecting personal preferences for dressing, dining, and participation activities, ensuring abundant opportunities for residents to laugh, to listen and to enjoy each other’s company in a safe, protected environment.",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/3.0_CA_memory-533x355.jpg",},{title:"one",text:"Your needs are as individual as you are. Your care should be too. CareOne is our exclusive program that allows you to personalize your care at every step of your journey. It is designed to seamlessly integrate within any Choice Custom Care option. In consultation with your doctor and family, your CareOne program helps you to continue to live life on your terms. It provides you the services you want, when you want them, the way you want them.",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/3.0_CA_care-one-533x355.jpg"}])
    const [teamCare]= useState([{title:"Team Care",text:"The best option if you require only intermittent, task-based assistance, either daily or occasionally throughout the week. Our Team Members are dedicated and delighted to assist you with both your regularly scheduled needs, and the occasional surprises that life brings along the way.",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/3.0_CA_team-care-533x355.jpg"},{title:"Companion Care",text:"If your needs require a more detailed level of care on a regular basis, a personal care companion may be the right fit for you. Having a dedicated person you can count on provides tremendous confidence and comfort.",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/3.0_CA_companion-care-533x355.jpg"}]) 
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="careBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" style={{fontFamily:"acumin-pro,\"sans-serif\""}} color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Choice Custom Care
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"46px"},lineHeight:"60px", marginTop:"30px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Choice Custom Care</Typography>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            The Oasis Homes provides a broad spectrum of exceptional senior care and services designed to meet your needs, now and in the future.
            </Typography> <br/> 
          
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            <span style={{fontWeight:600,color:"#00a2c2"}}>Choice</span>   – A range of services within our communities means having access to additional care, should the need arise. It is the peace of mind that allows you to enjoy life, without the worry of having to move again.
            </Typography>
            <br/>
                      
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            <span style={{fontWeight:600,color:"#00a2c2"}}>Freedom </span>   – Knowing your needs are met, now and in the future allows you to craft the life you want. Our proactive approach to health, wellness, and wellbeing ensures a seamless continuum of care so you can continue to stay active.
            </Typography>
            <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            <span style={{fontWeight:600,color:"#00a2c2"}}>Flexibility </span>   – As your needs change, so should your care. Personalized, individual care reflects your needs and wants, helping you to maintain your edge and be at your best.
            </Typography>
            <br/>
            </Grid>
            <Grid item xs={12} md={3}/>
        </Grid>
        <br/> <br/> 

        <Grid container spacing={2}>
        <Grid item xs={12}>
            <img style={{width:"520px"}} src="https://www.ecsforseniors.org/wp-content/uploads/2022/11/CustomCare_Logo_Canary.svg" alt="ChoiceCustomCare" />
        </Grid>
        {customCare.map((c,i)=><Grid item key={i} xs={12}>
            <Divider sx={{margin:"30px 0px"}}/>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
               <img src={c.img} className="creativeImg" alt={c.title} />
                </Grid>
                <Grid item xs={12} md={8}>
                <div style={{display:"flex"}}>
                <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"30px"},fontWeight:600, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>choice</Typography>
                <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"30px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>{c.title}</Typography>
                </div>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
                    {c?.text}
                </Typography>
                <ul style={{listStyle:"none",marginTop:"30px",marginLeft:"30px"}}>
                {c?.list && c.list.map((l,i)=><li className="choiceList" key={i}>{l}</li>)}
                </ul>
                </Grid>
            </Grid>
             </Grid>)}
        <Grid item xs={12}>
        <Divider sx={{margin:"30px 0px"}}/>
        </Grid>
        <Grid item xs={12}>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"36px"},fontWeight:400, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Catered, personalized attention</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2rem"}}>
        We understand your expectations — they’re the same as we have for our own family. You and your family will have a Care Advocate available 24/7, who can:
        </Typography>
            <ul style={{listStyle:"none",marginTop:"30px",marginLeft:"30px"}}>
            <li className="choiceList">Screen, select, and supervise your caregivers</li>
            <li className="choiceList">Answer your questions</li>
            <li className="choiceList">Discuss any changes to your care</li>
            </ul>
        </Grid>
        <Grid item xs={12}>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"36px"},marginTop:"40px", fontWeight:400, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>A trusted name</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2rem"}}>
        Our Team Members are professionally trained and dedicated to providing heartfelt care with dignity and respect. As a continuing care retirement community, The Oasis Homes takes pride in creating a family atmosphere. Our Team Members play an important role, which is why their tenure with OH can be measured in terms of decades, not years.
        </Typography><br/>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2rem"}}>
        All Team Members receive:
        </Typography>
            <ul style={{listStyle:"none",marginTop:"30px",marginLeft:"30px"}}>
            <li className="choiceList">Fingerprint and background checks</li>
            <li className="choiceList">Health screening</li>
            <li className="choiceList">Ongoing training</li>
            </ul>
        </Grid>
        </Grid>
      </Container>
      <br/>
      <Container>
        <Grid container spacing={2}>
        {teamCare.map((c,i)=><Grid item key={i} xs={12}>
            <Divider sx={{margin:"30px 0px"}}/>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
               <img src={c.img} className="creativeImg" alt={c.title} />
                </Grid>
                <Grid item xs={12} md={8}>
                <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"30px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>{c.title}</Typography>
                <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
                    {c?.text}
                </Typography>
                </Grid>
            </Grid>
             </Grid>)}
             <Grid item xs={12} md={9}>
             <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"30px"},marginTop:"60px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>We are here for you</Typography>
             <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,fontSize:"20px",lineHeight:"1.8rem"}}>
             From independent to assisted living in the Sylmar, choosing the right level of care and accommodation is an important decision. If you have any questions, would like more information, clarification on a specific topic, or even arrange to drop by for a visit, don’t hesitate to call or <Link style={{color:"#00a2c2",fontWeight:500}} href="/contact">Contact Us.</Link>
                </Typography>
             </Grid>
             <Grid item xs={12} md={3}/>
        </Grid>
      </Container>
      
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default CarePage
