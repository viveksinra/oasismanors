'use client';
import "../prospect/prospectStyle.css";
import React, { lazy, Suspense, useEffect } from 'react'
import {Typography, Fab,styled,Avatar,CircularProgress,Rating,Badge,TextField,ToggleButtonGroup,ToggleButton,Tab, Grid,ButtonGroup,AppBar,Toolbar, Button,Tooltip, Table,TableRow,TableCell,TableBody, TableHead, IconButton,TablePagination} from '@mui/material/';
import { useState,useRef} from 'react';
import {TabContext,TabList } from '@mui/lab/';
import { prospectService,ledgerService } from "../../services";
import Link from 'next/link';
import { FiCheck,FiFileMinus } from "react-icons/fi";
import {FcLike,FcLikePlaceholder,FcOrgUnit,FcTimeline,FcExpand} from "react-icons/fc";
import {MdModeEdit,MdSend,MdOutlineClose} from "react-icons/md";
import Autocomplete from '@mui/material/Autocomplete';
import NoResult from "@/app/Components/NoResult/NoResult";
import Search from "../../Components/Search";
import {FaUserPlus } from "react-icons/fa";
import {BsTable } from "react-icons/bs";
import Loading from "../../Components/Loading/Loading";
const Ledger = lazy(() => import("../master/ledger/page"));

function   MyContacts () {
  const [viewTabular,toggleView] = useState(true);
  const [id, setId] =useState("");
  const entryRef = useRef();
 
  return (
    <main> 
      {viewTabular ? <Suspense fallback={<Loading/>}><SearchArea handleEdit={(id)=>{toggleView(false); setId(id)}} />  </Suspense>  : <Suspense fallback={null}><Ledger ref={entryRef} id={id} setId={id=>setId(id)} /></Suspense>}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
        {/* {!viewTabular &&  <Button variant="contained" onClick={() => entryRef.current.handleClear()} startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button> } */}
        <span style={{flexGrow:0.3}}/>
        <Tooltip arrow title={viewTabular ? "Add New Contact" : "Show All"}>
        <ToggleFab onClick={()=>toggleView(!viewTabular)} color="secondary" size="medium">
        {viewTabular ?   <FaUserPlus style={{fontSize:24}}/> : <BsTable style={{fontSize:24}}/>}
        </ToggleFab>
        </Tooltip>
          <span style={{flexGrow:0.3}}/>
          {/* {!viewTabular && <Button variant="contained" onClick={() => entryRef.current.handleSubmit()} startIcon={<FiCheck />} size='small' color="success" >
            { id ? "Update" : "Save"}
          </Button>} */}
      </Toolbar>         
      </AppBar>
       </main>
  )
}

export const ToggleFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -25,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export function SearchArea({handleEdit}) {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [tabular, setView] = useState(false);
  const sortOptions = [{label:"New First",value:"newToOld"},{label:"Important",value:"important"},{label:"Old First",value:"oldToNew"}];
  const [sortBy, setSort]= useState("newToOld");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [group, setGroup] = useState(null);
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    async function fetchAllData() {
      setLoading(true)
      let response = await prospectService.getAll(`api/v1/account/ledger/getLedger/getDataWithPage/${sortBy}/${rowsPerPage}/${page}/${group ? group._id : "allgroup"}/${searchText}`);
      if(response.variant === "success"){
        setLoading(false)
        setRows(response.data)
      }else {console.log(response); setLoading(false)}
    }
    fetchAllData()
  }, [rowsPerPage,page,searchText,sortBy,group])
  
  useEffect(() => {
    // Getting all the Groups
    async function getData(){ 
      let res = await ledgerService.getLedger("api/v1/account/group/getGroup/getAll");
      if(res.variant === "success"){
        setAllGroups(res.data)
      }else {snackRef.current.handleSnack(res); console.log(res)};    
     }
     getData()
   }, [])
 return (
    <main style={{background:"#fff",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:8,padding:10}}>
        <Grid container>
          <Grid item xs={0} md={5}/>
          <Grid item xs={12} md={2}>
          <Typography color="slateblue" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>All Contacts</Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{display:"flex", justifyContent:"end", marginBottom:"20px"}}>
          <Search onChange={e=>setSearchText(e.target.value)} value={searchText} fullWidth endAdornment={<IconButton size="small" sx={{display: searchText ? "block": "none"}} onClick={()=>setSearchText("")}> <MdOutlineClose /></IconButton> } />
          <ToggleButtonGroup aria-label="ViewMode" sx={{display:{xs:"none", md:"block"},marginLeft:"10px",marginRight:"10px"}}>
          <Tooltip arrow title="Grid View">
          <ToggleButton value="grid" onClick={()=>setView(!tabular)} aria-label="gridView">
          <FcOrgUnit/>
          </ToggleButton>
          </Tooltip>
          <Tooltip arrow title="List View">
          <ToggleButton value="list" onClick={()=>setView(!tabular)} aria-label="listView">
          <FcTimeline />
          </ToggleButton>
          </Tooltip>
          </ToggleButtonGroup>
          </Grid>
          <Grid item xs={12} md={6} sx={{maxWidth: { xs: 350, sm: 480,md:700 },marginBottom:"10px"}}>
          <TabContext value={sortBy} variant="scrollable" allowScrollButtonsMobile scrollButtons>
          <TabList onChange={(e,v)=>setSort(v)} aria-label="Sort Tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
          {sortOptions.map((t,i)=> <Tab key={i} iconPosition="bottom" value={t?.value} label={t?.label} />)}
          </TabList>
        </TabContext>
          </Grid>
          <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"right"}}>
          <Autocomplete
            isOptionEqualToValue={(option, value) => option._id === value._id}
            options={allGroups}
            onChange={(e, v) => {
            setGroup(v);
            }}
            value={group}
            groupBy={(option) => option?.natureOfGroup?.label}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option._id}>
                  {option.label}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} sx={{minWidth:"250px"}} variant="standard" label="Filter by : Group"/>}
            /> 
          </Grid>
        </Grid>
       
      {loading ? <div className="center" style={{flexDirection:"column"}}><CircularProgress size={30}/> <Typography color="slateblue" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Loading Contacts...</Typography>  </div> : rows.length === 0 ? <NoResult label="No Prospect Available"/> : tabular ? <Table size="small" sx={{display:{xs:"none", md:"block"}}} aria-label="Contact data Table"> 
      <TableHead>
      <TableRow>
      <TableCell align="left" padding="none" ></TableCell>
      <TableCell align="left">Contact Name </TableCell>
      <TableCell align="left">Contact Group</TableCell>
      <TableCell align="left">Create Date</TableCell>
      <TableCell align="left">Mobile No.</TableCell>
      <TableCell align="left">Email Id</TableCell>
      <TableCell align="left">Voucher No.</TableCell>
      <TableCell align="left">City & State</TableCell>
      <TableCell align="center">Action</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
      {rows && rows.map((r)=>  <TableRow hover key={r._id}> 
        <TableCell align="left" padding="none"> <Badge color="primary" variant="dot" invisible={!Boolean(r.important)}><Avatar alt={r.ledger} src={r.ledgerImage} /> </Badge> </TableCell>
        <TableCell align="left">{r.ledger} </TableCell>
        <TableCell align="left" sx={{minWidth:"120px"}}>{r.group?.label}</TableCell>
        <TableCell align="left">{r.createDate}</TableCell>      
        <TableCell align="left">{r.mobile}</TableCell>
        <TableCell align="left">{r.email}</TableCell>
        <TableCell align="left">{r.voucher}</TableCell>
        <TableCell align="left">{`${r.city}, ${r.state?.label}`}</TableCell>
        <TableCell align="center">
        <ButtonGroup variant="text" aria-label="">
        <Link href={`/dashboard/master/ledger/${r?._id}`}>
        <Button variant="text" startIcon={<MdModeEdit />}>Edit</Button>
        </Link>
       <Link href={`/dashboard/mycontacts/${r._id}`}><Button variant="text" endIcon={<MdSend />}>Explore</Button></Link> 
    </ButtonGroup>
        </TableCell>
      </TableRow> )}
      </TableBody>
      </Table> : <Grid container spacing={2}>
      {rows && rows.map((c,i)=> <Grid item key={i} xs={12} md={4} className="center">
          <div className="prospectCard">
          <Avatar alt={c.ledger} src={c.ledgerImage} sx={{width: "100px", height: "100px", position: "absolute", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px", marginTop: "-20px"}}/>
          <Typography color="teal" variant="h6" sx={{paddingLeft:"120px"}}>{c.ledger}</Typography>
          <Grid container sx={{paddingLeft:"120px"}}>
            <Grid item xs={10}> 
            <Typography color="grey" variant="subtitle2">Group : {c.group?.label}</Typography>
            <Typography color="grey" variant="subtitle2">Voucher No. : {c.voucher}</Typography>
            </Grid>
            <Grid item xs={2}>{c.important ? <FcLike /> : <FcLikePlaceholder/>}</Grid>
          </Grid>      
          <Table size="small" sx={{minHeight:'180px'}} aria-label="Contact data Table">
          <TableBody>
          <TableRow>
          <TableCell align="left" sx={{width:"100px"}}>Created Date </TableCell>
          <TableCell align="right" sx={{width:"120px"}}>{c.createDate}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell align="left">Mobile </TableCell>
          <TableCell align="right">{c.mobile}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell align="left">Email </TableCell>
          <TableCell align="right"><Typography variant="caption">{c.email}</Typography></TableCell>
          </TableRow>
          <TableRow>
          <TableCell align="left">Address </TableCell>
          <TableCell align="right"><Typography variant="caption">{c.street}</Typography><Typography variant="caption">{`${c.city}, ${c.state?.label}`}</Typography> </TableCell>
          </TableRow>
          </TableBody>
          </Table>
          <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"20px"}}>
         <Link href={`/dashboard/master/ledger/${c?._id}`}>
         <Button size="small" variant="outlined" startIcon={<MdModeEdit />}>
           Edit
          </Button>
          </Link> 
          <Link href={`/dashboard/mycontacts/${c._id}`}><Button size="small" variant="contained" endIcon={<MdSend />}>
            Explore
          </Button></Link>
          </div>
          </div>
        </Grid>)}
        <Grid item xs={12}>
        <TablePagination
                rowsPerPageOptions={[10,20,50,100]}
                component="div"
                count={rows.length}
                sx={{overflowX:"hidden"}}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(e,v)=>setPage(v)}
                onRowsPerPageChange={e=>{
                  setRowsPerPage(parseInt(e.target.value, 10));
                  setPage(0)
                }}
              />
        </Grid>
    </Grid> }
   <br/>
    
    <br/> <br/> <br/>
    </main>
  )
}




export default MyContacts;