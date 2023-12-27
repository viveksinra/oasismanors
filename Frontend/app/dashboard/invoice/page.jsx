'use client';
import "../prospect/prospectStyle.css"
import React,{lazy, useState,useEffect,useRef} from 'react'
import {AppBar,Toolbar,Badge,Box,Tab,Grid,Typography, Button,ButtonGroup,Tooltip,Avatar,List,ListItem,ListItemText,ListItemButton,ListItemAvatar,Chip, Divider, Dialog,DialogTitle} from '@mui/material/';
import {TabList,TabContext} from '@mui/lab/';
import {FaFileMedical } from "react-icons/fa";
import {FiFileMinus,FiCheck,FiPauseCircle,FiPlayCircle } from "react-icons/fi";
import {FcLike} from "react-icons/fc";
import {BsTable } from "react-icons/bs";
import {ToggleFab} from "../residents/page";
import { DataGrid } from '@mui/x-data-grid';
import { invoiceService } from "../../services";
import NoResult from "@/app/Components/NoResult/NoResult";
const EntryInvoice = lazy(() => import("./EntryInvoice"));

function Invoice({prospectId}) {
  const [viewTabular,toggleView] = useState(true);
  const [id, setId] =useState("");
  const entryRef = useRef();

  
  return (
    <main style={{marginTop:20}}> 
      {viewTabular ? <SearchInvoice prospectId={prospectId}  handleEdit={(id)=>{toggleView(false); setId(id);}} />  : <EntryInvoice id={id} setId={e=>setId(e)} prospectId={prospectId} ref={entryRef} />}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
        {!viewTabular &&  <Button variant="contained" onClick={() => entryRef.current.handleClear()} startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button> }
        <span style={{flexGrow:0.3}}/>
        <Tooltip arrow title={viewTabular ? "Add New Invoice" : "Show All"}>
        <ToggleFab onClick={()=> toggleView(!viewTabular)} color="secondary" size="medium">
        {viewTabular ?   <FaFileMedical style={{fontSize:24}}/> : <BsTable style={{fontSize:24}}/>}
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



function SearchInvoice({prospectId, handleEdit}) {
  const [user, setUser] = useState({_id:"all",firstName:"All Residents", lastName:"", room:{label:"All"}, seat:{label:""},important: true,userImage:"https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/users5.png"})
  const [rows, setRow] = useState([]);
  const [allData, setAllData] = useState([]);
  const [medTab, setMTab]= useState("All Invoices");
  const [selectResBox, setResBox] = useState(false);
  const [allResident, setAllRes] = useState([{_id:"sdsdwe21",firstName:"All Residents", lastName:"",userImage:"https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/users5.png", room:"All",seat:"", floor:""},{_id:"sd21515",firstName:"John", lastName:"Peter",userImage:"", room:"102",seat:"", floor:"1st Floor"},{_id:"w1e1w",firstName:"Alwa",seat:"", lastName:"Dicusta", userImage:"", room:"102", floor:"2nd Floor"}])
  const [summary, setSummary] = useState({noOfInvoice:"",invoiceValue:"",noOfDues:"", totalDues:"",noOfFullPaid:"",totalFullPaid:"",noOfPartial:"", totalPartial:""})

  useEffect(() => {
    async function fetchAllData() {
      let res = await invoiceService.getLedger(`api/v1/residence/invoice/getInvoice/mainTable/${user?._id}/10000/0`, prospectId);
      if(res.variant === "success"){
        setAllData(res?.data)
        setSummary(res?.summary)
        setAllRes(res?.residence)
      }else console.log(res)
    }  
    fetchAllData() 
  }, [user])

  useEffect(() => {
    let filtArr = allData.filter(f => {
      if(medTab === "All Invoices"){
        return f
      }else if(medTab === "Total Paid"){
        return f?.status === "Total Paid";
      }else if(medTab === "Dues"){
        return f?.status ==="Dues"
      }else if(medTab === "Partially Paid"){
        return f?.status ==="Partial Paid";
      }else if(medTab === "Upcoming"){
        return f?.isUpcoming === true;
      }
       })
       setRow(filtArr)
  }, [medTab,allData])
   
  const columns = [
      {
        field: 'ledgerImage',
        headerName: '',
        width: 60,
        editable: false,
        sortable: false,
        renderCell: (params) => <Avatar alt={params?.row?.ledgerName} src={params?.row?.ledgerImage} />,
      },
     {
        field: 'ledgerName',
        headerName: 'Ledger Name',
        width: 240,
        sortable: false,
      },
      {
        field:"payerName",
        headerName:"Payer Name",
        width: 240,
        sortable: false,
      },
      {
        field:"netAmount",
        headerName:"Total ($)",
        width: 120,
        sortable: false,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 120,
        sortable: false,
        renderCell: props=> <Chip label={props?.row?.isUpcoming ? "Upcoming" : props?.row?.status} size="small" color={props?.row?.isUpcoming ? "secondary" : props?.row?.status==="Total Paid" ? "success" : props?.row?.status==="Partial Paid" ? "info" : "error" } />
      },
      {
        field: 'paid',
        headerName: 'Paid ($)',
        width: 120,
        sortable: false,
        renderCell: props=> <Typography variant="subtitle1" color="darkgreen">{props?.row?.paid} </Typography>
      },
      {
        field: 'dues',
        headerName: 'Dues ($)',
        width: 120,
        sortable: false,
        renderCell: props=> <Typography variant="subtitle1" color="deeppink">{props?.row?.dues} </Typography>
      },
      {
        field:"tranDate",
        headerName:"Invoice Date",
        width: 150,
        sortable: false,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 120,
        sortable: false,
        editable: false,
        renderCell: props=> <ButtonGroup variant="text" aria-label="text button group">
       <Button onClick={()=>handleEdit(props?.row?._id)} variant="text">Edit</Button> 
       <Button href={`/print/invoice/${props?.row?.voucher}`} target="_blank" rel="noopener noreferrer" variant="text">Print</Button>
        <Button>Three</Button>
      </ButtonGroup>
      },
    ];
  return (
    <main>
        <div className="profileBg">
        <Tooltip title="Change Resident" open={true} placement="top" arrow>
            <Avatar alt="Remy Sharp" sx={{cursor: "pointer"}} onClick={()=>setResBox(!selectResBox)} src={user?.userImage} className="userAvatar"/>
        </Tooltip>
        <div className="userName">
        <Badge invisible={!user?.important} badgeContent={<FcLike style={{fontSize:18}}/>} color="primary">
        <h3 style={{cursor: "pointer"}} onClick={()=>setResBox(!selectResBox)}>{`${user?.firstName} ${user?.lastName}`}</h3>
        </Badge>
        <p>Room : <b>{`${user?.room?.label} ${user?.seat?.label}`}</b> </p>
        </div> 
        <div className="recurringBox" style={{top:"13%",maxWidth:"500px"}}>
            <Grid container>
                <Grid item xs={12} md={5.5}>
                <List>
                <ListItem disablePadding>
                    <ListItemText primary={`Total Invoice :  (${summary?.noOfInvoice})`} />
                    <Typography color="darkmagenta">$ {summary?.invoiceValue}</Typography>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary={`Total Dues : (${summary?.noOfDues})`} />
                    <Typography color="darkmagenta">$ {summary?.totalDues}</Typography>
                </ListItem>
                </List> 
                </Grid>
                <Grid item xs={12} md={1} className="center">
                <Divider orientation="vertical" />
                </Grid>
                <Grid item xs={12} md={5.5}>
                <List>
                <ListItem disablePadding>
                    <ListItemText primary={`Total Full Paid : (${summary?.noOfFullPaid})`} />
                    <Typography color="darkgreen">
                    $ {summary?.totalFullPaid}
                    </Typography>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText primary={`Partial Paid : (${summary?.noOfPartial})`} />
                    <Typography color="darkmagenta"> $ {summary?.totalPartial}</Typography>
                </ListItem>
                </List> 
                     </Grid>
            </Grid>
        </div>
        <div className="profileBgBtm">
        <TabContext value={medTab} variant="scrollable" allowScrollButtonsMobile scrollButtons>
        <TabList onChange={(e,v)=>setMTab(v)} sx={{height:40,float:"right"}} aria-label="MedsTabs">
        {["All Invoices", "Dues", "Total Paid","Partially Paid", "Upcoming",].map((t,i)=> <Tab key={i} value={t} label={t}  />)}
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
      {rows.length === 0 && <NoResult label="No Invoice Available."/>}
      
      <Dialog onClose={()=>setResBox(false)} open={selectResBox}>
      <DialogTitle>Select One Resident</DialogTitle>
      <List sx={{ pt: 0, maxHeight:"700px" }} dense>
        {allResident.map((r) => (
          <ListItem key={r._id} disableGutters>
            <ListItemButton onClick={() => {setUser(r); setResBox(false)}} >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "blue", color: "white", }} src={r?.userImage} alt="User Image" />
              </ListItemAvatar>
              <ListItemText primary={`${r?.firstName} ${r?.lastName}`} secondary={`${r?.community?.communityName ?? "All"}, Room : ${r?.room?.label}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>

    </Box>
    </main>
  )
}



export default Invoice