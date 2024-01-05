'use client';
import React,{useState,useEffect} from 'react'
import {Typography,  Grid,CircularProgress} from '@mui/material/';
import {invoiceService} from "../../../../../services/index";


function LIC9020({params}) {
    const [loading,setLoading]= useState(false);
    const [facData,setFacData]=useState({communityName:"",buildingNumber:"",licenseeName:"", date:""})
    const [resData, setResData] =useState([{room:"",residentName:"",status:"",physician:{name:"", address:"",city:"",state:"",pin:"",mobile:""},responsible:{name:"", address:"",city:"",state:"",pin:"",mobile:""}}])
     
    useEffect(() => {
        // Getting all the data by communityId 
        setLoading(true);
        async function getData(){ 
          let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/community/lic9020/${params?.id}`);
          if(res.variant === "success"){
            setFacData(res.data.facData)
            setResData(res.data.resData)
            setLoading(false);
            setTimeout(function(){
              window.print();
             }, 3000);
           
          }else {console.log(res);  setLoading(false);};    
         }
        if(params?.id){getData()} 
       }, [params?.id])
    if(loading){
        return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Preview...</Typography></div>
    } else
    return (
    <main style={{padding:"20px",backgroundColor:"#fff",minHeight:"100vh"}}>
        <Grid container>
            <Grid item xs={6}>
                <Typography sx={{fontSize:"10px"}}>STATE OF CALIFORNIA—HEALTH AND HUMAN SERVICES AGENCY</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography align="right" sx={{fontSize:"10px"}}> CALIFORNIA DEPARTMENT OF SOCIAL SERVICES</Typography>
            <Typography align="right" sx={{fontSize:"10px"}}>COMMUNITY CARE LICENSING DIVISION </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6">REGISTER OF FACILITY CLIENTS/RESIDENTS</Typography>
            </Grid>
        </Grid>

        <Grid container sx={{borderTop:"medium double black",borderBottom:"1px solid black"}}>
            <Grid item xs={3.5} sx={{borderRight:"2px solid",padding:"0px 10px"}}>
                <Typography sx={{fontSize:"12px"}}>FACILITY NUMBER:</Typography>
                <Typography variant='subtitle2'>{facData?.communityName}</Typography>
            </Grid>
            <Grid item xs={2.5} sx={{borderRight:"2px solid",padding:"0px 10px"}}>
                <Typography sx={{fontSize:"12px"}}>FACILITY NUMBER:</Typography>
                <Typography variant='subtitle2'>{facData?.buildingNumber}</Typography>
            </Grid>
            <Grid item xs={4} sx={{borderRight:"2px solid",padding:"0px 10px"}}>
            <Typography sx={{fontSize:"12px"}}>LICENSEE NAME</Typography>
            <Typography variant='subtitle2'>{facData?.licenseeName}</Typography>
            </Grid>
            <Grid item xs={2} sx={{padding:"0px 10px"}}>
            <Typography sx={{fontSize:"12px"}}>DATE/UPDATE</Typography>
            <Typography variant='subtitle2'>{facData?.date}</Typography>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={1} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"10px"}} align="center" >ROOM IDENTIFIER</Typography>
            </Grid>
            <Grid item xs={3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"10px"}} align="center">CLIENT/RESIDENT <br/>NAME</Typography>
            </Grid>
            <Grid item xs={2} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"10px"}} align="center">AMBULATORY STATUS <br/> RESTRICTED CONDITION(S)</Typography>
            </Grid>
            <Grid item xs={3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"10px"}} align="center">PHYSICIAN</Typography>
            </Grid>
            <Grid item xs={3} sx={{borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"10px"}} align="center">RESPONSIBLE PERSON</Typography>
            </Grid>
        </Grid>
        {resData && resData.map((res,i)=>    
        <Grid container key={i}>
            <Grid item xs={1} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"14px"}} align="center">{res.room}</Typography>
            </Grid>
            <Grid item xs={3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"14px"}}>{res.residentName}</Typography>
            </Grid>
            <Grid item xs={2} sx={{borderRight:"1px solid",borderBottom:"1px solid",paddingLeft:"5px",paddingRight:"5px",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                    <Grid container sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography sx={{fontSize:"10px"}}>AMBULATORY</Typography> 
                    {res.status ==="AMBULATORY" ? <Typography sx={{lineHeight:0.5}} variant='h6'>🗹</Typography>: <Typography sx={{lineHeight:0.5}} variant='h6'>☐</Typography> }
                    </Grid>
                    <Grid container sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography sx={{fontSize:"10px"}}>NON-AMBULATORY</Typography>
                    {res.status ==="NON-AMBULATORY" ? <Typography sx={{lineHeight:0.5}} variant='h6'>🗹</Typography>: <Typography sx={{lineHeight:0.5}} variant='h6'>☐</Typography> }
                    </Grid>
                    <Grid container sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography sx={{fontSize:"10px"}}>BEDRIDDEN</Typography>
                    {res.status ==="BEDRIDDEN" ? <Typography sx={{lineHeight:0.5}} variant='h6'>🗹</Typography>: <Typography sx={{lineHeight:0.5}} variant='h6'>☐</Typography> }
                    </Grid>
            </Grid>
            <Grid item xs={3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}}>
                <Grid container>
                    <Grid item xs={12} sx={{borderBottom:"1px solid",padding:"0px 5px"}}>
                    <Typography variant='caption' sx={{lineHeight:0}}>Name:</Typography>
                    <Typography variant="body2" gutterBottom>{res?.physician?.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{borderBottom:"1px solid",padding:"0px 5px"}}>
                    <Typography variant='caption' sx={{lineHeight:0}}>ADDRESS:</Typography>
                    <Typography variant="body2">{res?.physician?.address}</Typography>
                    <Typography variant="body2" gutterBottom>{`${res?.physician?.city}, ${res?.physician?.state}, ${res?.physician?.pin}`}</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{padding:"0px 5px"}}>
                    <Typography variant='caption' sx={{lineHeight:0}}>PHONE:</Typography>
                    <Typography variant="body2" gutterBottom>{res?.physician?.mobile}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3} sx={{borderBottom:"1px solid"}}>
            <Grid container>
                    <Grid item xs={12} sx={{borderBottom:"1px solid",padding:"0px 5px"}}>
                    <Typography variant='caption' sx={{lineHeight:0}}>Name:</Typography>
                    <Typography variant="body2" gutterBottom>{res?.responsible?.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{borderBottom:"1px solid",padding:"0px 5px"}}>
                    <Typography variant='caption' sx={{lineHeight:0}}>ADDRESS:</Typography>
                    <Typography variant="body2">{res?.responsible?.address}</Typography>
                    <Typography variant="body2" gutterBottom>{`${res?.physician?.city}, ${res?.physician?.state}, ${res?.physician?.pin}`}</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{padding:"0px 5px"}}>
                    <Typography variant='caption' sx={{lineHeight:0}}>PHONE:</Typography>
                    <Typography variant="body2" gutterBottom>{res?.responsible?.mobile}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)}


        <footer style={{position:"absolute",width:"100%",bottom:"10px"}}>
        <Typography sx={{fontSize:"10px"}}>LIC 9020 (8/11) (CONFIDENTIAL)</Typography>
        {/* <Typography align="right" sx={{fontSize:"10px"}}>Page______ of ______</Typography> */}
        </footer>
    </main>
  )
}

export default LIC9020