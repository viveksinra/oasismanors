'use client';
import React,{useState,useEffect, Fragment} from 'react'
import {Typography,  Grid,CircularProgress} from '@mui/material/';
import {invoiceService} from "../../../../services/index";
import Link from 'next/link';

function LIC405({params}) {
    const [loading,setLoading]= useState(false);
    const [headData,setHeadData]=useState({residentName:"",facilityNumber:"",year:""})
    const [tranData,setTranData]= useState([])
    
    useEffect(() => {
        // Getting all the data
        setLoading(true);
        async function getData(){ 
          let res = await invoiceService.getLedger(`api/v1/form/formFunction/getFormData/residence/lic405/${params?.id}`);
          if(res.variant === "success"){
            setHeadData(res.data.residentInfo);
            setTranData(res.data.formattedData);
            setLoading(false);
            setTimeout(function(){
              window.print();
             }, 3000);
           
          }else {console.log(res);  setLoading(false);};    
         }
         getData()
       }, [])

    if(loading){
        return <div className='center' style={{width:"100%", height:"800px", flexDirection:"column"}}> <CircularProgress/><Typography variant="h6" color="teal">Loading Preview...</Typography></div>
    } else
    return (
    <main style={{padding:"20px",backgroundColor:"#fff",minHeight:"100vh"}}>
        <Grid container>
            <Grid item xs={7}>
                <Typography sx={{fontSize:"12px"}}>STATE OF CALIFORNIA—HEALTH AND HUMAN SERVICES AGENCY</Typography>
            </Grid>
            <Grid item xs={5}>
            <Typography align="right" sx={{fontSize:"12px"}}> CALIFORNIA DEPARTMENT OF SOCIAL SERVICES</Typography>
            <Typography align="right" sx={{fontSize:"12px"}}>COMMUNITY CARE LICENSING DIVISION </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography gutterBottom sx={{fontWeight:600}} variant="h6">RECORD OF CLIENT'S/RESIDENT'S <br/>
                SAFEGUARDED CASH RESOURCES </Typography>
            <Typography variant="body2" gutterBottom sx={{fontWeight:600}}>Client/resident: Your signature below indicates you have<br/>
                    received the following amount of money from the facility <br/>
                    on the date indicated.</Typography>
                <Typography variant="subtitle2" sx={{fontStyle: "italic"}}>Facilities that handle client's/resident's cash resources must
                maintain accurate records of all money received and disbursed.  </Typography>
            </Grid>
            <Grid item xs={6} sx={{paddingLeft:"25px"}}>
            <Typography variant="h6" sx={{fontWeight:600}}>INSTRUCTIONS:</Typography>
           <ol>
            <li><Typography variant="body2">The date of the transaction shall be noted under Date.</Typography> </li>
            <li><Typography variant="body2">Use a separate line for each transaction. </Typography></li>
            <li><Typography variant="body2">Supporting receipts for purchases shall be filed in order of dates of purchases.</Typography></li>
            <li><Typography variant="body2">The client's/resident's (or client's/resident's representative) signature on this form may serve as a receipt for cash distribution to the client/resident. (Sec. 80026(h)(1)(A) and 87227(g)(1)(A). </Typography> </li>
            <li><Typography variant="body2">The facility representative’s signature is necessary to be able to verify a cash transaction. </Typography> </li>
           </ol>
            </Grid>
        </Grid>

        <Grid container sx={{borderTop:"medium double black",borderBottom:"1px double black "}}>
            <Grid item xs={6} sx={{borderRight:"2px solid",padding:"0px 10px"}}>
                <Typography sx={{fontSize:"12px"}}>NAME OF CLIENT/RESIDENT: </Typography>
                <Typography variant="body1" color="blue">{headData?.residentName}</Typography>
            </Grid>
            <Grid item xs={4} sx={{borderRight:"2px solid",padding:"0px 10px"}}>
                <Typography sx={{fontSize:"12px"}}>FACILITY NUMBER:</Typography>
                <Typography variant="body1" color="blue">{headData?.facilityNumber}</Typography>
            </Grid>
            <Grid item xs={2} sx={{borderRight:"none",padding:"0px 10px"}}>
            <Typography sx={{fontSize:"12px"}}>YEAR</Typography>
            <Typography variant="body1" color="blue">{headData?.year}</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={1} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"12px"}} align="center">DATE</Typography>
            </Grid>
            <Grid item xs={3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"12px"}} align="center">DESCRIPTION</Typography>
            </Grid>
            <Grid item xs={1.3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"12px"}} align="center">AMOUNT <br/>RECEIVED</Typography>
            </Grid>
            <Grid item xs={1.3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"10px"}} align="center">AMOUNT SPENT OR WITHDRAWN</Typography>
            </Grid>
            <Grid item xs={1.4} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
            <Typography sx={{fontWeight:600,fontSize:"12px"}} align="center">BALANCE</Typography>
            </Grid>
            <Grid item xs={4} sx={{borderBottom:"1px solid"}}>
            <Typography sx={{fontWeight:600,fontSize:"12px"}} align="center">SIGNATURE FOR CASH TRANSACTIONS</Typography>
            <Grid container>
                <Grid item xs={6} sx={{borderRight:"1px solid"}}>
                <Typography sx={{fontSize:"10px"}} align="center">FACILITY REPRESENTATIVE</Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography sx={{fontSize:"10px"}} align="center">CLIENT/RESIDENT
                    OR REPRESENTATIVE </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Grid>

        <Grid container>  
        {tranData?.map((t,i)=><Fragment key={i}>
                <Grid item xs={1} sx={{borderRight:"1px solid", borderBottom:"1px solid"}} className='center'>
                <Typography sx={{fontWeight:600,fontSize:"10px"}} color="blue" align="center">{t?.date}</Typography>
                </Grid>
                <Grid item xs={3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
                <Typography sx={{fontWeight:600,fontSize:"12px"}} color="blue" align="center">{t?.desc}</Typography>
                </Grid>
                <Grid item xs={1.3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
                <Typography sx={{fontWeight:600,fontSize:"14px"}} color="green" align="center"><Link target={t?.receipt ? "_blank" : "_self"} rel="noopener noreferrer" href={t?.receipt ? `/dashboard/receipt/${t?.voucher}` : {}}>{t?.receipt}</Link> </Typography>
                </Grid>
                <Grid item xs={1.3} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
                <Typography sx={{fontWeight:600,fontSize:"14px"}} color="tomato" align="center"><Link target={t?.payment ? "_blank" : "_self"} rel="noopener noreferrer" href={t?.payment ? `/dashboard/payment/${t?.voucher}` : {} }>{t?.payment}</Link> </Typography>
                </Grid>
                <Grid item xs={1.4} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
                <Typography sx={{fontWeight:600,fontSize:"14px"}} color="teal" align="center">{t?.balance}</Typography>
                </Grid>
                <Grid item xs={2} sx={{borderRight:"1px solid",borderBottom:"1px solid"}} className='center'>
                
                </Grid>
                <Grid item xs={2} sx={{borderBottom:"1px solid"}} className='center'>
                
                </Grid>
             </Fragment>)}
        </Grid>


        <footer style={{position:"absolute",width:"100%",bottom:"10px"}}>
        <Typography sx={{fontSize:"10px"}}>LIC 9020 (8/11) (CONFIDENTIAL)</Typography>
        {/* <Typography align="right" sx={{fontSize:"10px"}}>Page______ of ______</Typography> */}
        </footer>
    </main>
  )
}

export default LIC405