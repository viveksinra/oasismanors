'use client';
import React, { useState, useEffect, useRef, lazy,Suspense } from 'react'
import {Typography, CircularProgress,Tab, Grid, Button,Divider, Table,TableCell,TableBody, TableHead,TableRow,ButtonGroup, IconButton,Accordion,AccordionSummary,AccordionDetails,Avatar } from '@mui/material/';
import {TabContext,TabList } from '@mui/lab/';
import { payReceiveService } from "../../services";
import MySnackbar from "../../Components/MySnackbar/MySnackbar";
import Link from 'next/link';
import {MdExpandMore ,MdOutlineClose} from "react-icons/md";
import {FcCheckmark,FcHighPriority} from "react-icons/fc";
import NoResult from "@/app/Components/NoResult/NoResult";
import Search from "../../Components/Search";

const FormHistory = lazy(() => import("./FormHistory"));
const FormUpload = lazy(() => import("./FormUpload"));


export function Forms() {
  const [loading, setLoading] = useState(false);
  const snackRef = useRef();
  const [selector, setSelector] = useState({open:false});
  const [uploader, setUploader] = useState({open:false});
  
  const sortOptions = [{label:"All Forms",value:"all"},{label:"Resident Forms",value:"resident"},{label:"Employee Forms",value:"employee"},{label:"Licensing & Misc.",value:"licensing"}];
  const [sortBy, setSort]= useState("all");
  const [searchText, setSearchText] = useState("");

 

 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}}>
        <Grid container>
          <Grid item xs={0} md={5}/>
          <Grid item xs={12} md={2}>
          <Typography color="slateblue" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>All Forms</Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{display:"flex", justifyContent:"end", marginBottom:"20px"}}>
          <Search onChange={e=>setSearchText(e.target.value)} value={searchText} fullWidth endAdornment={<IconButton size="small" sx={{display: searchText ? "block": "none"}} onClick={()=>setSearchText("")}> <MdOutlineClose /></IconButton> } />
          </Grid>
          <Grid item xs={12} sx={{maxWidth: { xs: 350, sm: 480,md:700 },marginBottom:"10px"}}>
          <TabContext value={sortBy} variant="scrollable" allowScrollButtonsMobile scrollButtons>
          <TabList onChange={(e,v)=>setSort(v)} aria-label="Sort Tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
          {sortOptions.map((t,i)=> <Tab key={i} iconPosition="bottom" value={t?.value} label={t?.label} />)}
          </TabList>
        </TabContext>
          </Grid> 
        </Grid>
        <ResidentForms/> <br/>
        <CommunityForms/><br/>
        <EmployeeForms/>
        {/* {loading ? <div className="center" style={{flexDirection:"column"}}> <CircularProgress size={30}/> <Typography color="slateblue" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Loading Forms...</Typography>  </div> : allForms.length === 0 ? <NoResult label="No Form Available"/> :
        <Grid>
          {allForms.map((f,i)=><Grid key={i}> 
          <Divider><Typography variant="subtitle1" gutterBottom align='center' color="teal">{f?.category}</Typography></Divider>
         {f?.expand ? f?.residentData && f?.residentData.map((r,j)=> <Accordion key={j}>
         <AccordionSummary
          expandIcon={ <MdExpandMore style={{fontSize:24}}  /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div style={{display:"flex",justifyContent:"space-between", width:"95%"}}> 
        <Typography color="teal">{r?.residentName}</Typography>
        <div style={{display:"flex"}}>
        <Typography color="dimgrey" sx={{marginRight:"20px"}}>{`${r?.communityName}, ${r?.room}`}</Typography>
        {r?.missingForm ? <FcHighPriority style={{fontSize:18}}/> : <FcCheckmark style={{fontSize:22}} /> }
        </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <Table size='small'> 
          <TableHead>
                <TableRow>
                  <TableCell align="left">Form Description </TableCell>
                  <TableCell align="left">Form Number</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center">Present</TableCell>
                  <TableCell align="left">Last Modification</TableCell>
                  <TableCell align="left">Last uploaded By</TableCell>
                  <TableCell align="center">Action</TableCell>
                  </TableRow>
            </TableHead>
            <TableBody>  
            {r?.forms && r?.forms.map((m,k)=> <TableRow hover key={k}> 
            <TableCell align="left">{m.formName}</TableCell>
                  <TableCell align="left">{m.formNo}</TableCell>
                  <TableCell align="center">{m.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{m.present ? <FcCheckmark style={{fontSize:22}} /> : m.required ? <FcHighPriority style={{fontSize:18}}/> : null }</TableCell>
                  <TableCell align="left">{m.lastModified}</TableCell>
                  <TableCell align="left">{m.lastUploadBy}</TableCell>
                  <TableCell align="center">
                  <ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m,r})}>History</Button>
                  <Button size="small" color="success"><Link target="_blank" rel="noopener noreferrer" href={`/print/forms/${m?.formNoLink}/${r?._id}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m,r})}>Upload</Button>
                    </ButtonGroup></TableCell>
            </TableRow>  )}
            </TableBody>
        </Table>
    
        </AccordionDetails>
         </Accordion> ) : 
         <Table size='small'>
                  <TableHead>
                  <TableRow>
                    <TableCell align="left">Form Description </TableCell>
                    <TableCell align="left">Form Number</TableCell>
                    <TableCell align="center">Required</TableCell>
                    <TableCell align="center">Present</TableCell>
                    <TableCell align="left">Last Modification</TableCell>
                    <TableCell align="left">Last uploaded By</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {f?.forms.map((t,m)=> <TableRow hover key={m}> 
                  <TableCell align="left">{t.formName}</TableCell>
                  <TableCell align="left">{t.formNo}</TableCell>
                  <TableCell align="center">{t.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{t.present ? <FcCheckmark style={{fontSize:20}} /> : t.required ? <FcHighPriority style={{fontSize:20}}/> : null }</TableCell>
                  <TableCell align="left">{t.lastModified}</TableCell>
                  <TableCell align="left">{t.lastUploadBy}</TableCell>
                  <TableCell align="center"><ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m:t,r:f})}>History</Button>
                  <Button size="small" color="success">
                    <Link target="_blank" rel="noopener noreferrer" href={`/print/forms/${t.formNoLink}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m:t,r:f})}>Upload</Button>
                    </ButtonGroup>
                    </TableCell>
                  </TableRow>)}
                  </TableBody>
          </Table>}
          <br/>  <br/>
          </Grid> )} 
         </Grid>
        } */}
   <br/>
 
    </main>
  )
}



function ResidentForms() {
  const [loading, setLoading] = useState(true);
  const snackRef = useRef();
  const [selector, setSelector] = useState({open:false});
  const [uploader, setUploader] = useState({open:false});
  const [resForms, setResForms] = useState([]);
async function getForms(){
  setLoading(true)
  let res = await payReceiveService.getPayRec(`api/v1/form/main/allForm/allResidence`);
  if(res.variant === "success"){
    setLoading(false)
    setResForms(res.data)
  }else {setLoading(false); console.log(res)};    
 }
 
useEffect(() => {
// Getting all the Forms
  getForms()
}, [])

  return (
    <main>  
      <Divider><Typography variant="subtitle1" gutterBottom align='center' color="teal">Resident File Checklist</Typography></Divider>
      {loading ? <div className="center" style={{flexDirection:"column"}}> <CircularProgress size={30}/> <Typography color="slateblue" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Loading Forms...</Typography>  </div> : resForms.length === 0 ? <NoResult label="No Form Available"/> : resForms.map((r,i)=> <Accordion key={i}>
         <AccordionSummary
          expandIcon={ <MdExpandMore style={{fontSize:24}}  /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        > 
        <div style={{display:"flex",justifyContent:"space-between", alignItems:"center", width:"95%"}}> 
        <Button size="small" sx={{padding:0}} color="success" startIcon={<Avatar sizes="small" alt={r?.residentName} src={r?.userImage} />}> {r?.residentName}</Button>
        <div style={{display:"flex"}}>
        <Typography color="dimgrey" sx={{marginRight:"20px"}}>{`${r?.communityName}, ${r?.room}`}</Typography>
        {r?.missingForm ? <FcHighPriority style={{fontSize:18}}/>  : <FcCheckmark style={{fontSize:22}} />  }
        </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <Table size='small'> 
          <TableHead>
                <TableRow>
                  <TableCell align="left">Form Description </TableCell>
                  <TableCell align="left">Form Number</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center">Present</TableCell>
                  <TableCell align="left">Last Modification</TableCell>
                  <TableCell align="left">Last uploaded By</TableCell>
                  <TableCell align="center">Action</TableCell>
                  </TableRow>
            </TableHead>
            <TableBody>  
            {r?.forms && r?.forms.map((m,k)=> <TableRow hover key={k}> 
            <TableCell align="left">{m.formName}</TableCell>
                  <TableCell align="left">{m.formNo}</TableCell>
                  <TableCell align="center">{m.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{m.present ? <FcCheckmark style={{fontSize:22}} /> : m.required ? <FcHighPriority style={{fontSize:18}}/> : null }</TableCell>
                  <TableCell align="left">{m.lastModified}</TableCell>
                  <TableCell align="left">{m.lastUploadBy}</TableCell>
                  <TableCell align="center">
                  <ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m,r})}>History</Button>
                  <Button size="small" color="success"><Link target="_blank" rel="noopener noreferrer" href={`/print/forms/${m?.formNoLink}/${r?._id}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m,r})}>Upload</Button>
                    </ButtonGroup></TableCell>
            </TableRow>  )}
            </TableBody>
        </Table>
        </AccordionDetails>
         </Accordion>) }
        <Suspense fallback={null}> <FormHistory selector={selector} setSelector={()=>setSelector({open:false})}/> </Suspense>
        <Suspense fallback={null}> <FormUpload uploader={uploader} setUploader={()=>setUploader({open:false})} getForms={()=>getForms()}/> </Suspense>

        <MySnackbar ref={snackRef} />
    </main>
  )
}


function CommunityForms() {
  const snackRef = useRef();
  const [loading, setLoading] = useState(true);
  const [selector, setSelector] = useState({open:false});
  const [uploader, setUploader] = useState({open:false});
  const [comForms, setComForms] = useState([]);
async function getForms(){
  setLoading(true)
  let res = await payReceiveService.getPayRec(`api/v1/form/main/allForm/allCommunity`);
  if(res.variant === "success"){
    setLoading(false)
    setComForms(res.data)
  }else {setLoading(false); console.log(res)};    
 }
 
useEffect(() => {
// Getting all the Forms
  getForms()
}, [])

  return (
    <main>  
      <Divider><Typography variant="subtitle1" gutterBottom align='center' color="teal">Forms for Facility</Typography></Divider>
      {comForms.map((r,i)=> <Accordion key={i}>
         <AccordionSummary
          expandIcon={ <MdExpandMore style={{fontSize:24}}  /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div style={{display:"flex",justifyContent:"space-between", width:"95%"}}> 
        <Typography color="teal">{r?.communityName}</Typography>
        <div style={{display:"flex"}}>
        <Typography color="dimgrey" sx={{marginRight:"20px"}}>{`Building No. ${r?.buildingNumber}`}</Typography>
        {r?.missingForm ? <FcHighPriority style={{fontSize:18}}/> : <FcCheckmark style={{fontSize:22}} /> }
        </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <Table size='small'> 
          <TableHead>
                <TableRow>
                  <TableCell align="left">Form Description </TableCell>
                  <TableCell align="left">Form Number</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center">Present</TableCell>
                  <TableCell align="left">Last Modification</TableCell>
                  <TableCell align="left">Last uploaded By</TableCell>
                  <TableCell align="center">Action</TableCell>
                  </TableRow>
            </TableHead>
            <TableBody>  
            {r?.forms && r?.forms.map((m,k)=> <TableRow hover key={k}> 
            <TableCell align="left">{m.formName}</TableCell>
                  <TableCell align="left">{m.formNo}</TableCell>
                  <TableCell align="center">{m.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{m.present ? <FcCheckmark style={{fontSize:22}} /> : m.required ? <FcHighPriority style={{fontSize:18}}/> : null }</TableCell>
                  <TableCell align="left">{m.lastModified}</TableCell>
                  <TableCell align="left">{m.lastUploadBy}</TableCell>
                  <TableCell align="center">
                  <ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m,r})}>History</Button>
                  <Button size="small" color="success"><Link target="_blank" rel="noopener noreferrer" href={`/print/forms/facilityForms/${m?.formNoLink}/${r?._id}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m,r})}>Upload</Button>
                    </ButtonGroup></TableCell>
            </TableRow>  )}
            </TableBody>
        </Table>
        </AccordionDetails>
         </Accordion>)}

        <Suspense fallback={<CircularProgress/>}> <FormHistory selector={selector} setSelector={()=>setSelector({open:false})}/> </Suspense>
        <Suspense fallback={<CircularProgress/>}> <FormUpload uploader={uploader} setUploader={()=>setUploader({open:false})} getForms={()=>getForms()}/> </Suspense>

        <MySnackbar ref={snackRef} />
    </main>
  )
}




function EmployeeForms() {
  const snackRef = useRef();
  const [loading, setLoading] = useState(true);
  const [selector, setSelector] = useState({open:false});
  const [uploader, setUploader] = useState({open:false});
  const [empForms, setEmpForms] = useState({currentEmp:[{
    _id:"sdsdsd",
    employeeName:"Ratan Kumar Jha",
    communityName:"All",
    missingForm: true,
    forms: [
      {
          formName: "Community Form 1",
          formNo: "LIC 603",
          formNoLink: "lic603",
          required: false,
          present: true,
          lastModified: "Dec 27, 2023",
          lastUploadBy: "Jha Akhilesh"
      },
      {
          formName: "Community Form 2",
          formNo: "LIC 603A",
          formNoLink: "lic603",
          required: true,
          present: true,
          lastModified: "Dec 27, 2023",
          lastUploadBy: "Jha Akhilesh"
      }, ]
  },
],
interviewedEmp:[{
  _id:"sdsdsd",
  employeeName:"Rohit Ranjan",
  interviedDate:"Apr-05-2023",
  missingForm: true,
  forms: [
    {
        formName: "Community Form 1",
        formNo: "LIC 603",
        formNoLink: "lic603",
        required: false,
        present: true,
        lastModified: "Dec 27, 2023",
        lastUploadBy: "Jha Akhilesh"
    },
    {
        formName: "Community Form 2",
        formNo: "LIC 603A",
        formNoLink: "lic603",
        required: true,
        present: true,
        lastModified: "Dec 27, 2023",
        lastUploadBy: "Jha Akhilesh"
    },
   
]
}],
prospectEmp:[{
  _id:"sdsdsd6451",
  employeeName:"Ravi Kumar",
  prospectDate:"May-06-2023",
  communityName:"All",
  missingForm: true,
  forms: [
    {
        formName: "Community Form 1",
        formNo: "LIC 603",
        formNoLink: "lic603",
        required: false,
        present: true,
        lastModified: "Dec 27, 2023",
        lastUploadBy: "Jha Akhilesh"
    },
    {
        formName: "Community Form 2",
        formNo: "LIC 603A",
        formNoLink: "lic603",
        required: true,
        present: true,
        lastModified: "Dec 27, 2023",
        lastUploadBy: "Jha Akhilesh"
    },
   
]
}]
},



 );
// async function getForms(){
//   setLoading(true)
//   let res = await payReceiveService.getPayRec(`api/v1/form/main/allForm/allType`);
//   if(res.variant === "success"){
//     console.log(res.data)
//     setLoading(false)
//     // setAllForms(res.data)
//   }else {setLoading(false); console.log(res)};    
//  }
 
// useEffect(() => {
// // Getting all the Forms
//   getForms()
// }, [])

  return (
    <main>  
      <Divider><Typography variant="subtitle1" gutterBottom align='center' color="teal">Current Employee Forms</Typography></Divider>
      {empForms?.currentEmp && empForms?.currentEmp.map((r,i)=> <Accordion key={i}>
         <AccordionSummary
          expandIcon={ <MdExpandMore style={{fontSize:24}}  /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div style={{display:"flex",justifyContent:"space-between", width:"95%"}}> 
        <Typography color="teal">{r?.employeeName}</Typography>
        <div style={{display:"flex"}}>
        <Typography color="dimgrey" sx={{marginRight:"20px"}}>{`Community : ${r?.communityName}`}</Typography>
        {r?.missingForm ? <FcHighPriority style={{fontSize:18}}/> : <FcCheckmark style={{fontSize:22}} /> }
        </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <Table size='small'> 
          <TableHead>
                <TableRow>
                  <TableCell align="left">Form Description </TableCell>
                  <TableCell align="left">Form Number</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center">Present</TableCell>
                  <TableCell align="left">Last Modification</TableCell>
                  <TableCell align="left">Last uploaded By</TableCell>
                  <TableCell align="center">Action</TableCell>
                  </TableRow>
            </TableHead>
            <TableBody>  
            {r?.forms && r?.forms.map((m,k)=> <TableRow hover key={k}> 
            <TableCell align="left">{m.formName}</TableCell>
                  <TableCell align="left">{m.formNo}</TableCell>
                  <TableCell align="center">{m.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{m.present ? <FcCheckmark style={{fontSize:22}} /> : m.required ? <FcHighPriority style={{fontSize:18}}/> : null }</TableCell>
                  <TableCell align="left">{m.lastModified}</TableCell>
                  <TableCell align="left">{m.lastUploadBy}</TableCell>
                  <TableCell align="center">
                  <ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m,r})}>History</Button>
                  <Button size="small" color="success"><Link target="_blank" rel="noopener noreferrer" href={`/print/forms/${m?.formNoLink}/${r?._id}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m,r})}>Upload</Button>
                    </ButtonGroup></TableCell>
            </TableRow>  )}
            </TableBody>
        </Table>
        </AccordionDetails>
         </Accordion>)}

         <br/>
         <Divider><Typography variant="subtitle1" gutterBottom align='center' color="teal">Interviewed Employee Forms</Typography></Divider>
      {empForms?.interviewedEmp && empForms?.interviewedEmp.map((r,i)=> <Accordion key={i}>
         <AccordionSummary
          expandIcon={ <MdExpandMore style={{fontSize:24}}  /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div style={{display:"flex",justifyContent:"space-between", width:"95%"}}> 
        <Typography color="teal">{r?.employeeName}</Typography>
        <div style={{display:"flex"}}>
        <Typography color="dimgrey" sx={{marginRight:"20px"}}>{`Intervied Date : ${r?.interviedDate}`}</Typography>
        {r?.missingForm ? <FcHighPriority style={{fontSize:18}}/> : <FcCheckmark style={{fontSize:22}} /> }
        </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <Table size='small'> 
          <TableHead>
                <TableRow>
                  <TableCell align="left">Form Description </TableCell>
                  <TableCell align="left">Form Number</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center">Present</TableCell>
                  <TableCell align="left">Last Modification</TableCell>
                  <TableCell align="left">Last uploaded By</TableCell>
                  <TableCell align="center">Action</TableCell>
                  </TableRow>
            </TableHead>
            <TableBody>  
            {r?.forms && r?.forms.map((m,k)=> <TableRow hover key={k}> 
            <TableCell align="left">{m.formName}</TableCell>
                  <TableCell align="left">{m.formNo}</TableCell>
                  <TableCell align="center">{m.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{m.present ? <FcCheckmark style={{fontSize:22}} /> : m.required ? <FcHighPriority style={{fontSize:18}}/> : null }</TableCell>
                  <TableCell align="left">{m.lastModified}</TableCell>
                  <TableCell align="left">{m.lastUploadBy}</TableCell>
                  <TableCell align="center">
                  <ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m,r})}>History</Button>
                  <Button size="small" color="success"><Link target="_blank" rel="noopener noreferrer" href={`/print/forms/${m?.formNoLink}/${r?._id}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m,r})}>Upload</Button>
                    </ButtonGroup></TableCell>
            </TableRow>  )}
            </TableBody>
        </Table>
        </AccordionDetails>
         </Accordion>)}

         <br/>
         <Divider><Typography variant="subtitle1" gutterBottom align='center' color="teal">Prospectous Employee Forms</Typography></Divider>
         {empForms?.prospectEmp && empForms?.prospectEmp.map((r,i)=> <Accordion key={i}>
         <AccordionSummary
          expandIcon={ <MdExpandMore style={{fontSize:24}}  /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div style={{display:"flex",justifyContent:"space-between", width:"95%"}}> 
        <Typography color="teal">{r?.employeeName}</Typography>
        <div style={{display:"flex"}}>
        <Typography color="dimgrey" sx={{marginRight:"20px"}}>{`Prospect Date : ${r?.prospectDate}`}</Typography>
        {r?.missingForm ? <FcHighPriority style={{fontSize:18}}/> : <FcCheckmark style={{fontSize:22}} /> }
        </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
        <Table size='small'> 
          <TableHead>
                <TableRow>
                  <TableCell align="left">Form Description </TableCell>
                  <TableCell align="left">Form Number</TableCell>
                  <TableCell align="center">Required</TableCell>
                  <TableCell align="center">Present</TableCell>
                  <TableCell align="left">Last Modification</TableCell>
                  <TableCell align="left">Last uploaded By</TableCell>
                  <TableCell align="center">Action</TableCell>
                  </TableRow>
            </TableHead>
            <TableBody>  
            {r?.forms && r?.forms.map((m,k)=> <TableRow hover key={k}> 
            <TableCell align="left">{m.formName}</TableCell>
                  <TableCell align="left">{m.formNo}</TableCell>
                  <TableCell align="center">{m.required ? "Yes" : "No" }</TableCell>
                  <TableCell align="center">{m.present ? <FcCheckmark style={{fontSize:22}} /> : m.required ? <FcHighPriority style={{fontSize:18}}/> : null }</TableCell>
                  <TableCell align="left">{m.lastModified}</TableCell>
                  <TableCell align="left">{m.lastUploadBy}</TableCell>
                  <TableCell align="center">
                  <ButtonGroup size="small"  variant="text" aria-label="text button group">
                  <Button size="small" color="info" onClick={()=>setSelector({open:true,m,r})}>History</Button>
                  <Button size="small" color="success"><Link target="_blank" rel="noopener noreferrer" href={`/print/forms/${m?.formNoLink}/${r?._id}`}>View</Link></Button>
                  <Button size="small" color="info" onClick={()=>setUploader({open:true,m,r})}>Upload</Button>
                    </ButtonGroup></TableCell>
            </TableRow>  )}
            </TableBody>
        </Table>
        </AccordionDetails>
         </Accordion>)}

        <Suspense fallback={<CircularProgress/>}> <FormHistory selector={selector} setSelector={()=>setSelector({open:false})}/> </Suspense>
        <Suspense fallback={<CircularProgress/>}> <FormUpload uploader={uploader} setUploader={()=>setUploader({open:false})} getForms={()=>getForms()}/> </Suspense>

        <MySnackbar ref={snackRef} />
    </main>
  )
}

export default Forms;