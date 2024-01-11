"use client";
import { useState,Suspense } from "react";
import Header from "../../Components/Header/Header";
import "./galleryStyle.css";
import { TopAbstract } from "../../MyApp";
import { Container, Typography,Grid, Dialog,DialogContent,DialogActions, Breadcrumbs,Tabs,Tab, IconButton, CircularProgress } from "@mui/material";
import {FcPrevious,FcNext,FcCancel } from "react-icons/fc";
import { FaRegPlayCircle } from "react-icons/fa";
import {Newsletter} from "../../Components/Amenities/Amenities";
import {NewFooter} from "../../Components/Footer/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Gallery() {
    const [tabValue,setTabValue]= useState(0);
    const [photoBox,setPhotoBox] = useState({open:false,title:"",img:"",index:0});
    const [videoBox, setVideoBox] = useState({open:false,title:"",link:"",thumb:""});
    const [photos]= useState([{title:"Entrance-Flowers-Founain",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2020/09/ECS_Canterbury-Hero_Main-Entrance-Flowers-Founain.jpg"},{title:"Hero_Front-Entrance",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2020/09/ECS_Canterbury-Hero_Front-Entrance-3-1920x833.jpg"},{title:"Gallery_Lobby",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Gallery_Lobby-1920x1281.jpg"},{title:"Canterbury_Friends",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/Lifestyle_Canterbury_Friends_0514-1600x1067.jpg"},{title:"Canterbury_Arch",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_INT_1924-1600x1067.jpg"},{title:"Canterbury_Wine",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Wine_0766-1600x1067.jpg"},{title:"Canterbury_Plate",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Plate_0211-1600x1067.jpg"},{title:"Outdoor-Seating",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Gallery_Outdoor-Seating-1600x1067.jpg"},{title:"Canterbury_Arch",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_INT_0870-1600x1067.jpg"},{title:"Canterbury_Dining",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Dining_0310-1600x1067.jpg"},{title:"Canterbury_Arch_EXT_0837",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_EXT_0837-1600x1067.jpg"},{title:"Canterbury_Gallery_Balcony",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Gallery_Balcony-1600x1066.jpg"},{title:"ECS_Canterbury_Arch_0929",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_0929-1600x1066.jpg"},{title:"Lifestyle_Canterbury_Reading_0546",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/Lifestyle_Canterbury_Reading_0546-copy-1600x1067.jpg"},{title:"apartment_kitchen",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_apartment_kitchen_web.jpg"},{title:"ECS_Canterbury_2023_apartment_living_web",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_apartment_living_web.jpg"},{title:"apartment_bedroom",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_apartment_bedroom_web.jpg"},{title:"Canterbury_2023_apartment",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_apartment_bath_web.jpg"},{title:"Valmonte_Patio2",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_Valmonte_Patio2_web.jpg"},{title:"ECS_Canterbury_Arch",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_0953-1600x1066.jpg"},{title:"Canterbury_Arch",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_0971-1600x1066.jpg"},{title:"Canterbury_Arch454",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_0944-1600x1066.jpg"},{title:"Lifestyle_Canterbury_Driver",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/Lifestyle_Canterbury_Driver_0386-large-copy.jpg"},{title:"Theater_web",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023-Theater_web.jpg"},{title:"Canterbury_2023_ArtRoom",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_ArtRoom_web.jpg"},{title:"FirstFloorPatio",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_FirstFloorPatio_web.jpg"},{title:"Lobby-Vignette",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_Lobby-Vignette_web-1-768x960.jpg"},{title:"Canterbury_Arch",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/08/ECS_Canterbury_Arch_1036-1600x1066.jpg"},{title:"ECS_Canterbury_2023_Lobby_Horiz",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_Lobby_Horiz_web.jpg"},{title:"Lobby_Vert_web",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_2023_Lobby_Vert_web-768x979.jpg"},{title:"Canterbury_Valmonte",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/10/ECS_Canterbury_Valmonte_Patio_web.jpg"},{title:"Joan-Ladd-Brown_Gallery",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/CAN-Joan-Ladd-Brown_Gallery-1600x1319.jpg"},{title:"CAN-Paula-Reuben1_",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/CAN-Paula-Reuben1_Gallery-768x1083.jpg"},{title:"Elslee-Pardaffy1_Gallery",img:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/01/CAN-Elslee-Pardaffy1_Gallery-768x774.jpg"}])
    const [videos] = useState([{title:"How We Live",link:"https://www.ecsforseniors.org/wp-content/uploads/2022/12/ECS-R001_captions-new-branding.mp4", thumb:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/06/ECS_How_We_Live-Video_Thumb-512x372.jpeg"},{title:"Apartment Tour",link:"https://www.ecsforseniors.org/wp-content/uploads/2023/03/ECS_CAN_Apartment-Tour.mp4",thumb:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2023/03/ECS_Canterbury_Housing-Livingroom-blue-512x341.jpeg"},{title:"Resident Testimonials",link:"https://www.ecsforseniors.org/wp-content/uploads/2021/05/Canterbury_Testimonials.mp4",thumb:"https://www.ecsforseniors.org/cdn-cgi/image/format=auto/wp-content/uploads/2021/05/ECS_Canterbury-testimonials_hero-683x349.jpg"}])
    const router = useRouter();
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
        <br/>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"40px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Every Picture Tells a Story</Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem"}}>
        <b>Sometimes words are not enough.</b> These photos showcase the exceptional lifestyle possibilities at The Canterbury. Our resort-style senior retirement community is the only Life Plan Community in The South Bay, renowned for its welcoming residents, well-appointed accommodations, and elegant amenities. It is senior living as it should be.
        </Typography>
        <br/> <br/>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.3rem"}}>
        If you would like to come see for yourself, please <Link style={{color:"#00a2c2",fontWeight:500}} href="/contact">Contact Us.</Link>
        </Typography>
      </Container>
      <div style={{backgroundColor:"#082952",padding:"10px 0px 20px",zIndex:1,transition:"padding 0.5s"}}>
    <Container>
        <Tabs value={tabValue}  onChange={(e,v)=>setTabValue(v)} aria-label="basic tabs example">
          <Tab sx={{color:"#fff",textTransform:"none",fontSize:"26px"}} onClick={()=>router.push("#Photographs")} label="Photographs"  />
          <Tab sx={{color:"#fff",textTransform:"none",fontSize:"26px"}} onClick={()=>router.push("#Videos")} label="Videos"/>
        </Tabs>
    </Container>
      </div>
      <Container id="Photographs">
        <br/>
      <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Photo Gallery</Typography>
        <Grid container spacing={3}>
        {photos.map((p,i)=><Grid item xs={12} md={4} key={i}>
           <img className="galleryImg" onClick={()=>setPhotoBox({open:true,index:i, ...p})} src={p?.img} alt={p?.title} /> 
         </Grid>)}
        </Grid>
      </Container>
      <br/>  <br/> <br/> <br/>
      <Suspense fallback={<div className="center"><CircularProgress/></div>}>
      <Container id="Videos">
      <Typography  color="#082952" gutterBottom sx={{fontSize:{xs:"24px",md:"30px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>Take a virtual tour of The Oasis</Typography>
      <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,fontSize:"1.2rem"}}>
        The next-best thing to visiting our Creative Living community in person is to explore the features of our campus here, online.
        </Typography>
        <Typography color="#333" sx={{fontFamily:"acumin-pro,\"sans-serif\"",fontWeight:100,marginTop:"20px",fontSize:"1.2rem"}}>
        You’ll discover our beautiful community and all the amazing amenities we have to offer.
        </Typography><br/> <br/>
        <Grid container spacing={3}>
        {videos.map((v,i)=><Grid item xs={12} md={4} key={i}>
          <video src={v?.link} className="galleryImg" poster={v.thumb} onClick={()=>setVideoBox({open:true,index:i, ...v})}></video>
          <FaRegPlayCircle onClick={()=>setVideoBox({open:true,index:i, ...v})} className="playBtn"/>
          <Typography color="#00a2c2" onClick={()=>setVideoBox({open:true,index:i, ...v})} sx={{fontFamily:"acumin-pro,\"sans-serif\"",cursor:"pointer", fontWeight:100,marginTop:"-30px", fontSize:"1.2rem"}}>{v?.title} </Typography>
         </Grid>)}
        </Grid>
      </Container>
      </Suspense>
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


    {/* Videos Dialog Box*/}
    
    <Dialog open={videoBox.open} onClose={() => setVideoBox({...videoBox, open: false})} maxWidth="xl">
        <div style={{display:"flex",justifyContent:"flex-end",}}>
        <IconButton onClick={() => setVideoBox({...videoBox, open: false})}>
            <FcCancel style={{fontSize:"30px"}}/> 
        </IconButton>
        </div>
       
        <DialogContent sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div>
          <IconButton disabled={videoBox.index === 0} onClick={() => setVideoBox({...videoBox,index: videoBox.index - 1})}>
            <FcPrevious style={{fontSize:"30px"}}/>
        </IconButton>
          </div>
          <div>
          <video src={videos[videoBox.index]?.link} preload="auto" controls alt={videos[videoBox.index]?.title} className="showImg"/>
         </div>
          <div>
          <IconButton disabled={videoBox.index === videos.length - 1} onClick={() => setVideoBox({...videoBox,index: videoBox.index + 1})}>
            <FcNext style={{fontSize:"30px"}}/>
          </IconButton>
          </div>
        </DialogContent>
        <DialogActions sx={{justifyContent:"space-between"}}>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"14px",md:"20px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}>{videoBox?.title}</Typography>
        <Typography color="#082952" gutterBottom sx={{fontSize:{xs:"14px",md:"20px"}, fontFamily: "Adequate,Helvetica Neue,Helvetica,\"sans-serif\""}}> {videoBox.index + 1} of {videos.length}</Typography>
        </DialogActions>
    </Dialog>
      </Suspense>
      <Newsletter/>
    
      <NewFooter/>
    </main>
  )
}

export default Gallery
