"use client";
import Header from "../../Components/Header/Header";
import "../contactStyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider } from "@mui/material";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import Enquiry from "../../Components/Enquiry/Enquiry";

import Link from "next/link";

function Careers() {
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="careergBg">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontSize:"20px"}} color="text.primary">
        Careers & Volunteers
        </Typography>
        </Breadcrumbs>
        <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Exceptional Career Satisfaction</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        Are you looking for a career that will help you grow professionally and make a difference? As a member of our Team, you will touch the lives of hundreds of older adults every day in our communities, supporting senior independent, assisted and memory care living.  OH offers a wide range of rewarding opportunities. <strong> To apply for open positions, please click the “open positions” button below.  If you do not find a position for you, Human Resources can be reached by completing the contact form at the bottom of this page:</strong> 
        </Typography>
        <ul style={{listStyle:"none",marginTop:"30px",marginLeft:"30px"}}>
            <li className="choiceList">Professional Health Care</li>
            <li className="choiceList">Personal Attendant and Wellness Care</li>
            <li className="choiceList">Housekeeping & Maintenance</li>
            <li className="choiceList">Administrative & Executive Positions</li>
            <li className="choiceList">Culinary Professionals</li>
            <li className="choiceList">Transportation & Security</li>
            </ul>
            <br/> <br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
            Within our welcoming workplace culture, you will make a difference and be appreciated every day, by both your coworkers and the people who call our communities home. OH provides competitive salaries and benefits, plus security, flexibility and wellness opportunities, along with engaging employee programs offering recognition, fulfillment and fun.
            </Typography>
            <br/> <br/>
            <img style={{width:"300px"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/image002-1-300x153.jpg" alt="WorkplaceAward" /><br/>
            <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2.4rem"}}>
            All OH communities have been honored with the 2022 Workplace Excellence Award by Align. Are you a caring person who is looking for an incredible place to work? We are looking for people like you!
            </Typography>
            <br/> <br/>
            <button className="viewBtn">View Open Positions</button>
            <br/> <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"50px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Volunteer opportunities</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"1.8rem"}}>
        Volunteerism is a cornerstone of the OH philosophy and culture. It inspires our approach to Creative Living and the work of our numerous clubs and committees.
        <br/>  <br/>
        As a forward-looking, nonprofit organization, there are many opportunities within our communities to donate your time to help others. We welcome your suggestions and your talents. To tell us how you would like to help, please <Link style={{color:"#00a2c2",fontWeight:500}} href="/contact">Contact Us.</Link> 
        </Typography>
        <br/> <br/> 
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"50px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Location</Typography>

        <Divider sx={{margin:"30px 0px"}}/>
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <img style={{maxWidth:"100%"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/12/MonteCedro-3-533x355.jpg" alt="Oasis" />
            </Grid>
            <Grid item xs={12} md={8}>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"},marginTop:"50px", fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Oasis Homes</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem",lineHeight:"2.4rem"}}>
        15116 Roxford St, Sylmar, CA 91342
            </Typography><br/>
            <button className="viewBtn">(310) 995-4859</button>
            </Grid>
        </Grid>
      </Container>
      <Enquiry/>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Careers
