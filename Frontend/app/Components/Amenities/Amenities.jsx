"use client";
import "./amenitiesStyle.css";
import { useState, Suspense } from 'react';
import {Container, Divider, Grid, Typography,Hidden,Accordion,AccordionSummary,AccordionDetails} from '@mui/material/';
import { FcCollapse } from "react-icons/fc";
import { BsPatchQuestionFill } from "react-icons/bs";

import Link from 'next/link';

function Amenities() {
    const [amenities] = useState([{title:"Courtyard for Family-like Environment",subtitle:"We prove a large courtyard for your comfortable living.",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/courtyard_sie00n.webp"},{title:"Swimming Pool With Easy Stairs",subtitle:"Easy accessible Swimming Pool with convenient setup for elderly.",link:"/",img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/swimmingPool_cwmuvr.webp"},{title:"Proper Diet & Nutrition",subtitle:"Get fresh & healthy meal every time. Check out our Sample Menu.",link:"/amenities/menu", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/properDiet_yjypj2.webp"},{title:"Regular Health Checkup",subtitle:"Free Health Checkup with diagnosis & Medicine",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/healthCheckUp_rpxyng.webp"},{title:"Yoga & Exercise Events",subtitle:"Participate in health & cultural events",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/yoga_kj8yxf.webp"},{title:"All Private Bedrooms",subtitle:"We offer a Separate Bathrooms with attach Bathroom, direct Backyard, Flat Screen TV and centralised AC. ",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589806/oasisApi/bedroom_splw9e.webp"},{title:"Special Celebration & Social Events",subtitle:"We love to celebrate special occasions and holidays in style with good food, festival decoration, etc.",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589807/oasisApi/dancing_ijfdzy.webp"},{title:"Big Garden with Lord Buddha statue",subtitle:"Experience the natural and positive vibes with a large Gautam Buddha stone statue in our Garden.",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703589808/oasisApi/stone-gautama-buddha_elxxg5.webp"},{title:"Online Activities Tracking",subtitle:"You and your Family can track all major activities, Daily Summary Report and medical information on our Oasis web portal.",link:"/", img:"https://res.cloudinary.com/oasismanors/image/upload/v1703594840/oasisApi/image1_vo2crp.webp"}])
    const [faq, setFaq] = useState([{ques:"What is the difference between a retirement home and a long-term care home?", ans:"People who are entering a long-term care home often require substantial medical care and/or personal living assistance. Retirement homes, on the other hand, provide residents with an age-restricted community. The two property types differ primarily in the level of care that is given. Moving into a retirement village or nursing home enables these seniors to enjoy their time without having to worry about the hassles of everyday chores."},{ques:"Are there standards that retirement homes must abide by?", ans:"Yes. The Retirement Homes Regulatory Authority (RHRA) is an organization that establishes and measures standards for retirement residences in the province. All Sharon Village Home Care properties meet or exceed these standards."},{ques:"How much does it cost to live in a retirement village?", ans:"Prices vary based on the location and the services offered. In most cases, fees are specific to the retirement residence and to the client themselves. Please contact the Sharon Village retirement residence of your choice for more information on accommodation costs."},  {ques:"What should I consider when looking for a retirement home?",ans:"This depends a lot on your personal preferences. The following is a list of criteria to consider when looking at potential retirement options:",list:[{point:"Accommodations: Consider things like wheelchair accessibility, whether or not a kitchenette is available, housekeeping and laundry services, etc."},{point:"Leisure activities: Be sure to enquire about outdoor spaces, common areas, recreational programming, onsite amenities (like a salon or spa), and worship services."},{point:"Health and assisted living services: Always be sure to check staff credentials and facility safety protocols. If you require more in-depth assisted living services, you may wish to consider one of our Long-Term Care facilities."}] }, {ques:"How do I talk to my loved one about retirement living?",ans:"It is never too soon to start this conversation with a loved one. Making the transition from independent living to a retirement community does not have to be difficult; however it will take some adjusting to. Start the conversation by asking your loved one about their future plans and needs. Be supportive and enthusiastic about their options. By keeping a positive outlook and assisting your loved one with their research and planning, you will help them feel more confident and comfortable with their decision."}, ])
    return (
    <section style={{background:"#fff"}}>
        <Container>
        <div id="visit">
            <span id="firstText"><p><Link href="/contact">Schedule Your Visit  ➡ </Link></p> </span>
            <span id="secoundText" style={{color:"#00a2c2"}}>Starting at $5,743 monthly, including amenities & services, with entrance-fee contract.*</span>
        </div>

        <Grid container spacing={2} className="sectionMargin">
            <Grid item xs={12} md={6}>
            <Typography color="primary" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: 'Courgette'}} align="center"> Welcome to Oasis Manors </Typography>
            <Typography variant="subtitle1" style={{color:"#000"}} gutterBottom>Come home to sophisticated living in the 15116 Roxford St, Sylmar, CA 91342, where relaxed, maintenance-free living and proactive wellness ensure a lifestyle as vibrant as you are. Here, you are free to pursue your passions and discover new interests, all in the company of neighbors who share your view of what independent senior living in CALIFORNIA should be.</Typography>
            <br/>
            <Typography variant="p" style={{color:"#000"}} gutterBottom>Perched on a scenic bluff in the rolling hills of Sylmar, CA, at The Oasis Manors, you can be as active or easygoing as you want with the confidence and peace of mind that comes from choosing a Life Plan community to call home.</Typography>
            </Grid>
             <Grid item xs={12} md={6}  className="center">
                <div id="welcomeImg"/>
             </Grid>
        </Grid>

        <Suspense fallback={<h6>Loading...</h6>}>
        <Grid container spacing={2}>
         <Grid item xs={12}>
            <Divider light variant="inset"> <h4 className='heading'> Our Amentities</h4> </Divider>
            <br/>
            <Typography align='center' style={{color:"#000"}} variant="subtitle1">
            Free from the hassles of home maintenance, assisted living residents have more time to focus on living fully and meaningfully within an active community. With social events, group programs, and restaurant-style dining, residents can connect with each other and with the broader world. 
            </Typography>
            <br/>
         </Grid>
         {amenities.map(a=>
            <Grid key={a.title} item xs={12} md={4} >
                <Grid className="amenityCard">
                <img src={a?.img} className="amenityImg" alt={a?.title} />
                <Link href={a.link}><Typography variant='h6'style={{fontFamily: 'Courgette'}} textAlign="center" color="primary">{a.title}</Typography></Link>
                <Typography align='center' style={{color:"#000"}} variant="body2" >
                {a.subtitle}
             </Typography>
                </Grid>                
            </Grid>)}
        </Grid>
        </Suspense>

        <Grid container spacing={2} id="imgBox">
            <Grid item xs={12} md={6} className="center">
                <img src="https://mss-p-045-delivery.stylelabs.cloud/api/public/content/1ac6f11bdaff43cb95cc4eb893618ccd?v=8ade6d2a&t=w1000h1000" alt="CareImg" style={{maxHeight:440,maxWidth:"100%"}}/>
            </Grid>
            <Grid item xs={12} md={6} id="textBox">
                <br/>
            <Typography variant='h6' textAlign="center" color="primary" sx={{fontFamily: 'Courgette'}}>Helpful Services Tailored to Your Needs</Typography>
            <Divider light variant="inset"/>
            <br/>
            <Typography variant="subtitle1" style={{color:"#000"}} >
               Our compassionate team members take the time to get to know your abilities and needs so you can live as independently as possible. We will work with you to create an individualized Service Plan (SP) to guide your personalized services. Your SP will also capture your unique preferences so we can make sure your desires are met, from delivering your morning newspaper to bringing you a glass of wine after dinner. And should you need support with dressing, bathing, grooming, or medication management, your care team is always on hand to help—as little or as much as you need. 
            </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <br/>
            <Typography variant='h6' textAlign="center" color="primary" sx={{fontFamily: 'Courgette'}}>Special Celebration & Social Events</Typography>
            <Divider light variant="inset"/>
            <br/>
            <Typography variant="subtitle1" style={{color:"#000"}} >
            We love to celebrate special occasions and holidays in style with good food, festive decorations, and excellent company. Always find yourself mixing, mingling and even cutting a rug at our socials, happy hours, and live entertainment events.  
            </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="center">
                <img src="https://mss-p-045-delivery.stylelabs.cloud/api/public/content/808de43641db4c8fbf25bdb4a55171e3?v=aa232b9d&t=w520h380" alt="CareImg" style={{maxHeight:440,maxWidth:"100%"}}/>
            </Grid>
        </Grid>
        </Container>

    <div id="connected" className="sectionMargin">
    <h4 className='heading'> <Hidden mdDown>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Hidden> Stay Connected with Your Family</h4>
    <center>  <Divider light variant="inset" style={{maxWidth:500}}/></center>  
    <br /> <br /> 
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <ul>
                <li> <Typography variant="subtitle1"  style={{color:"mediumblue"}}>Your Family can also track your all activities. (If allowed)</Typography></li>
                <li> <Typography variant="subtitle1"  style={{color:"mediumblue"}}>Instant notification to your family members.</Typography></li>
                <li> <Typography variant="subtitle1"  style={{color:"mediumblue"}}>Schedule call, message, online meeting with your family & Relatives.</Typography></li>
                <li> <Typography variant="subtitle1"  style={{color:"mediumblue"}}>Daily Summary Report (DSR) live on website for individual guest.</Typography></li>
                <li> <Typography variant="subtitle1"  style={{color:"mediumblue"}}>Your family can also track DSR and request for any change.</Typography></li>
            </ul>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" style={{color:"#000"}} >
            Oasis Manors provides you the best connectivity and notification facility so that you or your allowed family members can keep track of all the daily activities. Like at what time did you take what medicine, meal or any such activities? You can also keep track of your regular health check-up, reports, next doctor's appointment, all kind of medical diagnostic and much more just by login into the Oasis Manors online web portal.
            </Typography>
            </Grid>
        </Grid>
    </Container>
    </div>
    <div id="community">
   <Divider light> <Typography variant='h4' textAlign="center" className='heading'>Explore Our Community</Typography> </Divider> 
    <br/>
    <Container maxWidth="xl">
    <Grid container>
        <Grid item xs={12} md={4} >
            <div className="communityCard">
                <img className="abstractImg" src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/11/abstract_1.jpg" alt="abstract_1" />
                <video className="communityImg" style={{height:310}} src="https://www.ecsforseniors.org/wp-content/uploads/2023/03/ECS_How-We-Live_Vido.mp4" type="video/mp4/" playsInline autoPlay loop muted>
                </video>
                <Typography variant="h6" color="primary">How we Live</Typography>
                <Typography variant="subtitle2" color="royalblue">A lifestyle as rich and vibrant as you are.</Typography>
                <br/>   <Link href="/" className="btnLink">Watch Our Video  ➡ </Link>
                <br/>  <br/>  <br/>
            </div>
        </Grid>
        <Grid item xs={12} md={4}>
            <div className="communityCard">
                <img className="abstractImg" src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/11/abstract_2.jpg" alt="abstract_1" />
            <img className="communityImg" src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/Services-Amenties-640x427.jpg" alt="abstract_2" />
            <Typography variant="h6" color="primary">Services & Amenities</Typography>
            <Typography variant="subtitle2" color="royalblue">All the comforts of home and so much more.</Typography>
            <br/>   <Link href="/" className="btnLink">Take a Tour  ➡ </Link>  
            <br/>  <br/>  <br/>
            </div>
        </Grid>
        <Grid item xs={12} md={4}>
            <div className="communityCard">
                <img className="abstractImg" src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2022/11/abstract_3.jpg" alt="abstract_1" />
            <img className="communityImg" src="https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/Delectable-Dining-2-640x427.jpg" alt="abstract_2" />
            <Typography variant="h6" color="primary">Fresh & Hygienic Meal</Typography>
            <Typography variant="subtitle2" color="royalblue">This is core speciality to provide best nutritious meal.</Typography>
            <br/>   <Link href="/amenities/menu" className="btnLink">Sample Menu  ➡ </Link>
            <br/>  <br/>  <br/>            
            </div>
        </Grid>
    </Grid>
    </Container>
    </div>
    <br/>

   <Divider light> <Typography variant='h4' textAlign="center" className='heading'>FAQ ~ Retirement Homes</Typography> </Divider> 
   <br/>
   <div id="faqBg">
  
   </div>
   <Container>
    {faq.map((f,i)=> <Accordion key={i}> 
            <AccordionSummary
          expandIcon={<FcCollapse  />}
          aria-controls="faq-header"
          id="faq-header"
        >
      <BsPatchQuestionFill style={{marginTop:"4px",marginRight:"8px",color:"lightseagreen"}}/> <Typography>{f?.ques}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A. ~ {f?.ans}
          </Typography>
          <br/>
          <ul >
            {f?.list && f?.list.map((l,j)=><li className="faqBgUl" key={j}> <Typography gutterBottom variant="body2"> {l?.point}</Typography> </li>)}
          </ul>
        </AccordionDetails>
        </Accordion>)}
   </Container>
    <br/>
    
    </section>
  )
}

export default Amenities