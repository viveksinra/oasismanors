'use client';
import "../../prospect/[prospectId]/prospectStyle.css"
import React,{lazy, useState,useEffect,useRef} from 'react'
import {AppBar,Toolbar,Badge,Box,Tab, Button,Tooltip,Avatar,Menu,MenuItem} from '@mui/material/';
import {TabList,TabContext} from '@mui/lab/';
import {FaUserPlus } from "react-icons/fa";
import {FiFileMinus,FiCheck } from "react-icons/fi";
import {FcLike} from "react-icons/fc";
import {BsTable } from "react-icons/bs";
import {ToggleFab} from "../page"
import { DataGrid } from '@mui/x-data-grid';
import { medicationService } from "../../../services";
const EntryCare = lazy(() => import("./EnterCare"));

function Care({prospectId}) {
  const [viewTabular,toggleView] = useState(true);
  const [id, setId] =useState("");
  const entryRef = useRef();

  
  return (
    <main style={{marginTop:20}}> 
      {viewTabular ? <SearchMedication prospectId={prospectId}  handleEdit={(id)=>{toggleView(false); setId(id);}} />  : <EntryCare id={id} setId={e=>setId(e)} prospectId={prospectId} ref={entryRef} />}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
        {!viewTabular &&  <Button variant="contained" onClick={() => entryRef.current.handleClear()} startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button> }
        <span style={{flexGrow:0.3}}/>
        <Tooltip arrow title={viewTabular ? "Add Medication/Treatment" : "Show All"}>
        <ToggleFab onClick={()=> toggleView(!viewTabular)} color="secondary" size="medium">
        {viewTabular ?   <FaUserPlus style={{fontSize:24}}/> : <BsTable style={{fontSize:24}}/>}
        </ToggleFab>
        </Tooltip>
          <span style={{flexGrow:0.3}}/>
          {!viewTabular && <Button variant="contained" onClick={() => entryRef.current.handleSubmit()} startIcon={<FiCheck />} size='small' color="success" >
            {id ? "Update" : "Save"}
          </Button>}
      </Toolbar>
     
      </AppBar>
      
       </main>
  )
}



function SearchMedication({prospectId, handleEdit}) {
  const [user, setUser] = useState({firstName:"Name Loading...", lastName:"", room:"Loading...", seat:"",important: true,userImage:""})
  const [rows, setRow] = useState([]);
  const [allData, setAllData] = useState([]);
  const [medTab, setMTab]= useState("All Care");

//   useEffect(() => {
//     async function fetchAllData() {
//       let res = await medicationService.getMedication(`api/v1/residence/resMed/getResMed/getAll`, prospectId);
//       if(res.variant === "success"){
//         setUser(res?.user)
//         setAllData(res?.data)
//       }else console.log(res)
//     }
//     fetchAllData() 
//   }, [])

//   useEffect(() => {
//     let filtArr = allData.filter(f => {
//       if(medTab === "Active Medications"){
//         return f?.type === "medication" && f?.discontinue === false
//       }else if(medTab === "Active Treatments"){
//         return f?.type === "treatment" && f?.discontinue === false
//       }else if(medTab === "Discontinued Medications"){
//         return f?.type === "medication" && f?.discontinue === true
//       }else if(medTab === "Discontinued Treatments"){
//         return f?.type === "treatment" && f?.discontinue === true
//       }
//        })
//        setRow(filtArr)
//   }, [medTab,allData])
  

  const columns = [
      {
        field: 'image',
        headerName: '',
        width: 80,
        renderCell: props=> <Avatar alt={props?.row?.name} src={props?.row?.image} variant="square" />,
      },
      {
        field: 'care',
        headerName: 'Care Title',
        width: 250,
      },
      {
        field: 'careType',
        headerName: 'Care Type',
        width: 150,
      },
      {
        field:"point",
        headerName:"Care Points",
        width: 150,
      },
      {
        field:"frequency",
        headerName:"Frequency",
        width: 150,
      },
      {
        field:"manpower",
        headerName:"Manpower",
        width: 150,
      },
      {
        field:"instruction",
        headerName:"Instruction",
        width: 200,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 120,
        sortable: false,
        renderCell: props=> <Button onClick={()=>handleEdit(props?.row?._id)} variant="text">Edit</Button>,
      },
    ];
  return (
    <main>
        <div className="profileBg">
        <label htmlFor="image">
        <input type="file" id="image" style={{display:"none",}} onChange={(e) => imgUpload(e.target.files[0])}  accept="image/*"  />
        <Tooltip title="Upload Your Photo" arrow>
        <Avatar alt="Remy Sharp" sx={{cursor: "pointer"}} src={user?.userImage} className="userAvatar"/>
        </Tooltip>
        </label>
        <div className="userName">
        <Badge invisible={!user?.important} badgeContent={<FcLike style={{fontSize:18}}/>} color="primary">
        <h3>{`${user?.lastName} ${user?.firstName}`}</h3>
        </Badge>
        <p>Room : <b>{`${user?.room} ${user?.seat}`}</b> </p>
        </div>
        <div className="profileBgBtm">
        <TabContext value={medTab} variant="scrollable" allowScrollButtonsMobile scrollButtons>
        <TabList onChange={(e,v)=>setMTab(v)} sx={{height:40,float:"right"}} aria-label="MedsTabs">
        {["All Care","Full Care", "Partial Care",].map((t,i)=> <Tab key={i} value={t} label={t}  />)}
        </TabList>
        </TabContext>
        </div>
        </div>
      <Box sx={{background:"#fff", borderRadius:"10px", width: '100%' }}>
      <DataGrid
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
        disableRowSelectionOnClick
      />
    </Box>
    </main>
  )
}



export default Care