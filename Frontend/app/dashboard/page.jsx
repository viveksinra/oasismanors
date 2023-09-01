'use client';
import React,{useState,useEffect,lazy,Suspense} from 'react'
import "./dashboardStyle.css"
import {Button, Chip, Grid,DialogActions,CircularProgress, Typography,Dialog,Table,TableBody,TableRow,TableCell, Tooltip, Divider, Avatar} from '@mui/material/';
import { dashboardService } from '../services';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Link from 'next/link';
// const ProspectChart = lazy(() => import("../Components/Charts/ProspectChart"));
// const CareChart = lazy(() => import("../Components/Charts/CareChart"));
// const MedsChart = lazy(() => import("../Components/Charts/MedChart"));


function   Dashboard () {
  const [showDate, setShowData] = useState(false)
  const [totalCount, setTCount] = useState([{label:"Payment", number:"$156", bgColor:"#f08ff7",link:"/dashboard/payment", icon: ""},
                                            {label:"Receipt", number:"$1324", bgColor:"#a9fcc0",link:"/dashboard/receipt", icon: ""},
                                            {label:"Prospect", number:"451", bgColor:"#9155FD",link:"/dashboard/prospect", icon: "" }, 
                                            {label:"Residents", number:"18", bgColor:"#56CA00",link:"/dashboard/residents",icon: "" },
                                            {label:"Employee", number:"05", bgColor:"#b5eeff",link:"/dashboard/employee",icon: ""},
                                            {label:"Tasks", number:"05", bgColor:"#FFB400",link:"/dashboard/task", icon: ""},
                                          ]) 
  const [date, setDate] = useState([{
      startDate: "",
      endDate: new Date() ,
      key: 'selection'
    }]);
  const [task, setTask]= useState([{task:"Ask the Principal for turning...",taskType:"Email",taskDueDate:"Aug-31-2023" },{task:"See the fooding Court for transfer",taskType:"Call",taskDueDate:"Aug-30-2023" },{task:"Ask the Principal for turning...",taskType:"Email",taskDueDate:"Aug-31-2023" },{task:"See the fooding Court for transfer",taskType:"Call",taskDueDate:"Aug-30-2023" },{task:"Lorem is think of God and...",taskType:"Visit",taskDueDate:"Aug-26-2023" }])
  const [receipt,setReceipt]= useState([{ledger:"Raghav John Michu", mode:"Cash", ledgerImage:"https://mui.com/static/images/avatar/1.jpg", amount:"514"},{ledger:"Vivek Solanki Wazwa", mode:"Zelle", ledgerImage:"https://mui.com/static/images/avatar/2.jpg", amount:"1640"},{ledger:"Raghav John Michu", mode:"Cash", ledgerImage:"https://mui.com/static/images/avatar/1.jpg", amount:"514"},{ledger:"Vivek Solanki Wazwa", mode:"Zelle", ledgerImage:"https://mui.com/static/images/avatar/2.jpg", amount:"1640"}])
  const [payment,setPayment]= useState([{ledger:"Raghav John Michu", mode:"Cash", ledgerImage:"https://mui.com/static/images/avatar/1.jpg", amount:"514"},{ledger:"Vivek Solanki Wazwa", mode:"Zelle", ledgerImage:"https://mui.com/static/images/avatar/2.jpg", amount:"1640"},{ledger:"Raghav John Michu", mode:"Cash", ledgerImage:"https://mui.com/static/images/avatar/1.jpg", amount:"514"},{ledger:"Vivek Solanki Wazwa", mode:"Zelle", ledgerImage:"https://mui.com/static/images/avatar/2.jpg", amount:"1640"}])
  
  useEffect(() => {
    // Getting all summary Data
    async function getSummary(){
      let res = await dashboardService.saveData(`api/v1/dashboard/getDashboard/summaryData`,"", date[0]);
      if(res.variant === "success"){
        setTCount(res.data)
      }else {console.log(res)};    
     }
     getSummary()
   }, [date])

   useEffect(() => {
    // Getting Last 5 Task Data
    async function getTask(){
      let res = await dashboardService.getData(`api/v1/dashboard/getDashboard/pendingTask`);
      if(res.variant === "success"){
        setTask(res.data)
      }else {console.log(res)};    
     }
     getTask()
   }, [])

   useEffect(() => {
    // Getting Last 4 Receipt / Payment Data
    async function getResPay(){
      let res = await dashboardService.getData(`api/v1/dashboard/getDashboard/someReceiptAndPayment`);
      if(res.variant === "success"){
        setReceipt(res?.data?.someReceipt)
        setPayment(res?.data?.somePayment)
      }else {console.log(res)};    
     }
     getResPay()
   }, [])
 
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div style={{height:"190px",boxShadow:"rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",backgroundColor:"#fff", borderRadius:"10px", overflow:"hidden"}}>
            <Grid container>
              <Grid item xs={8} sx={{padding:"20px"}}>
                <Typography variant="h6" color="teal" className='headingText'>Congratulations, John !</Typography> <br/>
                <Typography variant="caption" gutterBottom color="grey">Best seller of the month. </Typography><br/>
                <Typography variant="h5" gutterBottom color="darkviolet">$42.8k </Typography>
                <Button size='small' variant="outlined">View Invoices</Button>
              </Grid>
              <Grid item xs={4} id="topBoxBg" className='center'>
              <img src="https://res.cloudinary.com/oasismanors/image/upload/v1692978494/trophy_nnngau.png" alt="trophy" style={{height:"100px"}} />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
        <div style={{height:"190px", boxShadow:"rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",backgroundColor:"#fff", padding:"20px", borderRadius:"10px"}}>
          <Grid container>
            <Grid item xs={12} sx={{display:"flex", justifyContent:"space-between"}}>
              <div>
              <Typography variant="caption" color="teal" className='headingText'>Summary Data</Typography> <br/>
              {/* <Typography variant="caption" gutterBottom color="grey">Total data from <b>{date[0]?.startDate === "" ? "Starting" : date[0]?.startDate?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })} </b> to <b> {date[0]?.endDate?.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })}</b></Typography> */}<br/><br/>
              </div>
              <Chip label="Filter By Date" size="small" onClick={()=>setShowData(!showDate)} color="primary" variant="outlined" sx={{cursor:"pointer"}}/>
            </Grid>
            <Grid item xs={12} sx={{display:"flex", justifyContent:"space-between"}}>
            {totalCount.map((t,i)=> <div key={i} style={{minWidth:"120px"}}>
              <Link href={t.link}>
                <Grid container>
                <Grid item xs={5} className='center'>
                <div className='iconBox' style={{backgroundColor:t.bgColor}}><img src={t?.icon} alt={t?.label} style={{width: "30px", height: "30px"}} /> </div>
                </Grid>
                <Grid item xs={7} sx={{paddingLeft:"5px"}}> 
                <Typography variant="caption" color="teal">{t.label}</Typography>
                <Typography variant="h6" color="darkviolet" sx={{marginTop:"-4px"}}>{t.number}</Typography>
                </Grid>
                </Grid> 
              </Link> 
            
          </div> )}
            </Grid>
          </Grid>
        </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{height:"410px",padding:"20px", boxShadow:"rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",backgroundColor:"#fff", borderRadius:"10px", overflow:"hidden"}}>
          <Typography variant="caption" color="teal" className='headingText'>Prospect Stage</Typography> <br/><br/>
          {/* <Suspense fallback={<div className='center'><CircularProgress /></div>}>
          <ProspectChart/>
          </Suspense> */}
          </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div style={{height:"410px",padding:"20px", boxShadow:"rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",backgroundColor:"#fff", borderRadius:"10px", overflow:"hidden"}}>
      <Typography variant="caption" color="teal" className='headingText'>Meds (weekly)</Typography> <br/>
      {/* <Suspense fallback={<div className='center'><CircularProgress /></div>}>
      <MedsChart/>
      </Suspense> */}
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
      <div style={{height:"410px",padding:"20px", boxShadow:"rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",backgroundColor:"#fff", borderRadius:"10px", overflow:"hidden"}}>
      <Typography variant="caption" color="teal" className='headingText'>Care (weekly)</Typography> <br/>
      {/* <Suspense fallback={<div className='center'><CircularProgress /></div> }>
        <CareChart/>
        </Suspense> */}
      </div>
      </Grid>
      <Grid item xs={12} md={4}>
         <div style={{height:"220px",padding:"20px", boxShadow:"rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",backgroundColor:"#fff", borderRadius:"10px", overflow:"hidden"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="caption" color="teal" className='headingText'>Task (Pending)</Typography>
          <Link href="/dashboard/task"><Typography variant="body2" color="teal">View All</Typography></Link>
          </div>
         <Table size="small" aria-label="task Table">
         <TableBody>
          {task.map((t,i)=> <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell component="th" scope="row">
               <Typography variant='caption'>{t?.task}</Typography> 
                </TableCell>
                <TableCell component="th" scope="row">
                <Typography variant='caption'>{t?.taskType}</Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Tooltip title="Task Due Date" arrow>
                  <Typography variant='caption' color="blueviolet">{t?.taskDueDate}</Typography>
                  </Tooltip>
                </TableCell>
            </TableRow> )}
          </TableBody>
         </Table>
        </div>
      </Grid>
      <Grid item xs={12} md={8}>
         <div style={{height:"220px",padding:"20px", boxShadow:"rgba(58, 53, 65, 0.1) 0px 2px 10px 0px",backgroundColor:"#fff", borderRadius:"10px", overflow:"hidden"}}>
          <Grid container>
            <Grid item xs={12} md={5.5}>
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <Typography variant="caption" color="teal" className='headingText'>Receipt</Typography> <br/> 
              <Link href="/dashboard/receipt"><Typography variant="body2" color="teal">View All</Typography></Link>
              </div>
               <Table size="small" aria-label="Receipt Table">
                <TableBody>
                  {receipt.map((t,i)=> <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                       <TableCell align="left" padding="none">
                       <Avatar alt={t.ledger} src={t.ledgerImage}  sx={{ width: 28, height: 28 }} />
                        </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography variant='caption'>{t.ledger}</Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                        <Typography variant='caption'>{t.mode}</Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Tooltip title="Task Due Date" arrow>
                          <Typography variant="subtitle1" color="green">$ {t.amount}</Typography>
                          </Tooltip>
                        </TableCell>
                    </TableRow> )}
                  </TableBody>
                </Table>
            </Grid>
            <Grid item xs={12} md={1} className='center'><Divider orientation="vertical" light/></Grid>
            <Grid item xs={12} md={5.5}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <Typography variant="caption" color="tomato" className='headingText'>Payment</Typography> <br/> 
              <Link href="/dashboard/payment"><Typography variant="body2" color="teal">View All</Typography></Link>
            </div>
            <Table size="small" aria-label="Payment Table">
                <TableBody>
                  {payment.map((t,i)=> <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                       <TableCell align="left" padding="none">
                       <Avatar alt={t.ledger} src={t.ledgerImage}  sx={{ width: 28, height: 28 }} />
                        </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography variant='caption'>{t.ledger}</Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                        <Typography variant='caption'>{t.mode}</Typography>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Tooltip title="Task Due Date" arrow>
                          <Typography variant="subtitle1" color="red">$ {t.amount}</Typography>
                          </Tooltip>
                        </TableCell>
                    </TableRow> )}
                  </TableBody>
                </Table>
            </Grid>
          </Grid>
        </div>
      </Grid>
      </Grid>
     
      {/* <br/> 
        <Dialog onClose={()=>setShowData(false)} maxWidth="md" open={showDate}>
          <DateRangePicker
          onChange={item => {setDate([item.selection])}}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={date}
          direction="horizontal"
          />
          <DialogActions>
          <Button variant="text" color="inherit" onClick={()=>setShowData(false)}>Cancel</Button>
          <span style={{flexGrow:0.1}}/>
          <Button variant="contained" color="success" onClick={()=>setShowData(false)}>Filter Now</Button>
          <span style={{flexGrow:0.1}}/>
          </DialogActions>
        </Dialog> */}
    </main>
  )
}



export default Dashboard;