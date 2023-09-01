'use client';
import React, { lazy, Suspense, useEffect } from 'react'
import {Typography, Fab,styled,Avatar,CircularProgress,Rating, Box,ButtonGroup,AppBar,Toolbar, Button,Tooltip, Chip} from '@mui/material/';
import { useState,useRef} from 'react';
import { prospectService } from "../../services";
import Link from 'next/link';
import { FiCheck,FiFileMinus } from "react-icons/fi";
import NoResult from "@/app/Components/NoResult/NoResult";
import {FaUserPlus } from "react-icons/fa";
import {BsTable } from "react-icons/bs";
import { DataGrid } from '@mui/x-data-grid';
import Loading from "../../Components/Loading/Loading";
const EntryArea = lazy(() => import("./EntryArea"));




function   Prospect () {
  const [viewTabular,toggleView] = useState(true);
  const [id, setId] =useState("");
  const entryRef = useRef();

  return (
    <main> 
      {viewTabular ? <Suspense fallback={<Loading/>}><SearchArea handleEdit={(id)=>{toggleView(false); setId(id)}} />  </Suspense>  : <Suspense fallback={null}><EntryArea ref={entryRef} id={id} /></Suspense>}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
        {!viewTabular &&  <Button variant="contained" onClick={() => entryRef.current.handleClear()} startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button> }
        <span style={{flexGrow:0.3}}/>
        <Tooltip arrow title={viewTabular ? "Add Prospect" : "Show All"}>
        <ToggleFab onClick={()=>toggleView(!viewTabular)} color="secondary" size="medium">
        {viewTabular ?   <FaUserPlus style={{fontSize:24}}/> : <BsTable style={{fontSize:24}}/>}
        </ToggleFab>
        </Tooltip>
          <span style={{flexGrow:0.3}}/>
          {!viewTabular && <Button variant="contained" onClick={() => entryRef.current.handleSubmit()} startIcon={<FiCheck />} size='small' color="success" >
            { id ? "Update" : "Save"}
          </Button>}
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
  const [rows, setRows] = useState([])
  useEffect(() => {
    async function fetchAllData() {
      setLoading(true)
      let response = await prospectService.getAll();
      if(response.variant === "success"){
        setLoading(false)
        setRows(response.data)
      }else {console.log(response); setLoading(false)}
    }
    fetchAllData()
  }, [])
  
const columns = [
  {
    field: 'important',
    headerName: '',
    width: 60,
    editable: false,
    sortable: false,
    renderCell: (params) => <Avatar alt={params?.row?.firstName} src={params?.row?.userImage} />,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'inquiryDate',
    headerName: 'Inquiry Date',
    width: 110,
  },
  {
    field: 'prospectStage',
    headerName: 'Prospect Stage',
    width: 140,
    renderCell: (params) => <Chip label={params?.row?.prospectStage} variant="outlined" size="small"  />,
  },
  {
    field: 'prospectScore',
    headerName: 'Conversion Chance',
    width: 150,
    editable: false,
    sortable: false,
    renderCell: (params) => <Rating value={params?.row?.prospectScore} readOnly />,
  },
  {
    field: 'phone',
    headerName: 'Phone No.',
    description: 'Contact Number of the Prospect',
    width: 120,
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
    field: 'action',
    headerName: 'Action',
    editable: false,
    sortable: false,
    width: 150,
    renderCell: ActionBtn,
  },
];

function ActionBtn(props) {
  return (
    <ButtonGroup variant="text" aria-label="">
      <Button onClick={()=>handleEdit(props.row._id)} variant="text">Edit</Button>
       <Link href={`/dashboard/prospect/${props.row._id}`}><Button variant="text">View</Button></Link> 
       <Button  variant="text"></Button>
    </ButtonGroup>
  );
}
  return (
    <main>
      <Box sx={{background:"#fff", borderRadius:"10px", width: '100%' }}>
      <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>All Prospects</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
      {loading ? <div className="center"><CircularProgress size={30}/> </div> : loading === false && rows.length === 0 ? <NoResult label="No Prospect Available"/> : null} 
    </Box>
    </main>
  )
}




export default Prospect;