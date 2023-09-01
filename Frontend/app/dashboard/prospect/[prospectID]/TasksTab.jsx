'use client';
import React,{useState, useEffect, forwardRef,useRef,useImperativeHandle} from 'react'
import {Grid, AppBar,Toolbar,Box,Typography,TextField, Button,Tooltip,Tab,ButtonGroup,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,CircularProgress } from '@mui/material/';
import {FaUserPlus } from "react-icons/fa";
import {FiFileMinus,FiCheck } from "react-icons/fi";
import NoResult from "@/app/Components/NoResult/NoResult";
import {TabList,TabContext} from '@mui/lab/';
import {BsTable } from "react-icons/bs";
import {ToggleFab} from "../page"
import { DataGrid } from '@mui/x-data-grid';
import Autocomplete from '@mui/material/Autocomplete';
import MySnackbar from "../../../Components/MySnackbar/MySnackbar";
import { todayDate } from '../../../Components/StaticData';
import { prospectService,employeeService } from "../../../services";


function TasksTab({prospectId}) {
  const [taskId, setTaskId] = useState("")
  const [viewTabular,toggleView] = useState(true);
  const entryRef = useRef();
  return (
    <main style={{marginTop:20}}> 
      {viewTabular ? <SearchTask prospectId={prospectId}  handleEdit={(id)=>{toggleView(false); setTaskId(id)}} />  : <EntryTask taskId={taskId} setTaskId={e=>setTaskId(e)} prospectId={prospectId} ref={entryRef}/>}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
      <Toolbar variant="dense">
        <span style={{flexGrow:0.2}}/>
        {!viewTabular &&  <Button variant="contained" onClick={()=>entryRef.current.handleClear()} startIcon={<FiFileMinus />} size='small' color="info" >
            Clear
          </Button> }
        <span style={{flexGrow:0.3}}/>
        <Tooltip arrow title={viewTabular ? "Add Contact" : "Show All"}>
        <ToggleFab onClick={()=>toggleView(!viewTabular)} color="secondary" size="medium">
        {viewTabular ?   <FaUserPlus style={{fontSize:24}}/> : <BsTable style={{fontSize:24}}/>}
        </ToggleFab>
        </Tooltip>
          <span style={{flexGrow:0.3}}/>
          {!viewTabular && <Button variant="contained" onClick={() => entryRef.current.handleSubmit()} startIcon={<FiCheck />} size='small' color="success" >
            {taskId ? "Update" : "Save"}
          </Button>}
      </Toolbar>         
      </AppBar>
       </main>
  )
}



function SearchTask({prospectId, handleEdit}) {
  const [loading, setLoading] = useState(true);
  const [taskTab, setTaskTab] = useState("Active Task");
  const [rows, setRow] = useState([]);
  const [allData, setAllData] = useState([])
  const [completeBox, setCB]= useState({open:false});
  const [completionDate, setDate] = useState("");
  const [completionTime,setTime] = useState("");
  const [remark, setRemark] = useState("");

  useEffect(() => {
    let filtArr = allData.filter(f => {
      if(taskTab === "Active Task"){
        return f?.taskStatus === "New"
      }else if(taskTab === "Completed Task"){
        return f?.taskStatus === "Completed"
      }
       })
       setRow(filtArr)
  }, [taskTab,allData])

  async function fetchAllData() {
    setLoading(true)
    let response = await prospectService.getTask(prospectId, "");
    if(response.variant === "success"){
      setLoading(false)
      setAllData(response?.data)
    }else {setLoading(false);console.log(response)}
  }

  useEffect(() => {
    fetchAllData()
    setDate(todayDate()) 
  }, [])

  const handleComplete = async(goal, id)=>{
    if(goal === "Complete"){
      let taskData = {completionDate,completionTime,remark}
      let response = await prospectService.saveTask("api/v1/enquiry/task/addTask/markComplete",completeBox?._id, taskData);
      if(response.variant === "success"){
        setCB({open:false});
        setDate("");
        setTime("");
        setRemark("");
        alert(response.message);
        fetchAllData()
      }else console.log(response)
    }else if(goal ==="Delete"){
      let y = confirm("Are you sure to delete this task ?")
      if(y){
        let response = await prospectService.deleteLeave(`api/v1/enquiry/task/addTask/deleteOne/${id}`);
        if(response.variant === "success"){
          alert(response.message);
          fetchAllData()
        }else console.log(response)
      }
    }
  
  }
 
  const columns = [
    {
      field: 'date',
      headerName: 'Create Date',
      type: 'text',
      width: 150,
      editable: false,
    },
    {
      field: 'employeeFullName',
      headerName: 'Task For',
      width: 150,
      editable: false,
    },
    {
      field: 'task',
      headerName: 'Task Name',
      width: 350,
      editable: false,
    },
    {
      field: 'taskType',
      headerName: 'Task Type',
      width: 150,
      editable: false,
    },
    {
      field: 'taskDueDate',
      headerName: 'Task Due Date',
      type: 'text',
      width: 150,
      editable: false,
    },
    {
      field: 'taskDueTime',
      headerName: 'Task Due Time',
      type: 'text',
      width: 150,
      editable: false,
    },
    {
      field: 'taskStatus',
      headerName: 'Task Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 220,
      sortable: false,
      renderCell: props=> <ButtonGroup variant="text" aria-label="text button group">
      <Button color="info" disabled={props?.row?.taskStatus === "Completed"} onClick={()=>handleEdit(props?.row?._id)} variant="text">Edit</Button>
      <Button color='success' onClick={()=>setCB({...props?.row,open:true})}>Complete</Button>
      <Button color="error" onClick={()=>handleComplete("Delete", props?.row?._id)}>Delete</Button>
    </ButtonGroup>,
    },
  ];

  return (
    <main>
      <Box sx={{background:"#fff", borderRadius:"10px", width: '100%' }}>
      <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>All Tasks</Typography>
          <TabContext value={taskTab} variant="scrollable" allowScrollButtonsMobile scrollButtons>
          <TabList onChange={(e,v)=>setTaskTab(v)} aria-label="MedsTabs">
          {["Active Task", "Completed Task"].map((t,i)=> <Tab key={i} value={t} label={t} />)}
          </TabList>
        </TabContext>
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
      />
      {loading ? <div className="center"><CircularProgress size={30}/> </div> : loading === false && rows.length === 0 ? <NoResult label="No Task Available. Enjoy !"/> : null} 
    </Box>
    <Dialog maxWidth="lg" onClose={()=>setCB((d)=>({...d,open:false}))} open={completeBox?.open}>
      <DialogTitle>Tell us about the Task.</DialogTitle>
      <DialogContent>
          <DialogContentText>
         {completeBox?.task}
          </DialogContentText>
          <br/>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <TextField size="small" focused type='date' disabled={completeBox?.taskStatus ==="Completed"} value={completionDate} onChange={e=>setDate(e.target.value)} fullWidth label="Completion Date" variant="standard" />  
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField size="small" focused type='time' disabled={completeBox?.taskStatus ==="Completed"} value={completionTime} onChange={e=>setTime(e.target.value)} fullWidth label="Completion Time" variant="standard" />  
          </Grid>
          <Grid item xs={12}>
          <TextField size="small" fullWidth label="Remark (If Any)" disabled={completeBox?.taskStatus ==="Completed"} value={remark} onChange={e=>setRemark(e.target.value)} multiline placeholder='Write us about the work.' variant="standard" />  
          </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={()=>setCB((d)=>({...d,open:false}))}>Back</Button>
          <Button variant="outlined" disabled={completeBox?.taskStatus ==="Completed"} onClick={()=>handleComplete("Complete")} autoFocus>
            Submit
          </Button>
        </DialogActions>
    </Dialog>
    </main>
  )
}

const EntryTask = forwardRef((props, ref) => {
  const [employee, setEmployee] = useState(null);
  const [taskType, setTaskType] = useState(null);
  const [taskDueDate, setDue] = useState("");
  const [taskDueTime, setTime] = useState("");
  const [task, setTask] = useState("");
  const [allEmployee, setAllEmp] = useState([]);
  const [allTaskTypes]= useState([{label:"Email",id:"sd445245"},{label:"Phone call",id:"sd4sds45245"},{label:"Tour Facility",id:"sdsdsd5245"}])
  const snackRef = useRef();
  useEffect(() => {
    async function getData() {
      try {
        let res = await prospectService.getTask(props.prospectId, props.taskId);
       if(res.variant === "success"){
        props.setTaskId(res.data._id);
        setEmployee(res.data.employee);
        setTaskType(res.data.taskType);
        setDue(res.data.taskDueDate);
        setTime(res.data.taskDueTime)
        setTask(res.data.task);
         snackRef.current.handleSnack(res);
       }else snackRef.current.handleSnack(res);            
      } catch (error) {
       console.log(error);
       snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
      } 
    }
    if(props.taskId){getData()}
    
  }, [props.taskId])
  useEffect(() => {
    async function fetchAllData() {
      let response = await employeeService.getEmployee("api/v1/employee/basic/getEmployee/getAll", "");
      if(response.variant === "success"){
        setAllEmp(response.data)
      }else console.log(response)
    }
    fetchAllData()
  }, [])
  const handleClear=()=>{
    props.setTaskId("");
    setEmployee(null);
    setTaskType(null);
    setDue("");
    setTime("");
    setTask("");
  }
 useImperativeHandle(ref, () => ({
      handleSubmit: async () => {
         try {
          let taskData = {prospectId:props.prospectId, employee,taskType,taskDueDate,taskDueTime,task };
          let response = await prospectService.saveTask("api/v1/enquiry/task/addTask", props.taskId, taskData);
         if(response.variant === "success"){
           snackRef.current.handleSnack(response);
           handleClear();
         }else  snackRef.current.handleSnack(response?.response?.data);            
        } catch (error) {
         console.log(error);
         snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.response.data.message, variant:"error"});
        } 
         
     },
     handleClear: () => handleClear()
  
 }));
 
return (
<main style={{backgroundColor:"#fff", borderRadius:8,marginBottom:2, padding:"10px"}}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Add New Tasks</Typography>
      </Grid>
    <Grid item xs={12} md={3}>
    <TextField disabled fullWidth label="Assisted Living Retirement Homes" variant="standard" />   
    </Grid>
    <Grid item xs={12} md={3}>
    <Autocomplete
            id="taskFor"
            isOptionEqualToValue={(option, value) => option._id === value._id}
            getOptionLabel={opt=> `${opt?.lastName} ${opt?.firstName}`}
            options={allEmployee}
            onChange={(e, v) => {
            setEmployee(v);
            }} 
            renderOption={(props, option) => {
              return (
                <li {...props} key={option._id}>
                  {`${option?.lastName} ${option?.firstName}`}
                </li>
              );
            }}
            value={employee}
            renderInput={(params) => <TextField {...params} variant="standard" fullWidth label="Task For"/>}
    />
    </Grid>
    <Grid item xs={12} md={3}>
    <Autocomplete
            id="taskType"
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={allTaskTypes}
            onChange={(e, v) => {
            setTaskType(v);
            }}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
            value={taskType}
            renderInput={(params) => <TextField {...params} variant="standard" fullWidth label="Task Type"/>}
    />
   
    </Grid>
    <Grid item xs={12} md={2}>
    <TextField fullWidth type="date" value={taskDueDate} onChange={e=>setDue(e.target.value)} focused label="Task Due Date" variant="standard" />   
    </Grid>
  
    <Grid item xs={12} md={1}>
    <TextField fullWidth type="time" value={taskDueTime} onChange={e=>setTime(e.target.value)} focused label="Task Due Time" variant="standard" />   
    </Grid>
        <Grid item xs={12} md={12}>
        <TextField label="Task / Remarks" rows={6} value={task} onChange={e=>setTask(e.target.value)} multiline placeholder='Type Task...' fullWidth variant="outlined" />   
        </Grid>
    </Grid>
    <MySnackbar ref={snackRef} />
   </main>
)
});




export default TasksTab