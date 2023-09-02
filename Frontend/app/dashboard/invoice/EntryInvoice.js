'use client';
import "../payment/paymentStyle.css";
import React,{ useState,useEffect,forwardRef,useRef,useImperativeHandle} from 'react'
import {Grid,Button,Divider,InputAdornment,Typography,TextField,Avatar,Input,List,ListItem,ListItemButton,ListItemAvatar,ListItemText,TablePagination,Table,TableHead,TableBody,TableRow,TableCell, IconButton,Dialog,DialogTitle,DialogContent,DialogActions,CircularProgress} from '@mui/material/';
import MySnackbar from "../../Components/MySnackbar/MySnackbar";
import { MdClearAll } from "react-icons/md";
import { FcFullTrash,FcSearch,FcAddRow,FcDeleteRow,FcInTransit,FcDonate,FcPrint  } from "react-icons/fc";
import {todayDate} from "../../Components/StaticData";
import NoResult from "@/app/Components/NoResult/NoResult";
import { invoiceService } from "../../services/";
import Autocomplete from '@mui/material/Autocomplete';



const EntryInvoice = forwardRef((props, ref) => {
    const [_id, setId] = useState("");
    const [loading, setLoading] = useState(true);
    const snackRef = useRef();
    const [tranDate, setDate] = useState("");
    const [voucher, setVoucher] = useState("");
    const [cb, setCb] = useState("");
    const [ledger, setLedger]= useState(null);
    const [payer, setPayer] = useState(null);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [cityState, setCityState] = useState(null);
    const [rows, setRows] = useState([{item:null,issuedOn:"",price:"",qty:"",amount:"",taxPercent:"",taxValue:""}]);
    const [payment, setPayment] = useState([]);
    const [paymentBox, setPayBox] = useState(false);
    const [payDate, setPayDate] = useState("");
    const [mode, setMode] = useState(null)
    const [amount, setAmt] = useState("")
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchText, setSearchText] = useState("");
    const [totalCount,setTotalCount] = useState(0);
    const [allLedgers, setAllLed] = useState([]);
    const [allPayer, setAllPayer] = useState([]);
    const [allItem, setAllItem] = useState([]);
    const [allMode,setAllMode] = useState([])
    const [result,setResult] = useState([]);
    const [itemCost,setItemCost]=useState("");
    const [tax,setTax]=useState("");
    const [freight, setFreight] = useState("");
    const [discount, setDiscount] = useState("");
    const [netAmount, setAmount] = useState("")
    const [paid, setPaid] = useState("");
    const [dues, setDues] = useState("")
    
    const getResult = async()=>{
      setLoading(true)
      let res = await invoiceService.getLedger(`api/v1/residence/invoice/getInvoice/getDataWithPage/${rowsPerPage}/${page}/${searchText}`);
      if(res.variant === "success"){
          setLoading(false)
          setResult(res.data);
          setTotalCount(res.totalCount);
       }else {snackRef.current.handleSnack(res);setLoading(false); console.log(res)};   
    }
    useEffect(() => {
      getResult()
      return () => {
        setResult([])
      }
    }, [searchText,page,rowsPerPage])

    useEffect(() => {
      // Getting all the Ledgers
      async function getLedger(){
        let res = await invoiceService.getLedger(`api/v1/residence/getResidence/dropdown/allResidence`);
        if(res.variant === "success"){
          setAllLed(res.data)
        }else {snackRef.current.handleSnack(res); console.log(res)};    
       }
       getLedger()
     }, [])

     useEffect(() => {
      // Getting all the Mode
      async function getLedger(){
        let res = await invoiceService.getLedger(`api/v1/account/payment/getPayment/dropdown/getLedger`);
        if(res.variant === "success"){
          let payMode = res.data.filter(f=>f.group === "Cash in Hand" || f.group === "Bank Accounts")
          setAllMode(payMode)
        }else {snackRef.current.handleSnack(res); console.log(res)};    
       }
       getLedger()
     }, [])

     useEffect(() => {
      // Getting all the Payer
      async function getPayer(){
        let res = await invoiceService.getLedger(`api/v1/enquiry/contact/getContact/dropDown/getAll/${ledger._id}`);
        if(res.variant === "success"){
          setAllPayer(res.data)
        }else {snackRef.current.handleSnack(res); console.log(res)};    
       }
       if(ledger){
        getPayer()
       }
     }, [ledger])

     useEffect(() => {
      // Getting all the Billing Items
      async function getBillingItem(){
        let res = await invoiceService.getLedger(`api/v1/residence/recPayment/getRecPayment/dropDown/getAll/${ledger._id}`);
        if(res.variant === "success"){
          setAllItem(res.data)
        }else {snackRef.current.handleSnack(res); console.log(res)};    
       }
       if(ledger){
        getBillingItem()
       }
     }, [ledger])

    // const getResult = async()=>{
    //   let baseUrl;
    //   if(receipt){
    //     baseUrl = `api/v1/account/receipt/getReceipt/getDataWithPage/${rowsPerPage}/${page}/${searchText}`;
    //   }else baseUrl = `api/v1/account/payment/getPayment/getDataWithPage/${rowsPerPage}/${page}/${searchText}`;
    //   let res = await payReceiveService.getPayRec(baseUrl);
    //   if(res.variant === "success"){
    //       setResult(res.data);
    //       setTotalCount(res.totalCount);
    //    }else {snackRef.current.handleSnack(res); console.log(res)};   
    // }
    // useEffect(() => {
    //   getResult()
    //   return () => {
    //     setResult([])
    //   }
    // }, [searchText,page,rowsPerPage,_id])

    useEffect(() => {
      setDate(todayDate())
      setPayDate(todayDate()) 
    }, [])

    const handleObjChange=(e,i,p)=>{
      let newArr = [...rows]; // copying the old datas array
      if(p==="item"){
        if(e){
        newArr[i].item = e;
        newArr[i].issuedOn = e.issuedOn;
        newArr[i].price = e.price;
        newArr[i].qty = e.qty;
        newArr[i].taxPercent = +e.taxPercent;
        newArr[i].taxValue = +e.taxValue;
        newArr[i].amount = +e.amount ;
        }else{
          newArr[i].item = null;
          newArr[i].issuedOn = "";
          newArr[i].price = "";
          newArr[i].qty = "";
          newArr[i].taxPercent = "";
          newArr[i].taxValue = "";
          newArr[i].amount = "";
        }
      }
      setRows(newArr)
  }
    
    const handleClear =(d)=>{
      props.setId(d? d._id : "");
      setDate(d? d.tranDate : todayDate());
      setVoucher(d? d.voucher : "");
      setLedger(d ? d.ledger : null);
      setPayer(d ? d.payer : null);
      setEmail(d ? d.payer?.email : "");
      setAddress(d ? d.payer?.billingAddress : "");
      setZip(d ? d.payer?.zipCode : "");
      setCityState(d ? {city: d.payer?.city, state:d.payer?.state} : null);
      setRows(d ? d.rows : [{item:null,issuedOn:"",price:"",qty:"",amount:"",taxPercent:"",taxValue:""}] )
      setPayment(d ? d.payment : []);
      setPayDate(todayDate());
      setMode(null);
      setAmt("");
      setFreight(d ? d.freight : "");
      setDiscount(d ? d.discount : "");
    }
    const handleAdd = (mode,i)=>{
      if(mode==="add"){
        let Arr1 = [...rows]
      let newArr=[...Arr1,{item:null,issuedOn:"",price:"",qty:"",amount:"",taxPercent:"",taxValue:""}]
      setRows(newArr);
      }else if(mode==="delete"){
        let Arr1 = [...rows] 
          if (Arr1.length > 1) {
               var filtered = rows
                 var newArr = [...filtered].filter(function(value, index, arr){ 
                  return index !== i;
                  });
                  setRows(newArr)
            } else {
                  alert("Not Allowed to delete this.")
            }
          }
      }
    const removePay=(i)=>{
      let y = confirm("Are you sure to remove this payment ?");
      if (y){
        let Arr2 = [...payment]
      if (Arr2.length > 1) {
        var filtered = payment
          var newArr = [...filtered].filter(function(value, index, arr){ 
           return index !== i;
           });
           setPayment(newArr)
     } else {
           alert("Not Allowed to delete this.")
     } }
    }

 
  useEffect(() => {
    let cost = 0, myTax = 0, myPaid = 0 ; 
    rows.map(r=> {
      cost = cost + +r.amount;
      myTax = myTax + +r.taxValue;
    })
    payment.map(p=>{
      myPaid = +myPaid + +p.amount
    })
    setItemCost(cost.toFixed(2));
    setTax(myTax.toFixed(2));
    let mySum = ((+cost  + +freight) - +discount);
    setAmount(mySum.toFixed(2));
    setPaid(myPaid.toFixed(2))
    setDues((+mySum - +paid).toFixed(2))
     }, [rows,freight,discount,paid,payment])
  

     useImperativeHandle(ref, () => ({
          handleSubmit: async () => {
            try {
              let data = {prospectId:props.id,tranDate,voucher,cb,ledger,payer,email,address,zip,cityState,rows,payment,freight,discount,netAmount,paid,dues };
              let response = await invoiceService.saveInvoice("api/v1/residence/invoice/addInvoice", props.id, data);
               if(response.variant === "success"){
               snackRef.current.handleSnack(response);
               handleClear();
               await getResult()
             }else snackRef.current.handleSnack(response);            
            } catch (error) {
             console.log(error);
             snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.response.data.message, variant:"error"});
            } 
         },
         handleClear: () => handleClear() 
      }));

    async function deleteData(){
      let y = confirm(`Are you sure, you want to delete: ${ledger?.label} ?`)
      if (y){
        // let baseUrl;
        // if(receipt){
        //   baseUrl = `api/v1/account/receipt/addReceipt/deleteOne/${_id}`
        // }else baseUrl = `/api/v1/account/payment/addPayment/deleteOne/${_id}`
        // let res = await payReceiveService.deletePayRec(baseUrl);
        // if(res.variant === "success"){
        //   getResult()
        //   snackRef.current.handleSnack(res);
        //   handleClear()
        // }else {snackRef.current.handleSnack(res); console.log(res)}; 
      }
    }
    return (
      <main >
      <Grid container>
          <Grid item xs={12} md={8} sx={{background:"#fff",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"10px", padding:"10px"}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Create Invoice</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth value={tranDate} sx={{maxWidth:"130px"}} onChange={e=>setDate(e.target.value)} label="Invoice Date" size='small' type="date" focused variant="standard" />   
              </Grid>
              <Grid item xs={12} md={4}>
              {/* <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Payment Voucher</Typography> */}
              </Grid>
              <Grid item xs={12} md={4}>
                {voucher && <Typography color="teal" sx={{fontFamily: 'Courgette'}} variant='body1' align='right'>Voucher No :  {voucher}</Typography>}
                {cb &&  <Typography color="tomato" sx={{fontFamily: 'Courgette'}} variant='body1' align='right'>Current Balance : $  {cb}</Typography>}
              </Grid>
              <Grid item xs={12} md={4}>
              <Autocomplete
              isOptionEqualToValue={(option, value) => option._id === value._id}
              options={allLedgers}
              onChange={(e, v) => {
              setLedger(v);
              setPayer(null);
              setEmail("");
              setAddress("");
              setZip("");
              setCityState(null);
              }}
              value={ledger}
              groupBy={(option) => option.group}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option._id}>
                    {option.label}
                  </li>
                );
              }}
              renderInput={(params) => <TextField {...params} variant="outlined" helperText={ledger ? `${ledger.building}, ${ledger.floor}, Room :${ledger.room}` : ""} fullWidth label="Select Resident for Invoice"/>}
              />
              </Grid>
              <Grid item xs={12} md={4}>
              <Autocomplete
              isOptionEqualToValue={(option, value) => option._id === value._id}
              options={allPayer}
              onChange={(e, v) => {
              setPayer(v);
              if(v){
                setEmail(v?.email);
                setAddress(v?.billingAddress);
                setZip(v?.zipCode);
                setCityState({city:v?.city, state:v?.state});
              }else {
              setEmail("");
              setAddress("");
              setZip("");
              setCityState(null);
              }
              }}
              value={payer}
              groupBy={(option) => option.relation}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option._id}>
                    {option.label}
                  </li>
                );
              }}
              renderInput={(params) => <TextField {...params} variant="outlined" helperText={payer ? `Mobile No.: ${payer.mobile}` : "Select Resident, First."} fullWidth label="Select Payer of the Resident"/>}
              />
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField fullWidth label="Email Id" helperText="Use to sent Invoice" value={email} onChange={e=>setEmail(e.target.value)} type="email" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={8}>
              <TextField fullWidth label="Billing Address" value={address} onChange={e=>setAddress(e.target.value)} variant="standard" />
              </Grid>
              <Grid item xs={12} md={4}>
              <TextField fullWidth label="Zip Code" value={zip} type="number" helperText={cityState ? `${cityState.city}, ${cityState.state}` : ""} onChange={e=>setZip(e.target.value)} variant="standard" />
              </Grid>
              <Grid item xs={12}>
              <Table sx={{ minWidth: 650,borderRadius:"20px", boxShadow:"4px 0px 8px 3px rgba(0,0,0,0.1)" }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow sx={{backgroundColor:"lightcyan"}}>
                    <TableCell>Billing Item</TableCell>
                    <TableCell align="center">Issued On</TableCell>
                    <TableCell align="center">Unit&nbsp;Price</TableCell>
                    <TableCell align="center">Qty</TableCell>
                    <TableCell align="center">Tax</TableCell>
                    <TableCell align="center">Amount&nbsp;($)</TableCell>
                    <TableCell align="right"><IconButton onClick={()=> handleAdd("add")}><FcAddRow/></IconButton> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row,i) => (
                    <TableRow
                      key={i}
                      hover
                      sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" sx={{minWidth:250}} scope="row">
                      <Autocomplete
                        isOptionEqualToValue={(option, value) => option._id === value._id}
                        options={allItem}
                        onChange={(e, v) => {
                          handleObjChange(v, i, "item")
                        }}
                        value={row.item}
                        groupBy={(option) => option.category}
                        renderOption={(props, option) => {
                          return (
                            <li {...props} key={option._id}>
                              {option.label}
                            </li>
                          );
                        }}
                        renderInput={(params) => <TextField {...params} variant="standard" fullWidth placeholder="Item"/>}
                        />
                      </TableCell>
                      <TableCell align="center">{row.issuedOn}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.qty}</TableCell>
                      <TableCell align="center">{`${row.taxValue} (${row.taxPercent}%)`}</TableCell>
                      <TableCell align="center">{row.amount}</TableCell>
                      <TableCell align="right"><IconButton  onClick={()=>handleAdd("delete", i)}><FcDeleteRow/></IconButton> </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </Grid>
              <Grid item xs={12} md={3}> <br/>
              <TextField value={freight} sx={{maxWidth:"130px"}} InputProps={{ startAdornment: (<InputAdornment position="start"> <FcInTransit style={{fontSize:"20px"}}/> </InputAdornment>)}}  onChange={e=>setFreight(e.target.value)} label="Freight" placeholder="Freight" size='small' type="number" variant="standard" /> <br/><br/>
              <TextField value={discount} sx={{maxWidth:"130px"}} InputProps={{ startAdornment: (<InputAdornment position="start"> <FcDonate style={{fontSize:"20px"}} /> </InputAdornment>)}} onChange={e=>setDiscount(e.target.value)} label="Discount" placeholder="Discount" size='small' type="number" variant="standard" /> 
              </Grid>
              <Grid item xs={12} md={6}>
             <Table size="small" sx={{maxWidth:"400px"}} aria-label="Payment Table">
                <TableHead>
                  <TableRow sx={{backgroundColor:"azure"}}>
                    <TableCell align="left" sx={{width:"110px"}}><Typography variant="caption">Date</Typography></TableCell>
                    <TableCell align="center" sx={{maxWidth:"150px"}}><Typography variant="caption">Mode</Typography></TableCell>
                    <TableCell align="center" sx={{maxWidth:"50px"}}><Typography variant="caption">Amount</Typography></TableCell>
                    <TableCell align="right" sx={{maxWidth:"50px"}}><IconButton onClick={()=>setPayBox(true)}><FcAddRow/></IconButton> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>                      
                {payment.map((row,i) => (
                  <TableRow
                    key={i}
                    hover
                    sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left" sx={{width:"110px"}}>
                    <Typography variant="caption">{row.payDate}</Typography>
                    </TableCell>
                    <TableCell align="center"><Typography variant="caption">{row.mode?.label}</Typography></TableCell>
                    <TableCell align="center"> <Typography variant="caption">{row.amount}</Typography></TableCell>
                    <TableCell align="right"><IconButton onClick={()=>removePay(i)}><FcDeleteRow/></IconButton> </TableCell>
                  </TableRow>
                ))}
                </TableBody>
              </Table>
                <Dialog
                open={paymentBox}
                onClose={()=>setPayBox(false)}
                aria-labelledby="payment-box"
              >
                <DialogTitle id="payment-box">
                  Add Payment
                </DialogTitle>
                <DialogContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <TextField fullWidth size="small" label="Payment Date" value={payDate} onChange={e=>setPayDate(e.target.value)} focused type="date" variant="standard" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Autocomplete
                      isOptionEqualToValue={(option, value) => option._id === value._id}
                      options={allMode}
                      onChange={(e, v) => {
                      setMode(v);
                      }}
                      value={mode}
                      groupBy={(option) => option.group}
                      renderOption={(props, option) => {
                        return (
                          <li {...props} key={option._id}>
                            {option.label}
                          </li>
                        );
                      }}
                      renderInput={(params) => <TextField {...params} variant="standard" fullWidth sx={{minWidth:"185px"}} label="Select Payment Mode"/>}
                      /> 
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <TextField fullWidth size="small" label="Amount" value={amount} onChange={(e)=>setAmt(e.target.value)} type="number" variant="standard" />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={()=>setPayBox(false)} color="inherit">Back</Button>
                  <span style={{flexGrow:0.1}}/>
                  <Button variant="outlined" onClick={()=>{setPayment([...payment,{payDate,mode,amount}]);setPayBox(false)}}>
                    Add Payment
                  </Button>
                </DialogActions>
              </Dialog>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="caption">Item Cost : $ {itemCost}</Typography><br/>
                <Typography variant="caption">Tax (Inclusive) : $ {tax}</Typography><br/>
                <Typography variant="caption">Freight : (+) $ {freight}</Typography><br/>
                <Typography variant="caption">Discount : (-) $ {discount}</Typography><br/>
                <Divider sx={{maxWidth:150}} light/>
                <Typography variant="body2" color="teal">Net Amount : $ {netAmount}</Typography>
                <Typography variant="body2" color="darkgreen">Total Paid : $ {paid}</Typography>
                <Typography variant="body2" color="secondary">Dues : $ {dues}</Typography>
              </Grid>
            
              <Grid item xs={12} sx={{marginTop:"30px"}}>
                <Grid container justifyContent="space-between">
                <Button variant="outlined" onClick={()=>handleClear()} startIcon={<MdClearAll />}>Clear</Button>
               {voucher && <a target="_blank" href={`/print/invoice/${voucher}`} rel="noopener noreferrer">
                <Button variant="contained" startIcon={<FcPrint />} sx={{color:"#fff",borderRadius:"20px",padding:"5px 20px"}}>Preview</Button>
                </a>}
                <Button variant="outlined" onClick={()=>deleteData()} disabled={!props.id} startIcon={<FcFullTrash />}>Delete</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} md={0.2} className='center'>
          <Divider variant="fullWidth" orientation="vertical" />
          </Grid>
         
          <Grid item xs={12} md={3.5} className="boxEffect">
            <Grid container>
              <Grid item xs={12} sx={{padding:"10px"}}>
                <Input autoFocus disableUnderline sx={{padding:"10px"}} onChange={e=>setSearchText(e.target.value)} className="boxEffect" startAdornment={<FcSearch style={{fontSize:"24px", marginRight:"10px"}}/>} fullWidth  placeholder="Search Ledger/ Payer / Voucher No." /> 
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{margin:"10px 0px"}}>Search Result ({totalCount})</Divider>
                {loading ? <div className="center"><CircularProgress size={30}/> </div> : loading === false && result.length === 0 ? <NoResult label="No Result Available"/> : null} 
                <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {result.map((r,i)=>
                  <ListItem key={i} divider disableGutters>
                    <ListItemButton alignItems="flex-start" onClick={()=>handleClear(r)}>
                    <ListItemAvatar>
                  <Avatar alt={r?._id} src={r?.ledgerImage}/>
                  </ListItemAvatar>
                  <ListItemText primary={<div style={{display: "flex", justifyContent: "space-between"}}> <Typography color="darkgreen" variant="body2">{r?.payer?.label}</Typography> <Typography color="darkcyan" align="right" variant="body2">SL {(page*rowsPerPage)+(i+1)}</Typography></div>
                    } secondary={`For : ${r?.ledger?.label}, On : ${r?.tranDate}`} />
                    </ListItemButton>
                </ListItem>
                )}
                </List>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25,50]}
                  component="div"
                  count={result.length}
                  sx={{overflowX:"hidden"}}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={(e,v)=>setPage(v)}
                  onRowsPerPageChange={e=>{
                    setRowsPerPage(parseInt(e.target.value, 10));
                    setPage(0)
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
      </Grid>
      <MySnackbar ref={snackRef} />
      </main>
    )
  });
  
  export default EntryInvoice;