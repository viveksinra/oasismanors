import React,{useState} from 'react'
import {Container,Typography, Table,TableHead,TableRow,TableCell,TableBody, Divider} from '@mui/material/';

function CompressionTable() {
    const [rows] = useState([{amenity:"Fine Dining",oasis:true,cant:true,sun:true},{amenity:"24-Hour Security",oasis:true,cant:true,sun:true},{amenity:"Yoga and Exercise",oasis:true,cant:true,sun:true},{amenity:"Pet Friendly",oasis:true,cant:true,sun:false},{amenity:"Heated Pool",oasis:true,cant:true,sun:false},{amenity:"Putting green",oasis:true,cant:true,sun:false},{amenity:"Private Bath with Bidet",oasis:true,cant:false,sun:false},{amenity:"Boutique Home",oasis:true,cant:false,sun:false},{amenity:"Courtyard",oasis:true,cant:false,sun:false},{amenity:"Spa",oasis:true,cant:false,sun:false},{amenity:"Sauna",oasis:true,cant:false,sun:false},{amenity:"Cushioned Walkway",oasis:true,cant:false,sun:false},{amenity:"Full Power Backup",oasis:true,cant:false,sun:false}])
    return (
    <main>
    <Container>
    <Typography variant='h4' sx={{fontSize:{xs:"16px",md:"24px"},fontFamily:"Adequate,Helvetica Neue,Helvetica,\"sans-serif\"",}} textAlign="center" color="#082952">Compare us with our competition</Typography>
    <center><Divider light sx={{maxWidth:"340px"}}>✼</Divider></center>
    <br/>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow sx={{background:"#ade7ff"}}>
            <TableCell sx={{minWidth:"140px"}}><Typography sx={{fontSize:{md:"20px",xs:"16px"}}}>Amenities</Typography></TableCell>
            <TableCell padding="none" sx={{minWidth:"40px"}} align="center"><Typography color="darkblue" sx={{fontSize:{md:"20px",xs:"12px"}}}>Oasis Homes</Typography></TableCell>
            <TableCell padding="none" sx={{minWidth:"40px"}} align="center"><Typography sx={{fontSize:{md:"20px",xs:"12px"}}}>Canterbury</Typography></TableCell>
            <TableCell padding="none" sx={{minWidth:"40px"}} align="center"><Typography sx={{fontSize:{md:"20px",xs:"12px"}}}>Sunrise</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              hover
              key={row.amenity}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography sx={{fontSize:{md:"18px",xs:"14px"}}}>{row.amenity}</Typography>
              </TableCell>
              <TableCell padding="none" align="center">{row.oasis ? Right : <img style={{width:"16px"}} src="https://res.cloudinary.com/oasismanors/image/upload/v1707551609/cross_vilpsd.svg" alt="Cross" /> }</TableCell>
              <TableCell padding="none" align="center">{row.cant ? Right : <img style={{width:"16px"}} src="https://res.cloudinary.com/oasismanors/image/upload/v1707551609/cross_vilpsd.svg" alt="Cross" /> }</TableCell>
              <TableCell padding="none" align="center">{row.sun ? Right : <img style={{width:"16px"}} src="https://res.cloudinary.com/oasismanors/image/upload/v1707551609/cross_vilpsd.svg" alt="Cross" />  }</TableCell>
            </TableRow>
          ))}
            <TableRow hover sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
            <TableCell  component="th" scope="row"><Typography sx={{fontSize:{md:"18px",xs:"14px"}}}><b>Price</b> (Monthly)</Typography></TableCell>
            <TableCell padding="none" align="center"><Typography sx={{fontSize:{md:"18px",xs:"14px"}}} color="green">$6000</Typography></TableCell>
            <TableCell padding="none" align="center"><Typography sx={{fontSize:{md:"18px",xs:"14px"}}} color="red">$10000</Typography></TableCell>
            <TableCell padding="none" align="center"><Typography sx={{fontSize:{md:"18px",xs:"14px"}}} color="red">$10000</Typography></TableCell>
            </TableRow>
        </TableBody>
      </Table>
         </Container>
    </main>
  )
}

const Right = <svg focusable="false" aria-hidden="true" fill='#1AA251' width="20px" viewBox="0 0 24 24" data-testid="VerifiedRoundedIcon"> <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zM9.38 16.01 7 13.61a.9959.9959 0 0 1 0-1.41l.07-.07c.39-.39 1.03-.39 1.42 0l1.61 1.62 5.15-5.16c.39-.39 1.03-.39 1.42 0l.07.07c.39.39.39 1.02 0 1.41l-5.92 5.94c-.41.39-1.04.39-1.44 0"></path></svg>

export default CompressionTable