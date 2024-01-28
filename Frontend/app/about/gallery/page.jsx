"use client";
import { useState,Suspense } from "react";
import Header from "../../Components/Header/Header";
import "./galleryStyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid, Dialog,DialogContent,DialogActions, Breadcrumbs, IconButton, CircularProgress } from "@mui/material";
import {FcPrevious,FcNext,FcCancel } from "react-icons/fc";
import Enquiry from "../../Components/Enquiry/Enquiry";
import {NewFooter} from "../../Components/Footer/Footer";
import Link from "next/link";

function Gallery() {
    const [photoBox,setPhotoBox] = useState({open:false,title:"",img:"",index:0});
    const [photos]= useState([{title:"Oasis Home",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706128914/Oasis2_clq4l3.webp"},{title:"Bed Room",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706128914/Oasis3_biy68f.webp"},{title:"Oasis Home with Pool",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706128914/Oasis1_rwtkv6.webp"},{title:"Oasis_Homes_Friends",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/Lifestyle_Canterbury_Friends_0514-1600x1067.jpg"},{title:"Oasis_Homes_Arch",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706128214/OasisHome_azsxab.webp"},{title:"Oasis_Homes_Wine",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Wine_0766-1600x1067.jpg"},{title:"Oasis_Homes_Plate",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Plate_0211-1600x1067.jpg"},{title:"Outdoor-Seating",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706203286/outsiting_s5vgow.jpg"},{title:"Oasis_Homes_Golf_Area",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706203681/Golf_lwmgsq.jpg"},{title:"Oasis_Homes_Dining",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Dining_0310-1600x1067.jpg"},{title:"Oasis_Homes_Arch_EXT_0837",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_EXT_0837-1600x1067.jpg"},{title:"Oasis_Homes_Gallery_Balcony",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706203977/Seating_afy6fa.webp"},{title:"ECS_Canterbury_Arch_0929",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_0929-1600x1066.jpg"},{title:"Lifestyle_Canterbury_Reading_0546",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/Lifestyle_Canterbury_Reading_0546-copy-1600x1067.jpg"},{title:"apartment_kitchen",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706204441/Fridge_xopqx9.jpg"},{title:"Oasis Home Bedroom",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706204837/Room_fy5kro.webp"},{title:"Oasis Washroom",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706205010/Bathroom_ywfcgy.webp"},{title:"Oasis_Homes_Bathroom",img:"https://res.cloudinary.com/oasismanors/image/upload/v1706205510/20240123_143310_mxxjxx.jpg"},{title:"Lifestyle_Canterbury_Driver",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/Lifestyle_Canterbury_Driver_0386-large-copy.jpg"},{title:"Joan-Ladd-Brown_Gallery",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/CAN-Joan-Ladd-Brown_Gallery-1600x1319.jpg"},{title:"CAN-Paula-Reuben1_",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/CAN-Paula-Reuben1_Gallery-768x1083.jpg"},{title:"Elslee-Pardaffy1_Gallery",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/CAN-Elslee-Pardaffy1_Gallery-768x774.jpg"}])
    return (
    <main style={{backgroundColor:"#fff"}}>
      <Header/>
      <TopAbstract/>
      <div id="galleryAbout">
      </div>
      <Container className="sectionMargin" >
        <br/>
        <Breadcrumbs separator="›" sx={{fontSize:"24px"}} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Oasis
        </Link>
        <Typography sx={{fontWeight:600,fontSize:"20px"}} color="text.primary">
        Gallery
        </Typography>
        </Breadcrumbs>
 
      </Container>

      <Container id="Photographs">
        <br/>
      <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Photo Gallery</Typography>
        <Grid container spacing={3}>
        {photos.map((p,i)=><Grid item xs={12} md={4} key={i}>
           <img className="galleryImg" onClick={()=>setPhotoBox({open:true,index:i, ...p})} src={p?.img} alt={p?.title} /> 
         </Grid>)}
        </Grid>
        <Grid container>
        <Grid item xs={12}>
          <br/> <br/>
          </Grid>
          <Grid item xs={12} md={10}>
          <br/>
          <Typography gutterBottom sx={{fontFamily: 'AdequateLight,Helvetica Neue,Helvetica,\"sans-serif\"',color:"#082952",fontSize:{xs:"20px",md:"30px"}}}>Come visit our place to see it yourself.</Typography>
          <Typography gutterBottom sx={{fontFamily: "acumin-pro, \"sans-serif\"",color:"#333",fontWeight:"100", fontSize:{xs:"20px",md:"20px"}}}>To visit our place or if you have any questions, please do not hesitate to call <Link style={{color:"#00a2c2",fontWeight:500}} href="/contact">Contact Us.</Link></Typography>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
        </Grid>
      </Container>
      <br/>  <br/> <br/> <br/>
      <Suspense fallback={<div className="center"><CircularProgress/></div>}>
        
      <Dialog open={photoBox.open} onClose={() => setPhotoBox({...photoBox, open: false})} maxWidth="xl">
        <div style={{display:"flex",justifyContent:"flex-end",}}>
        <IconButton onClick={() => setPhotoBox({...photoBox, open: false})}>
            <FcCancel style={{fontSize:"30px"}}/> 
        </IconButton>
        </div>
       
        <DialogContent sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div>
          <IconButton disabled={photoBox.index === 0} onClick={() => setPhotoBox({...photoBox,index: photoBox.index - 1})}>
            <FcPrevious style={{fontSize:"30px"}}/>
        </IconButton>
          </div>
          <div>
          <img src={photos[photoBox.index].img} alt={photos[photoBox.index].title} className="showImg"/>
         </div>
          <div>
          <IconButton disabled={photoBox.index === photos.length - 1} onClick={() => setPhotoBox({...photoBox,index: photoBox.index + 1})}>
            <FcNext style={{fontSize:"30px"}}/>
          </IconButton>
          </div>
        </DialogContent>
        <DialogActions sx={{justifyContent:"space-between"}}>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"14px",md:"20px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>{photoBox?.title}</Typography>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"14px",md:"20px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}> {photoBox.index + 1} of {photos.length}</Typography>
        </DialogActions>
    </Dialog>
      </Suspense>
    <Enquiry/>
      <NewFooter/>
    </main>
  )
}

export default Gallery
