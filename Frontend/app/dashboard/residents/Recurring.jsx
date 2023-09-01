'use client';
import "../prospect/prospectStyle.css"
import React,{lazy, useState,useEffect,useRef} from 'react'
import {AppBar,Toolbar,Badge,Box,Tab,Grid,Typography, Button,Tooltip,Avatar,List,ListItem,ListItemText,Chip, Divider, IconButton} from '@mui/material/';
import {TabList,TabContext} from '@mui/lab/';
import {FaUserPlus } from "react-icons/fa";
import {FiFileMinus,FiCheck,FiPauseCircle,FiPlayCircle } from "react-icons/fi";
import {FcLike} from "react-icons/fc";
import {BsTable } from "react-icons/bs";
import {ToggleFab} from "./page"
import { DataGrid } from '@mui/x-data-grid';
import { careService } from "../../services";
const EntryRecurring = lazy(() => import("./EntryRecurring"));

function Recurring({prospectId}) {
  const [viewTabular,toggleView] = useState(true);
  const [id, setId] =useState("");
  const entryRef = useRef();

  
  return (
    <main style={{marginTop:20}}> 
      {viewTabular ? <SearchMedication prospectId={prospectId}  handleEdit={(id)=>{toggleView(false); setId(id);}} />  : <EntryRecurring id={id} setId={e=>setId(e)} prospectId={prospectId} ref={entryRef} />}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
        {!viewTabular &&  <Button variant="contained" onClick={() => entryRef.current.handleClear()} startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button> }
        <span style={{flexGrow:0.3}}/>
        <Tooltip arrow title={viewTabular ? "Add Recurring Charge" : "Show All"}>
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
  const [medTab, setMTab]= useState("All Charges");
  const [careLevel, setCareLevel] = useState("");
  const [carePrice, setCarePrice] = useState("");
  const [totalNexPay, setTotalPay] = useState("")
  const [nextRecDate, setNRD]= useState("");
  const [recStatus, setRecStatus] = useState(true);
  

  useEffect(() => {
    async function fetchAllData() {
      let res = await careService.getCare(`api/v1/residence/recPayment/getRecPayment/getAll`, prospectId);
      if(res.variant === "success"){
        setUser(res?.user)
        setAllData(res?.data)
        setCareLevel(res?.recInfo.careLevel);
        setCarePrice(res?.recInfo.carePrice);
        setTotalPay(res?.recInfo.totalNexPay);
        setRecStatus(res?.recInfo.recStatus)
        setNRD(res?.recInfo.nextRecDate);
      }else console.log(res)
    }  
    fetchAllData() 
  }, [])

  useEffect(() => {
    let filtArr = allData.filter(f => {
      if(medTab === "All Charges"){
        return f
      }else if(medTab === "One Time"){
        return f?.recurring === false;
      }else if(medTab === "Upcoming"){
        return f?.isUpcoming === true;
      }else if(medTab === "Active"){
        return f?.discontinue === false && f?.isUpcoming === false && f?.recurring === true;
      }else if(medTab === "Discontinued Charges"){
        return f?.discontinue === true;
      }
       })
       setRow(filtArr)
  }, [medTab,allData])
  const handleBillingStatus =()=>{
    let y = confirm(`Are you sure to change Recurring Billing Status to ${recStatus ? "Paused" : "Active"} ?`) 
    if(y){
      console.log("Change Billing Status");
      setRecStatus(!recStatus)
    }
  }
  const columns = [
     {
        field: 'itemLabel',
        headerName: 'Billing Item',
        width: 280,
        sortable: false,
      },
      {
        field:"price",
        headerName:"Price",
        width: 100,
        sortable: false,
      },
      {
        field:"status",
        headerName:"Status",
        width: 100,
        sortable: false,
        renderCell: props=> <Chip label={props?.row?.recurring===false ? "One Time" : props?.row?.isUpcoming ? "Upcoming" : props?.row?.discontinue ? "Inactive" : "Active"} size="small" color={props?.row?.recurring===false ? "success" : props?.row?.isUpcoming ? "info" : props?.row?.discontinue ? "secondary" : "primary" } />
      },
      {
        field: 'payerTypeLabel',
        headerName: 'Payer Type',
        width: 150,
        sortable: false,
      },
      {
        field: 'payerLabel',
        headerName: 'Payer',
        width: 150,
        sortable: false,
      },
      {
        field:"description",
        headerName:"Description",
        width: 230,
        sortable: false,
      },
      {
        field:"startDateT",
        headerName:"Start Date",
        width: 150,
        sortable: false,
      },
      {
        field:"endDateT",
        headerName:"End Date",
        width: 150,
        sortable: false,
      },
      {
        field:"lastModified",
        headerName:"Last Modified",
        width: 140,
        sortable: false,
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
        <div className="recurringBox">
            <Grid container>
                <Grid item xs={12} md={5.5}>
                <List>
                <ListItem disablePadding>
                    <ListItemText primary={`Current Care Level:   (${careLevel})`} />
                    <Typography color="darkmagenta">$ {carePrice}</Typography>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Estimated Next Period Fees:" />
                    <Typography color="darkmagenta">$ {totalNexPay}</Typography>
                </ListItem>
                </List> 
                </Grid>
                <Grid item xs={12} md={1} className="center">
                <Divider orientation="vertical" />
                </Grid>
                <Grid item xs={12} md={5.5}>
                <List>
                <ListItem disablePadding>
                    <ListItemText primary="Recurring Billing Status:" />
                    <Tooltip title={recStatus ? "Pause All Recurring Bill" : "Change to Active"} arrow placement="left-start"> 
                    <Badge
                      overlap="circular"
                      badgeContent={
                        <IconButton onClick={handleBillingStatus}> {recStatus ? <FiPauseCircle style={{fontSize:20,marginTop:"-20px"}} /> : <FiPlayCircle style={{fontSize:20,marginTop:"-20px"}}/> } </IconButton> 
                      }
                    >
                    <Typography color={recStatus ? "darkgreen" : "secondary" }>
                    {recStatus ? "Active" : "Paused"}
                    </Typography>
                      </Badge>
                      </Tooltip>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary="Next Recurring Date:" />
                    <Typography color="darkmagenta">{nextRecDate}</Typography>
                </ListItem>
                </List> 
                     </Grid>
            </Grid>
        </div>
        <div className="profileBgBtm">
        <TabContext value={medTab} variant="scrollable" allowScrollButtonsMobile scrollButtons>
        <TabList onChange={(e,v)=>setMTab(v)} sx={{height:40,float:"right"}} aria-label="MedsTabs">
        {["All Charges","One Time", "Upcoming", "Active","Discontinued Charges"].map((t,i)=> <Tab key={i} value={t} label={t}  />)}
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



export default Recurring