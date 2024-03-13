'use client';
import React from 'react'
import Ledger from '../page';
// import {AppBar,Toolbar,Tooltip} from '@mui/material/';
// import {BsTable} from "react-icons/bs";
// import ToggleFab from '../page'
const LegerId = ({ params }) => {
  return (
    <main> 
    <Ledger id={params.id}/>
     </main>
  )
}

export default LegerId