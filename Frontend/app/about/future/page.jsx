"use client";
import Header from "../../Components/Header/Header";
import "./futureStyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid,  Breadcrumbs, Divider } from "@mui/material";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import Link from "next/link";

function Future() {
    
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div className="topBg" id="futureAbout">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontSize:"20px"}} color="text.primary">
        Secure Your Future
        </Typography>
        </Breadcrumbs>
        <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Peace of Mind</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem"}}>
        As a nonprofit senior living Life Plan community, The Canterbury provides a unique combination of benefits for your health, wellness, lifestyle, and legacy. These benefits are amplified by our nonprofit status – we do not pay dividends to shareholders. This allows us to continually reinvest in our communities to renew and improve infrastructure, amenities, and services.
        </Typography>
        <br/> <br/>
        <Grid container spacing={2}>
            <Grid item xs={12}><Divider sx={{marginBottom:"40px"}}/> </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <img style={{maxWidth:"100%"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/1.5_CAN_Transparency-533x355.jpg" alt="Future1" />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"20px",md:"30px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Transparency</Typography>
                      <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.2rem"}}>
                      Your one-time Entrance Fee ensures you enjoy high-quality care and lifestyle but there is a significant additional benefit. No matter how many years you live here, a majority of your entrance fee will be reimbursed to you or your estate upon re-occupancy of the residence by its next proud occupant. It means you can live exceptionally well and still leave a sizable legacy to your heirs with this built in protection of your assets.
                     </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Divider sx={{margin:"30px 0px"}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <img style={{maxWidth:"100%"}} src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/1.5_CAN_Financial-533x355.jpg" alt="Future2" />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"20px",md:"30px"}, fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\""}}>Financial Strength</Typography>
                      <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.2rem"}}>
                      ECS is among the top Life Plan/CCRC providers in America when ranked by financial strength with an earned A- rating from Fitch Ratings, a global leader in credit ratings and research. We are extremely proud of this exceptionally high rating, something that fewer than 5% of senior communities in the U.S. have achieved.
                     </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Divider sx={{margin:"30px 0px"}}/>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography color="black" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.2rem"}}>
                    When you compare communities and their sponsoring organizations, be sure to find out if they operate on a for-profit or nonprofit basis.
                     </Typography><br/>
                     <Link style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"1.4rem",color:"#00a2c2"}} href="/">ECS, incl. MonteCedro, Audited Financial Statements – FY 2023</Link> <br/>
                     <Link style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,fontSize:"1.4rem",color:"#00a2c2"}} href="/">ECS Continuing Care Provider Report – FY 2023</Link>
                     <Typography color="black" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.2rem"}}> <br/>
                     To learn more about our financial strength, or if you have any questions, please do not hesitate to call or <Link style={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:400,color:"#00a2c2",fontSize:"1.2rem"}} href="/contact">Contact US</Link>
                     </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Container>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Future
