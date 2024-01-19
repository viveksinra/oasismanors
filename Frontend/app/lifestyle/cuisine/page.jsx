"use client";
import { useState,Suspense } from "react";
import Header from "../../Components/Header/Header";
import "../lifestyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider } from "@mui/material";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import Link from "next/link";

function Dining() {
    const [creativeData] = useState([{title:"Weekly Culinary Experience",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_weekly-chef-special-533x355.jpg",text:"Watch our culinary staff prepare your meal right in front of you, slicing and dicing to make you the perfect meal. Watch as they show you their tricks and techniques which you can later practice in your own kitchen."},{title:"Farm-to-Table Ingredients",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_farm-table-533x355.jpg",text:"We support local food sources to keep you rooted in your community and sustain local farmers, providing you fresh ingredients from farm to table."},{title:"Visiting Chefs",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_chef-demos-533x355.jpg",text:"We invite locally famous chefs to come prepare meals for you, giving you a wide range of gastronomical experiences."},{title:"Monthly Celebrations",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_celeb-chef-visit-533x355.jpg",text:"For a special meal each month, we celebrate a different global cuisine. Our chefs provide you a global culinary experience par none. Celebrate the world with us!"}])
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="diningBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" style={{fontFamily:"acumin-pro,\"sans-serif\""}} color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontFamily:"acumin-pro,\"sans-serif\"",fontSize:"20px"}} color="text.primary">
        Cuisine
        </Typography>
        </Breadcrumbs>
        <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>World Class Cuisine</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        At Oasis, we make exceptional gourmet dining a routine part of your daily experience. Our
culinary team works with your dietician to understand your unique needs that we can meet
through flavor and nutrition. Enjoy the daily freedom to choose restaurant-style dining with your
colleagues or relax in the comfort of your own home with in-room service.
        </Typography>
        <ul style={{listStyle:"none",marginTop:"30px"}}>
            <li style={{listStyleType:"disc",fontSize: "1.3rem",fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,}}>Prepared from scratch with locally sourced, seasonal farm-fresh ingredients</li>
            <li style={{listStyleType:"disc",fontSize: "1.3rem",fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,}}>Personalized for individual dietary needs</li>
        </ul>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",marginTop:"30px",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        <strong>The most delicious retirement community dining in Los Angeles. </strong>Enjoy the daily freedom to choose restaurant-style dining or relax in the comfort of your own home with in-room service. Our residents, their guests, and families all say the daily selection and quality of dining at The Oasis Homes is outstanding.
        </Typography>
        <br/>
        <Grid container spacing={2}>
        {creativeData.map((c,i)=><Grid item xs={12}>
            <Divider sx={{margin:"30px 0px"}}/>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <img src={c?.img} className="creativeImg" alt={c?.title} />
                </Grid>
                <Grid item xs={12} md={8}>
                <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},fontWeight:100, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>{c.title}</Typography> 
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
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"},marginTop:"30px", fontWeight:300, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Responsibly sourced. Deliciously prepared.</Typography>
        <ul style={{listStyle:"none",marginTop:"30px"}}>
            <li style={{listStyleType:"disc",fontSize: "1.2rem",lineHeight:"1.8",fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,}}>We use hormone-free poultry and beef that is USDA Choice or better.</li>
            <li style={{listStyleType:"disc",fontSize: "1.2rem",lineHeight:"1.8",fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,}}>The Oasis Homes is guided by the Monterey Bay Aquarium Seafood Watch to help us select seafood <br/> that is responsibly managed, whether wild or farmed, causing little harm to habitats or wildlife.</li>
            <li style={{listStyleType:"disc",fontSize: "1.2rem",lineHeight:"1.8",fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:300,}}>We buy local as much as possible, for the freshest fruits and vegetables that retain the highest levels <br/> of nutrients, as well as to support local farmers, producers, and our economy.</li>
        </ul>
        <br/>
            <Typography color="black" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem"}}> <br/>
            To learn more about our dining, or if you have any questions, please do not hesitate to call or <Link style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,color:"#00a2c2",fontSize:"1.2rem"}} href="/contact">Contact US</Link>
            </Typography>
        </Grid>
        </Grid>
      </Container>
      
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Dining