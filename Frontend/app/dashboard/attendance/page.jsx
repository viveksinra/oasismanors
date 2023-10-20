'use client'
import React, { useState,useEffect }  from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { residentService } from "../../services";
import {Grid,Typography,  Tab, Box,AppBar,Toolbar,Tooltip,RadioGroup,FormControlLabel,Radio,FormLabel,FormControl} from '@mui/material/';
import {TabContext,TabList,TabPanel } from '@mui/lab/';
import { FcReadingEbook,FcCollaboration,FcLibrary } from "react-icons/fc";
import {FaListUl} from "react-icons/fa"
import { useRouter } from 'next/navigation';
import {ToggleFab} from "../prospect/page"
import moment from 'moment'
import {drawerWidth} from "../layout"


// import 'moment-timezone'

// moment.tz.setDefault('America/Los_Angeles')
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.

const localizer = momentLocalizer(moment) // or globalizeLocalizer

function Attendance() {
    const [building,setBuilding] = useState([]);
    const [buildTab, setBTab]=useState("all");
    const [shift, setShift] = useState("all");
    const [myEvents, setEvents] = useState([]);
    const router = useRouter();
    useEffect(() => {
        async function fetchBuilding() {
          let response = await residentService.saveResident("api/v1/main/seat/getSeat/get/building", "");
          if(response.variant === "success"){
            setBuilding(response.data)
            // setBTab(response.data[0].label)
          }else {console.log(response)}
        }
        fetchBuilding()
        async function getEvents() {
          let response = await residentService.saveResident("api/v1/employee/empLeave/empLeaveTable/withFilter", "");
          if(response.variant === "success"){
            setEvents(response.data)
            // setBTab(response.data[0].label)
          }else {console.log(response)}
        }
        getEvents()

      }, [])
      const dayPropGetter = (date) => {
        const eventsOnDate = myEvents.filter((event) => {
          const eventStartDate = new Date(event.start);
          const eventEndDate = new Date(event.end);
          return (
            date >= eventStartDate && date <= eventEndDate
          );
        });
      
        let backgroundColor;
        if (eventsOnDate.length >= 2) {
          backgroundColor = 'red';
        } else if (eventsOnDate.length >= 1) {
          backgroundColor = 'yellow';
        } else {
          backgroundColor = 'white';
        }
      
        return {
          style: {
            backgroundColor,
            color: 'white',
          },
        };
      };
      
  
  return (
    <main style={{background:"#fff",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"10px",padding:20}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography color="teal" style={{fontFamily: 'Courgette'}} variant="body1" align='center'>All Leave</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
        <TabContext value={buildTab} variant="scrollable" allowScrollButtonsMobile scrollButtons>
        <Box sx={{  maxWidth: { xs: "320px", sm: "480px",md:"max-content" }, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={(e,v)=>setBTab(v)} sx={{height:60}} aria-label="Building Tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
        <Tab value="all" icon={<FcLibrary style={{fontSize:20}}/>} iconPosition="bottom" label="All"/>
        {building.map((t,i)=> <Tab key={i} iconPosition="bottom" icon={<Typography variant="caption">{t?.houseNo}</Typography>} value={t?.label} label={t?.label}  />)}
        </TabList>
        </Box>
        </TabContext>
        </Grid>
        <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"right"}}>   
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Filter By Shift</FormLabel>
        <RadioGroup  defaultValue="First Half" row onChange={e=>setShift(e.target.value)} value={shift}>
        <FormControlLabel value="all" control={<Radio size="small" />} label="Both Shift" />
      <FormControlLabel value="first" control={<Radio size="small" />} label="First Half" />
      <FormControlLabel value="second" control={<Radio size="small" />} label="Second Half" />
      </RadioGroup>
      </FormControl>
        </Grid>
      </Grid>
       
        
        <div style={{height:"600px",marginTop:"20px"}}>
    <Calendar
      localizer={localizer}
      events={myEvents}
      dayPropGetter={dayPropGetter}
      startAccessor="start"
      endAccessor="end"
    />
  </div>

  <AppBar position="fixed" sx={{ top: 'auto', bottom: 0,background:"#d6f9f7"}}>
    <Toolbar variant="dense">
        <Tooltip arrow title="Leave" >
        <ToggleFab onClick={()=> router.push('/dashboard/attendance/leave')} color="secondary" size="medium">
        <FaListUl style={{fontSize:24}}/> 
        </ToggleFab>
        </Tooltip>
    </Toolbar>
  </AppBar>
    </main>
  )
}

export default Attendance;