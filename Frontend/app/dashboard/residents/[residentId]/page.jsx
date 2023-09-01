'use client';
import React, { useState,lazy } from 'react'
import {Tabs,Tab} from '@mui/material/';
import { FcBusinessman,FcCollaboration,FcCallback,FcTodoList,FcInspection,FcSettings,FcGoodDecision,FcDebt } from "react-icons/fc";
import ProfileTab from "../../prospect/[prospectId]/ProfileTab";
const Medications = lazy(() => import("./Medication"));
const CareTab = lazy(() => import("./Care"));
const Recurring = lazy(() => import("./Recurring"));
const ContactTab = lazy(() => import("../../prospect/[prospectId]/ContactTab"));
const TasksTab = lazy(() => import("../../prospect/[prospectId]/TasksTab"));
const NotesTab = lazy(() => import("../../prospect/[prospectId]/NotesTab"));
const Settings = lazy(() => import("../../prospect/[prospectId]/SettingsTab"));


const TabPanel = ({value, residentId})=>{
    switch (value) {
        case 0:
          return <ProfileTab prospectId={residentId}/>
        case 1:
          return <Medications prospectId={residentId}/>
        case 2:
          return <CareTab prospectId={residentId}/>
        case 3:
          return <ContactTab prospectId={residentId}/>
        case 4:
          return <TasksTab prospectId={residentId}/>
        case 5:
          return <NotesTab prospectId={residentId}/>
        case 6:
        return <Recurring prospectId={residentId}/>
        case 7:
          return <Settings residentId={residentId}/>
        default: 
            break;
    }
  }

const ResidentDetail = ({ params }) => {
    const [mainTab, setMainTab]=useState(0)
  return (
    <main> 
    <Tabs value={mainTab} onChange={(e,v)=>setMainTab(v)} aria-label="main_Tabs" sx={{height:60}}>
    <Tab icon={<FcBusinessman style={{fontSize:24}}/>} iconPosition="start" label="Profile"  />
    <Tab icon={<FcGoodDecision style={{fontSize:24}}/>} iconPosition="start" label="Medication"  />
    <Tab icon={<FcCollaboration style={{fontSize:24}}/>} iconPosition="start" label="Care"  />
    <Tab icon={<FcCallback style={{fontSize:24}}/>} iconPosition="start"  label="Contact"  />
    <Tab icon={<FcTodoList style={{fontSize:24}}/>} iconPosition="start"  label="Tasks" />
    <Tab icon={<FcInspection style={{fontSize:24}}/>} iconPosition="start" label="Notes"  />
    <Tab icon={<FcDebt style={{fontSize:24}}/>} iconPosition="start" label="Charges" />
    <Tab icon={<FcSettings style={{fontSize:24}}/>} iconPosition="start" label="Settings" />
  </Tabs>
     <TabPanel value={mainTab} residentId={params?.residentId}/>
    </main>
  )
}


export default ResidentDetail;