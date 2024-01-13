"use client";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import "../lifestyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider,Tabs,Tab } from "@mui/material";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Events() {
    const [tabValue,setTabValue]= useState(0);
    const [events] = useState([{eventStatus:"Upcoming Events",id:"upcoming", events:[{month:"January 2024",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/7.1_CA_you-questions-we-answers.jpg",timing:"January 24, 2024 @ 2:00PM",title:"Senior Living Simplified at The Covington Jan 24 2024",subTitle:"Event for OH, The Covington",_id:"5415645151"},{month:"January 2024",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/1.1_CAN_photo.jpg",timing:"January 25, 2024 @ 2:00PM",title:"Senior Living Simplified at The Oasis Homes Jan 25 2024",subTitle:"Event for OH, The Oasis Homes",_id:"541564515545451"}]}])
    const router = useRouter();
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="eventsBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" style={{fontFamily:"acumin-pro,\"sans-serif\""}} color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Events
        </Typography>
        </Breadcrumbs>
        <br/>
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"46px"},lineHeight:"60px", marginTop:"30px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>You are Invited</Typography>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            OH continuing care retirement communities hold regular virtual and in-person events. If you would like to get to know us better, please join us for one of these informative get-togethers. We would love to meet you and answer any questions you or your family may have.
            </Typography> <br/> 
          
            </Grid>
            <Grid item xs={12} md={3}/>
        </Grid>
        </Container>
      
        <div style={{backgroundColor:"#082952",padding:"10px 0px 20px",zIndex:1,transition:"padding 0.5s"}}>
        <Container>
            <Tabs value={tabValue}  onChange={(e,v)=>setTabValue(v)} aria-label="basic tabs example">
                <Tab sx={{color:"#fff",textTransform:"none",fontSize:"26px"}} onClick={()=>router.push("#upcoming")} label="Upcoming"  />
                <Tab sx={{color:"#fff",textTransform:"none",fontSize:"26px"}} onClick={()=>router.push("#past")} label="Past"/>
            </Tabs>
        </Container>
        </div>
        <br/>
        <Container>
            <Grid container spacing={2}>    
            {events && events.map((e,i)=><Grid item id={e.id} key={i} xs={12}>
            <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"},lineHeight:"60px", marginTop:"30px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>{e.eventStatus}</Typography>
            {e?.events && e?.events.map((p,j)=> <Grid container key={j} spacing={4}>
                <Grid item xs={12}><Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"24px"},lineHeight:"60px", marginTop:"30px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>{p?.month}</Typography></Grid>
                 <Grid item xs={12} md={4}>
                    <img src={p.img} className="creativeImg" alt={p.title} />
                 </Grid>
                 <Grid item xs={12} md={8}>
               <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"20px"},fontWeight:600, lineHeight:"60px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>{p?.timing}</Typography>
               <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"18px",md:"20px"},fontWeight:400, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>{p?.title}</Typography>
                 <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
                 {p.subTitle}
                 </Typography>
                 <br/>
                 <div style={{display:"flex"}}>
                 <span style={{flexGrow:0.1}}/>
                <button className="viewBtn">View Details</button>
                <span style={{flexGrow:0.1}}/>
                    {e.eventStatus ==="Upcoming Events" && <button className="viewBtn">Register</button>} 
                 </div>
                 </Grid>
                 </Grid> )}
            
            </Grid>)}
            </Grid>
       
        </Container>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Events
