"use client";
import Header from "../../Components/Header/Header";
import "./respiteStyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography, Grid, Breadcrumbs } from "@mui/material";
import { NewFooter } from "../../Components/Footer/Footer";
import Link from "next/link";

function About() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      <Header />
      <TopAbstract />
      <div id="heroAbout"></div>
      <Container className="sectionMargin">
        <br />
        <Breadcrumbs separator="›" sx={{ fontWeight: 600, fontFamily: "acumin-pro,\"sans-serif\"", fontSize: "24px" }} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Oasis
          </Link>
          <Typography sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontSize: "20px" }} color="text.primary">
            About
          </Typography>
          <Typography sx={{ fontWeight: 500, fontFamily: "acumin-pro,\"sans-serif\"", fontSize: "20px" }} color="text.primary">
            Respite Care
          </Typography>
        </Breadcrumbs>
        <br />
        <Typography color="#082952" gutterBottom sx={{ fontSize: { xs: "24px", md: "36px" }, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\"" }}>
          Oasis Homes Respite Care: A Break for You and Your Loved One
        </Typography>
        <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 100, fontSize: "1.2rem" }}>
          Caring for a loved one can be a rewarding experience, but it can also be challenging. Taking time for yourself is essential, but it can be difficult to find reliable care while you're away.
        </Typography>
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
           
          <Typography color="#082952" sx={{ margin: "10px 0px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"", fontSize: "2rem" }}>
        - Our respite care services include:
      </Typography>
      <ul style={{ listStyleType: "circle", marginLeft: "30px" }}>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            24-hour care from a team of experienced and compassionate caregivers
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Personalized care plans to meet the individual needs of your loved one
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            A variety of activities and social events to keep your loved one engaged
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Delicious and nutritious meals prepared on-site
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Safe and comfortable accommodations
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Regular communication with you about your loved one's care
          </Typography>
        </li>
      </ul>
      <br /> 

      <Typography color="#082952" sx={{ margin: "10px 0px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"", fontSize: "2rem" }}>
        - Benefits of Oasis Homes Respite Care:
      </Typography>
      <ul style={{ listStyleType: "circle", marginLeft: "30px" }}>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Gives you time to recharge and take care of yourself
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Provides your loved one with a change of scenery and social interaction
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Helps to prevent caregiver burnout
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Gives you peace of mind knowing your loved one is in good hands
          </Typography>
        </li>
      </ul>
      <br /> 

      <Typography color="#082952" sx={{ margin: "10px 0px", fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"", fontSize: "2rem" }}>
        - Oasis Homes Respite Care is a great option for:
      </Typography>
      <ul style={{ listStyleType: "circle", marginLeft: "30px" }}>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            Families who need a break from caring for a loved one
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            People who are recovering from surgery or illness
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            People who are traveling or taking a vacation
          </Typography>
        </li>
        <li>
          {" "}
          <Typography color="#333" sx={{ fontFamily: "acumin-pro,\"sans-serif\"", fontWeight: 400, fontSize: "1.2rem" }}>
            People who are considering a move to an assisted living facility
          </Typography>
        </li>
      </ul>
      <br />
          </Grid>
        </Grid>

        <br /> 
        <Grid container>
          <Grid item xs={12} md={9}>
            <br />
            <Typography gutterBottom sx={{ fontFamily: "AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"", color: "#082952", fontSize: { xs: "20px", md: "30px" } }}>
              Come learn more about us.
            </Typography>
            <Typography gutterBottom sx={{ fontFamily: "acumin-pro, \"sans-serif\"", color: "#333", fontWeight: "100", fontSize: { xs: "20px", md: "20px" } }}>
            We understand that choosing the right respite care provider is an important decision. We encourage you to {" "}
              <Link style={{ color: "#00a2c2", fontWeight: 500 }} href="/contact">
                Contact Us.
              </Link>
              {" "}today to schedule a tour and learn more about our services.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Container>

      <NewFooter />
    </main>
  );
}

export default About;
