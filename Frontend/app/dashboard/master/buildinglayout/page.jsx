'use client';
import "./buildingStyle.css";
import React, { useState,useEffect,useRef } from 'react'
import {Grid,Typography,IconButton,TextField,Button,Breadcrumbs,Dialog,DialogTitle,DialogContent,ButtonGroup,DialogActions,Tooltip,Table,TableHead,TableRow,TableBody,TableCell,Input, Divider, List,ListSubheader,ListItemButton,ListItemText, CircularProgress } from '@mui/material/';
import { FcCheckmark,FcHome,FcFullTrash,FcNext,FcFlowChart,FcAddRow,FcDeleteRow,FcTemplate } from "react-icons/fc";
import {MdEditNote} from "react-icons/md";
import MySnackbar from "../../../Components/MySnackbar/MySnackbar";
import { prospectService } from "../../../services";
import clsx from 'clsx';
  
function BuildingLayout() {
    const [building, setBuilding] = useState([])
    const [floor, setFloor] = useState([]);
    const [room, setRoom] = useState([]);
    const [seat, setSeat] = useState([]);
    const [actBuilding, setActBuild]= useState({});
    const [actFloor, setActFloor]= useState({});
    const [actRoom, setActRoom] = useState({})
    const [actSeat, setActSeat] = useState({})
    const [loadingFloor, setLoadingFloor] = useState(false)
    const [loadingRoom, setLoadingRoom] = useState(false)
    const [loadingSeat, setLoadingSeat] = useState(false)
    const snackRef = useRef();

    const getBuilding = async () => {
      let res = await prospectService.moveToResident("api/v1/main/seat/getSeat/get/building", "",);
      if(res.variant ==="success"){
        setBuilding(res.data)
        setRoom([])
        setActRoom({})
        setSeat([])
        setActSeat({})
      }
    }
   
    useEffect(() => {
      getBuilding()
    },[])

    const getFloor = async ()=>{
      setLoadingFloor(true)
      let res = await prospectService.moveToResident("api/v1/main/seat/getSeat/get/floor", "",{building:actBuilding});
      if(res.variant ==="success"){
        setLoadingFloor(false)
        setFloor(res.data)
        setRoom([])
        setActRoom({})
        setSeat([])
        setActSeat({})
      }else {
        setLoadingFloor(false)
        if(res.data){
        setFloor(res.data)
        }
      }     
      }
    useEffect(() => {
  
        if(actBuilding){
          getFloor()
        }
    }, [actBuilding, ])

    const getRoom = async ()=>{
      setLoadingRoom(true)
      let res = await prospectService.moveToResident("api/v1/main/seat/getSeat/get/room", "",{building:actBuilding,floor:actFloor});
      if(res.variant ==="success"){
        setLoadingRoom(false)
        setRoom(res.data)
        setSeat([])
        setActSeat({})
      }else {
        setLoadingRoom(false)}   
        if(res.data){
          setRoom(res.data)
          }     
      }
    useEffect(() => {

        if(actFloor.label){
          getRoom()
        }
    }, [actFloor])

    const getSeat = async () => {
      setLoadingSeat(true)
      let res = await prospectService.moveToResident("api/v1/main/seat/getSeat/get/seat", "",{building:actBuilding,floor:actFloor,room:actRoom});
     console.log(res)
      if(res.variant ==="success"){
        setLoadingSeat(false)
        setSeat(res.data)
      }else {
        setLoadingSeat(false)
        if(res.data){
          setSeat(res.data)
          }  
      }     
      }
    useEffect(() => {

        if(actRoom.label){
          getSeat()
        }
    }, [actRoom])

    const handleBuilding = (i, action)=>{  
      let newArr =  building.map((obj, j)=> {
        if(i === j){
          setActBuild(obj)
          if(action === "edit"){ 
            obj.edit = !obj.edit;
          }
          return { ...obj, active:true}
        } else {
          return {...obj,active:false,edit:false}
        }
      })
      setBuilding(newArr);
    }

    const handleFloor = (i, action)=>{  
      let newArr =  floor.map((obj, j)=> {
        if(i === j){
          setActFloor(obj)
          if(action === "edit"){
            obj.edit = !obj.edit;
          }
          return { ...obj, active:true}
        } else {
          return {...obj,active:false,edit:false}
        }
      })
      setFloor(newArr);
    }
    
    const handleRoom =(i, e)=>{  
      let newArr =  room.map((obj, j)=> {
        if(i === j){
          setActRoom(obj)
          if(e){
            obj.edit = !obj.edit;
          }
          return { ...obj, active:true}
        } else {
          return {...obj,active:false,edit:false}
        }
      })
      setRoom(newArr);
    }
    const handleSeat =(i, e)=>{  
      let newArr =  seat.map((obj, j)=> {
        if(i === j){
          setActSeat(obj)
          if(e){
            obj.edit = !obj.edit;
          }
          return { ...obj, active:true}
        } else {
          return {...obj,active:false,edit:false}
        }
      })
      setSeat(newArr);
    }
    
    const handleObjChange=(e,i,p)=>{
      if(p === "building"){
        let newArr = [...building]; // copying the old building array
        newArr[i].label = e
        setBuilding(newArr)
      }else if(p === "floor"){
        let newArr = [...floor]; // copying the old floor array
        newArr[i].label = e
        setFloor(newArr)
      } else if(p === "room"){
        let newArr = [...room]; // copying the old Active Room Object
        newArr[i].label = e
        setRoom(newArr)
      }else if(p === "seat"){
        let newArr = [...seat]; // copying the old floor array
        newArr[i].label = e
        setSeat(newArr)
      }
      }
      const handleAdd = async (place,i,b)=>{
        if(place==="building"){
          let Arr1 = [...building]
          if(Arr1.length === 0 || Arr1[Arr1.length -1].label){
            Arr1.map(a=> {a.active = false; a.edit = false} )
            let newArr=[...Arr1,{label:"", _id:"", active:true, edit:true}]
            setBuilding(newArr);
          }else  snackRef.current.handleSnack({message:"Provide name to the current Building, First.", variant:"warning"});
        }else if(place ==="floor"){
          let Arr1 = [...floor]
          if(Arr1.length === 0 || Arr1[Arr1.length-1].label){
            Arr1.map(a=> {a.active = false; a.edit = false} )
            let newArr=[...Arr1,{label:"",_id:"", active:true, edit:true}]
            setFloor(newArr);
          }else snackRef.current.handleSnack({message:"Provide name to the current Floor, First.", variant:"warning"});
        } else if(place === "room"){
          let Arr1 = [...room]
          if(Arr1.length === 0 || Arr1[Arr1.length-1].label){
          Arr1.map(a=> {a.active = false; a.edit = false} )
          let newArr=[...Arr1, {label:"",_id:"", active:true, edit:true}]
          setRoom(newArr);
          } else snackRef.current.handleSnack({message:"Provide name to the current Room, First.", variant:"warning"});
          
        }else if(place ==="seat"){
          let Arr1 = [...seat]
          if(Arr1.length === 0 || Arr1[Arr1.length-1].label){
            Arr1.map(a=> {a.active = false; a.edit = false} )
            let newArr=[...Arr1, {label:"",_id:"", active:true, edit:true}]
            setSeat(newArr);
          }else snackRef.current.handleSnack({message:"Provide name to the current Seat, First.", variant:"warning"});
        }
    }

    const handleSave = async (name, i, b)=>{
      if(name=== "building"){
        if(b.label){
          try {
            let res = await prospectService.moveToResident(`api/v1/main/seat/addSeat/save/building`, b._id, {building:b});
            if(res.variant==="success"){
              snackRef.current.handleSnack(res);
              getBuilding()
            }else{
              snackRef.current.handleSnack(res);
            }
          } catch (error) {
            console.log(error)
          }
        }else snackRef.current.handleSnack({message:"Name your Building to save it. Else Delete it.", variant:"warning"});
       
      }else if(name ==="floor"){
        if(b.label){
          try {
            let acti = floor.filter(f=>f.active)
            let res = await prospectService.moveToResident(`api/v1/main/seat/addSeat/save/floor`, b._id, {building:actBuilding,floor:acti[0]});
            if(res.variant==="success"){
              snackRef.current.handleSnack(res);
              handleFloor(i, "edit")
            }else{
              snackRef.current.handleSnack(res);
            }
          } catch (error) {
            console.log(error);
          }
        }else {
          let Arr1 = [...floor];
          Arr1.pop();
          setFloor(Arr1);
          snackRef.current.handleSnack({message:"You didn't Provide name to the Floor, Hence Floor Removed.", variant:"info"})
        }
      }else if(name ==="room"){
        if(b.label){
          try {
            let acti = room.filter(f=>f.active)
            let res = await prospectService.moveToResident(`api/v1/main/seat/addSeat/save/room`, b._id, {building:actBuilding,floor:actFloor,room:acti[0]});
            if(res.variant==="success"){
              snackRef.current.handleSnack(res);
              handleRoom(i, "edit")
            }else{
              snackRef.current.handleSnack(res);
            }
          } catch (error) {
            console.log(error);
          }
        }else {
          let Arr1 = [...room];
          Arr1.pop();
          setRoom(Arr1);
          snackRef.current.handleSnack({message:"You didn't Provide name to the Room, Hence Room Removed.", variant:"info"})
        }
      }else if (name === "seat") {
        if (b.label) {
          try {
            let actiRoom = room.filter(f=>f.active)
            let actiSeat = seat.filter((f) => f.active);
            let res = await prospectService.moveToResident(`api/v1/main/seat/addSeat/save/seat`, b._id, { building: actBuilding, floor: actFloor, room: actiRoom[0], seat: actiSeat[0] });
            if (res.variant === "success") {
              snackRef.current.handleSnack(res);
              handleSeat(i,"edit")
            } else {
              snackRef.current.handleSnack(res);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          let Arr1 = [...seat];
          Arr1.pop();
          setSeat(Arr1);
          snackRef.current.handleSnack({ message: "You didn't Provide name to the Seat, Hence Seat Removed.", variant: "info" });
        }
      }
    }
    const handleDelete = async (name, i, b)=>{
      let Arr1 = [...seat]
if(name === "building"){
  Arr1 = [...building]
} else if(name === "floor"){
  Arr1 = [...floor]
} else if(name === "room"){
  Arr1 = [...room]
} 
        if(b.label){
          if (Arr1.length > 0) {
            let y = confirm(`Are you sure to Permanently Delete : ${b.label} ?`)
            if(y){
              try {
                let res = await prospectService.deleteLeave(`api/v1/main/seat/addSeat/deleteOne/${b._id}`);
                if(res.variant ==="success"){
                  snackRef.current.handleSnack(res);
                  if(name === "building"){
                    getBuilding()
                  } else if(name === "floor"){
                    getFloor()
                  } else if(name === "room"){
                    getRoom()
                  } else if(name === "seat"){
                    getSeat()
                  } 
           
                }else{
                  snackRef.current.handleSnack(res);
                }
              } catch (error) {
                console.log(error)
                snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
              }
            }
            } else {
                  alert("Not Allowed to delete the last One. You may Rename it.")
            }
        }else {
          Arr1.pop();
          if(name === "building"){
            setBuilding(Arr1);
            getBuilding()
          } else if(name === "floor"){
            setFloor(Arr1);
            getFloor()
          } else if(name === "room"){
            setRoom(Arr1);
            getRoom()
          } else if(name === "seat"){
            setSeat(Arr1);
            getSeat()
          } 
        
          snackRef.current.handleSnack({message:"Removed Successfully.", variant:"info"})}     
 
    }
    return (
    <main style={{background:"#fff",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:8,padding:10}}>
    <Grid container spacing={2}>
    <Grid item xs={12} className='center'>
    <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Create Building Layout</Typography>
    </Grid>
    <Grid item xs={12}>
    <Breadcrumbs separator={<FcNext fontSize="small" />} aria-label="breadcrumb">
    <Typography variant="caption" color="teal" className='headingText'>My Buildings</Typography>
    <Button variant="outlined" onClick={()=> handleAdd("building") } size="small" startIcon={<FcHome />}>
            Add New Building
          </Button>
    </Breadcrumbs>
    </Grid>
     
    <Grid item xs={12} sx={{marginBottom:"20px"}} className="center">
      <Grid container spacing={2}>
      {building && building.map((b,i)=><Grid item xs={12} md={3} lg={2} key={i} className="center">
        <div className={clsx("buildingBox", "center", b?.active && "activeCard")} onClick={()=>handleBuilding(i)}>
        <IconButton className="deleteBtn" size="small" onClick={()=>handleDelete("building",i,b)}> <FcFullTrash/> </IconButton>
        {b.edit ? <TextField autoFocus id="standard-basic" size="small"  sx={{width:"90%"}} inputProps={{maxLength: "20"}} onChange={e=>handleObjChange(e.target.value, i, "building")} label="Building Name" variant="standard" value={b.label} /> : b.label}
        {b.edit ?  <IconButton className="editBtn" onClick={()=>handleSave("building",i,b)}><FcCheckmark/></IconButton> :  <IconButton className="editBtn" onClick={()=>handleBuilding(i,"edit")}><MdEditNote/></IconButton> }
        </div>
        </Grid>)}
      </Grid>
    </Grid>
    <Grid item xs={12} >
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        {actBuilding?.label && <section> 
          <Breadcrumbs separator={<FcNext fontSize="small" />} aria-label="breadcrumb">
          <Typography variant="caption" color="teal" className='headingText'>{`Floors in ${actBuilding?.label ? actBuilding?.label : ""}`}</Typography>
          <Button variant="text" onClick={()=> handleAdd("floor")} size="small" startIcon={<FcTemplate />}>
              Add Floor
            </Button>
          </Breadcrumbs>
              <List sx={{ width: '100%',bgcolor: 'background.paper' }} component="nav" aria-labelledby="Select your Floor" subheader={<ListSubheader component="div" id="nested-list-subheader">
              Select your Floor
            </ListSubheader>
          }
        > 
        {loadingFloor ? <div className="center"> <CircularProgress size={25}/> </div> : floor && floor.map((f,i)=> 
          f.edit ? <ListItemButton key={i} selected={f.active}> <Input value={f.label} placeholder="Type Floor Name" onChange={e=>handleObjChange(e.target.value,i,"floor")} inputProps={{maxLength: "20"}}  fullWidth /> <IconButton onClick={()=>handleSave("floor", i,f )}> <FcCheckmark/> </IconButton> </ListItemButton> :  <ListItemButton key={i} onClick={()=>handleFloor(i)} selected={f.active}> <ListItemText primary={f.label} />
          <ButtonGroup variant="outlined" aria-label="outlined button group">
          <IconButton size="small" onClick={()=>handleFloor(i,"edit")} > <MdEditNote /></IconButton>
          <IconButton size="small" onClick={()=>handleDelete("floor", i, f)}> <FcFullTrash /></IconButton>
          </ButtonGroup> </ListItemButton>
          )}
        </List>
        </section>}
        </Grid> 
        <Grid item xs={12} md={4}>
        {actFloor?.label && <section> 
          <Breadcrumbs separator={<FcNext fontSize="small" />} aria-label="breadcrumb">
          <Typography variant="caption" color="teal" className='headingText'>{`Rooms in ${actFloor?.label ? actFloor?.label : ""}`}</Typography>
          <Button variant="text" onClick={()=> handleAdd("room")} size="small" startIcon={<FcTemplate />}>
              Add Room
            </Button>
          </Breadcrumbs>
          <List sx={{ width: '100%',bgcolor: 'background.paper' }} component="nav" aria-labelledby="Select your Room" subheader={<ListSubheader component="div" id="nested-list-subheader">
        Select your Room
        </ListSubheader>
        }
        > 
        {loadingRoom ? <div className="center"> <CircularProgress size={25}/> </div> : room && room.map((f,i)=> 
        f.edit ? <ListItemButton key={i} selected={f.active}> <Input value={f.label} placeholder="Type Room Name" onChange={e=>handleObjChange(e.target.value,i,"room")} inputProps={{maxLength: "20"}}  fullWidth /> <IconButton onClick={()=>handleSave("room", i,f )}> <FcCheckmark/> </IconButton> </ListItemButton> :  <ListItemButton key={i} onClick={()=>handleRoom(i)} selected={f.active}> <ListItemText primary={f.label} />
        <ButtonGroup variant="outlined" aria-label="outlined button group">
        <IconButton size="small" onClick={()=>handleRoom(i,"edit")} > <MdEditNote /></IconButton>
        <IconButton size="small" onClick={()=>handleDelete("room", i, f)}> <FcFullTrash /></IconButton>
        </ButtonGroup> </ListItemButton>
        )}
        </List>
          </section>}
        </Grid>
     
        <Grid item xs={12} md={4}>
        {actRoom?.label && <section> 
          <Breadcrumbs separator={<FcNext fontSize="small" />} aria-label="breadcrumb">
          <Typography variant="caption" color="teal" className='headingText'>{`Seats in ${actRoom?.label ? actRoom?.label : ""}`}</Typography>
          <Button variant="text" onClick={()=> handleAdd("seat", "add")} size="small" startIcon={<FcTemplate />}>
              Add Seat
            </Button>
          </Breadcrumbs>
          <List sx={{ width: '100%',bgcolor: 'background.paper' }} component="nav" aria-labelledby="Select your Seat" subheader={<ListSubheader component="div" id="nested-list-subheader">
              Select your Seat
            </ListSubheader>
          }
        > 
        {loadingSeat ? <div className="center"> <CircularProgress size={25}/> </div> : seat && seat.map((f,i)=> 
          f.edit ? <ListItemButton key={i} selected={f.active}> <Input value={f.label} placeholder="Type Seat Name" onChange={e=>handleObjChange(e.target.value,i,"seat")} inputProps={{maxLength: "20"}}  fullWidth /> <IconButton onClick={()=>handleSave("seat", i,f )}> <FcCheckmark/> </IconButton> </ListItemButton> :  <ListItemButton key={i} onClick={()=>handleSeat(i)} selected={f.active}> <ListItemText primary={f.label} />
          <ButtonGroup variant="outlined" aria-label="outlined button group">
          <IconButton size="small" onClick={()=>handleSeat(i,"edit")} > <MdEditNote /></IconButton>
          <IconButton size="small" onClick={()=>handleDelete("seat", i, f)}> <FcFullTrash /></IconButton>
          </ButtonGroup> </ListItemButton>
          )}
        </List>
          </section>}
        </Grid>
      </Grid>
     </Grid>   
    </Grid>
    <MySnackbar ref={snackRef} />
    </main>
  )
}

export default BuildingLayout