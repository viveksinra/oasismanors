"use client";
import Header from "../Components/Header/Header"
import "./aboutStyle.css";
import { TopAbstract } from "../MyApp";
import { Container, Typography } from "@mui/material";
import Footer from "../Components/Footer/Footer";
function About() {
  return (
    <main>
      <Header/>
      <TopAbstract/>
      <div id="heroAbout">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Typography color="primary" align="center" variant="h3">Discover Your Lifestyle</Typography>
        Come home to sophisticated living in the 15116 Roxford St, Sylmar, CA 91342, where relaxed, maintenance-free living and proactive wellness ensure a lifestyle as vibrant as you are. Here, you are free to pursue your passions and discover new interests, all in the company of neighbors who share your view of what independent senior living in CALIFORNIA should be.

Perched on a scenic bluff in the rolling hills of Sylmar, CA, at The Oasis Manors, you can be as active or easygoing as you want with the confidence and peace of mind that comes from choosing a Life Plan community to call home.
      </Container>
      <Footer/>
    </main>
  )
}

export default About
