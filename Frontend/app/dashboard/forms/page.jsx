'use client';
import React, { useState, useEffect, useRef, lazy,Suspense } from 'react'
import {Typography, CircularProgress,Tab, Grid, Button,Divider, Table,TableCell,TableBody, TableHead,TableRow,ButtonGroup, IconButton,Accordion,AccordionSummary,AccordionDetails} from '@mui/material/';
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
  
  const [allForms,setAllForms] = useState([])
  const sortOptions = [{label:"All Forms",value:"all"},{label:"Resident Forms",value:"resident"},{label:"Employee Forms",value:"employee"},{label:"Licensing & Misc.",value:"licensing"}];
  const [sortBy, setSort]= useState("all");
  const [searchText, setSearchText] = useState("");

  async function getForms(){
    setLoading(true)
    let res = await payReceiveService.getPayRec(`api/v1/form/main/allForm/allType`);
    if(res.variant === "success"){
      setLoading(false)
      setAllForms(res.data)
    }else {setLoading(false); console.log(res)};    
   }
   
useEffect(() => {
  // Getting all the Forms
    getForms()
 }, [])


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
        {loading ? <div className="center" style={{flexDirection:"column"}}><CircularProgress size={30}/> <Typography color="slateblue" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Loading Forms...</Typography>  </div> : allForms.length === 0 ? <NoResult label="No Form Available"/> :
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
         </Accordion> ) : <Table size='small'>
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
                  <Button size="small" color="info">Upload</Button>
                    </ButtonGroup>
                    </TableCell>
                  </TableRow>)}
                  </TableBody>
          </Table>}
          <br/>  <br/>
          </Grid> )}
        </Grid>
        }
   <br/>
   <Suspense fallback={<CircularProgress/>}> <FormHistory selector={selector} setSelector={()=>setSelector({open:false})}/> </Suspense>
   <Suspense fallback={<CircularProgress/>}> <FormUpload uploader={uploader} setUploader={()=>setUploader({open:false})} getForms={()=>getForms()}/> </Suspense>

    
    
<MySnackbar ref={snackRef} />
    </main>
  )
}



export default Forms;