'use client';
import React, { lazy,Suspense, useEffect, useState } from 'react'
import {Tabs,Tab} from '@mui/material/'; 
import { FcBusinessman,FcCallback,FcTodoList,FcInspection,FcSettings } from "react-icons/fc";
import ContactProfile from "../ContactProfile";
import TasksTab from '../../prospect/TasksTab';
// const ContactTab = lazy(() => import("../ContactTab"));
// const TasksTab = lazy(() => import("../TasksTab"));
const NotesTab = lazy(() => import("../../prospect/NotesTab"));
// const Settings = lazy(() => import("../SettingsTab"));

const TabPanel = ({value, contactId})=>{
    switch (value) {
        case 0:
          return <ContactProfile contactId={contactId}/>
        case 1:
          return <Suspense fallback={null}> <TasksTab prospectId={contactId} type="myContact"/></Suspense> 
        // case 2:
        //   return <Suspense fallback={null}><TasksTab contactId={contactId}/></Suspense>   
        case 2:
          return <Suspense fallback={null}> <NotesTab prospectId={contactId} type="myContact"/> </Suspense>  
        // case 4:
        //   return <Suspense fallback={null}> <Settings contactId={contactId}/> </Suspense>
        default:
          break;
    }
  }

const ContactExplore = ({ params }) => {
    const [mainTab, setMainTab]=useState(0)
  return ( 
    <main> 
    <Tabs value={mainTab} onChange={(e,v)=>setMainTab(v)} aria-label="main_Tabs" sx={{height:60,maxWidth: { xs: 350, sm: 480,md:"100%" }}} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
    <Tab icon={<FcBusinessman style={{fontSize:24}}/>} iconPosition="start" label="Profile"  />
    {/* <Tab icon={<FcCallback style={{fontSize:24}}/>} iconPosition="start"  label="Contact"  /> */}
    <Tab icon={<FcTodoList style={{fontSize:24}}/>} iconPosition="start"  label="Tasks" />
    <Tab icon={<FcInspection style={{fontSize:24}}/>} iconPosition="start" label="Notes"  />
    <Tab icon={<FcSettings style={{fontSize:24}}/>} iconPosition="start" label="Settings" />
  </Tabs>
     <TabPanel value={mainTab} contactId={params?.contactId}/>
    </main>
  )
}


export default ContactExplore;