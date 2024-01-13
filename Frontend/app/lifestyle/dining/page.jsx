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
    const [creativeData] = useState([{title:"Featured Weekly Chef Specials",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_weekly-chef-special-533x355.jpg",text:"Right before your eyes, watch our culinary staff slice, dice, sauté, and sizzle as they prepare your meal to your specifications."},{title:"Chef Demos",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_chef-demos-533x355.jpg",text:"Learn our chefs’ tricks, techniques, and new food trends, and take new and healthy ideas back to your own kitchen. These educational events are fascinating to watch. And everyone enjoys tasting the delicious results."},{title:"Farm-to-Table Events",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_farm-table-533x355.jpg",text:"The Oasis Homes supports local farmers. Not only does it keep us truly rooted in the community and help sustain local agriculture, it also provides residents with the freshest fruits and vegetables that retain the highest levels of nutrients."},{title:"Celebrity Chef Visits",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_celeb-chef-visit-533x355.jpg",text:"Be inspired, entertained, and thoroughly delighted as special guests share their talents."},{title:"A Meal in the Life",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/2.3_CAN_A-Meal-in-the-life-533x355.jpg",text:"A monthly cultural celebration of cuisine from around the world allows you to experience a variety of flavors and styles from around the globe. Travel the world with us—all you need is silverware and an appetite for adventure."}])
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
        Dining
        </Typography>
        </Breadcrumbs>
        <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Inspired Dining</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        At The Oasis Homes, exceptional gourmet dining is part of your daily experience.<br/> Our award-winning Culinary Team understands the unique needs of seniors.<br/> Flavor, nutrition, and service are at the heart of everything we do. All meals are:
        </Typography>
        <ul style={{listStyle:"none",marginTop:"30px"}}>
            <li style={{listStyleType:"disc",fontSize: "1.3rem",fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,}}>Prepared from scratch with locally sourced, seasonal farm-fresh ingredients</li>
            <li style={{listStyleType:"disc",fontSize: "1.3rem",fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,}}>Personalized for individual dietary needs</li>
        </ul>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",marginTop:"30px",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        <strong>The most delicious retirement community dining in Los Angeles. </strong>Enjoy the daily freedom to choose restaurant-style dining or relax in the comfort of your own home with in-room service. Our residents, their guests, and families all say the daily selection and quality of dining at The Oasis Homes is outstanding.
        </Typography>

        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"32px"},marginTop:"160px", fontWeight:300, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Culinary Programs</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        Enjoy numerous culinary events and programs.
        </Typography>

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

export default Dining
