import React,{useEffect,useState} from 'react'
import {Typography, CircularProgress,Dialog,DialogContent,DialogActions,Button,Divider, Table,TableCell,TableBody, TableHead,TableRow} from '@mui/material/';
import NoResult from "@/app/Components/NoResult/NoResult";
import Link from 'next/link';
import {FcBinoculars } from "react-icons/fc";
import { payReceiveService } from "../../services";

function FormHistory({selector,setSelector}) {
    const [loadingHistory, setLoadingHistory ]= useState(false);
    const [history, setHistory] = useState([])
    useEffect(() => {
        // Getting Histry of one Form Uploaded.
        setLoadingHistory(true)
        async function getHistory(){
            let basicUrl =""
            if(selector?.r?._id){
            basicUrl = `api/v1/common/complianceDocs/getComplianceDocs/formLinkAndResidence/${selector?.m?.formNoLink}/${selector?.r?._id}`
            }else {basicUrl = `api/v1/common/complianceDocs/getComplianceDocs/withformNoLink/${selector?.m?.formNoLink}`}
            let res = await payReceiveService.getPayRec(basicUrl);
            if(res.variant === "success"){
            setLoadingHistory(false)
            setHistory(res.data)
            }else {console.log(res);setLoadingHistory(false)};    
            }
            if(selector?.m?.formNoLink) {getHistory()}
        }, [selector?.m?.formNoLink,selector?.r?._id])
  return (
    <Dialog  maxWidth="lg" open={selector.open}>
    <DialogContent>
    <Typography variant="h6" align='center'>History</Typography>
     <Typography variant="subtitle1" align="center"><strong>{selector?.m?.formName} ~ {selector?.m?.formNo}</strong> </Typography>
     {selector?.r?.residentName && <Typography color="teal" align="center">For Resident : {selector?.r?.residentName}</Typography>}
     <Divider/>
     <br/>
     {loadingHistory ? <div className="center" style={{flexDirection:"column"}}><CircularProgress size={30}/> <Typography color="slateblue" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Loading History...</Typography>  </div> :  history.length === 0 ?  <NoResult label="This Form is NOT uploaded yet."/> : <Table size='small'>
     <TableHead>
       <TableRow>
       <TableCell align="left">Form No.</TableCell>
       <TableCell align="left">Expiration Date</TableCell>
       <TableCell align="left">Upload Date</TableCell>
       <TableCell align="left">Uploaded By</TableCell>
       <TableCell align="center">Action</TableCell>
       </TableRow>
       </TableHead>
       <TableBody>
       {history.map((h,i)=> <TableRow key={i}>
       <TableCell align="left">{selector?.m?.formNo}</TableCell>
       <TableCell align="left"> <Typography color="secondary" variant="body2">{h?.expirationDate} </Typography></TableCell>
       <TableCell align="left">{h?.date}</TableCell>
       <TableCell align="left">{h?.uploadedBy}</TableCell>
       <TableCell align="left"><Link target="_blank" rel="noopener noreferrer" href={h?.fileLink}><Button endIcon={<FcBinoculars />}>View</Button></Link> </TableCell>
       </TableRow>)}
       </TableBody>
     </Table> }
     
   </DialogContent>
   <DialogActions>
          <Button onClick={()=>setSelector({open:false})} variant="outlined" color="warning">Close</Button> 
     </DialogActions>
 </Dialog>
  )
}

export default FormHistory