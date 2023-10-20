'use client';
import React, { Suspense, lazy, useEffect } from 'react'
import {Typography, Fab,styled, Avatar, Box,CircularProgress,AppBar,Toolbar, Button,Tooltip,IconButton,ToggleButtonGroup,ToggleButton, Grid} from '@mui/material/';
import { useState,useRef} from 'react';
import { employeeService } from "../../services";
import {TabContext,TabList } from '@mui/lab/';
import { FiCheck,FiFileMinus,FiEdit } from "react-icons/fi";
import {FcOrgUnit,FcTimeline} from "react-icons/fc";
import Search from "../../Components/Search";
import {FaUserPlus } from "react-icons/fa";
import {BsTable } from "react-icons/bs";
import { DataGrid } from '@mui/x-data-grid';
import NoResult from "@/app/Components/NoResult/NoResult";
import { useRouter } from 'next/navigation';
import {MdOutlineClose} from "react-icons/md";

const EntryArea = lazy(() => import("./[tab]/[id]/page"));



 

function   Employee () {
  const [viewTabular,toggleView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const sortOptions = [{label:"New First",value:"newToOld"},{label:"Rating",value:"rating"},{label:"Important",value:"important"},{label:"Old First",value:"oldToNew"}];
  const [sortBy, setSort]= useState("newToOld");
  
  const [id, setId] =useState("");
  const entryRef = useRef();
  useEffect(() => {
    async function fetchAllData() {
      setLoading(true)
      let response = await employeeService.getEmployee("api/v1/employee/basic/getEmployee/getAll", "");
      if(response.variant === "success"){
        setLoading(false)
        setRows(response.data)
      }else {console.log(response);setLoading(false)}
    }
    fetchAllData()
  }, [])
      const columns = [
      {
        field: 'userImage',
        headerName: '',
        width: 60,
        renderCell: props=> <Avatar alt={props?.row?.firstName} src={props?.row?.userImage} />,
      },
      {
        field: 'firstName',
        headerName: 'First name',
        width: 120,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 120,
      },
      {
        field: 'jobRole',
        headerName: 'Designation',
        width: 120,
      },

      {
        field: 'mobile',
        headerName: 'Phone No.',
        description: 'Contact Number of the Employee',
        width: 130,
      },
      {
        field: 'email',
        headerName: 'Email Id',
        width: 160,
      },
      {
        field: 'city',
        headerName: 'City',
        width: 110,
      },
      {
        field: 'state',
        headerName: 'State',
        width: 110,
      },
      {
        field: 'status',
        headerName: 'Status',
        editable: false,
        width: 160,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 120,
        renderCell: props=> <Button startIcon={<FiEdit/>} onClick={()=>router.push(`/dashboard/employee/${props?.row?._id}`)}>Edit</Button>,
      },
      ];


  return (
    <main> 
      <Box sx={{background:"#fff", borderRadius:"10px", width: '100%' }}>
        <Grid container spacing={2}>
        <Grid item xs={0} md={5}/>
        <Grid item xs={12} md={2}>
        <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>All Employee</Typography>
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
          <Grid item xs={12} sx={{maxWidth: { xs: 350, sm: 480,md:700 },marginBottom:"10px"}}>
          <TabContext value={sortBy} variant="scrollable" allowScrollButtonsMobile scrollButtons>
          <TabList onChange={(e,v)=>setSort(v)} aria-label="Sort Tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
          {sortOptions.map((t,i)=> <Tab key={i} iconPosition="bottom" value={t?.value} label={t?.label} />)}
          </TabList>
        </TabContext>
          </Grid> 
        </Grid>
        
     

       
          {loading ? <div className="center"><CircularProgress size={30}/> </div> : loading === false && rows.length === 0 ? <NoResult label="No Employee Available."/> :  <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: { 
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />} 
      </Box>

      {/* {viewTabular ? <Suspense fallback={<Loading/>} > <SearchArea handleEdit={(id)=>{toggleView(false); setId(id)}} />  </Suspense>   : <Suspense fallback={null}> <EntryArea ref={entryRef}/> </Suspense>} */}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <Tooltip arrow title="Add New Employee">
        <ToggleFab onClick={()=>router.push("/dashboard/employee/new")} color="secondary" size="medium">
        {viewTabular ?   <FaUserPlus style={{fontSize:24}}/> : <BsTable style={{fontSize:24}}/>}
        </ToggleFab>
        </Tooltip>
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




export default Employee;