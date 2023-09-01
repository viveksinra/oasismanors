'use client';
import React,{ useState,useEffect,forwardRef,useRef,useImperativeHandle} from 'react'
import {Grid,FormControlLabel,Checkbox,Typography,TextField,Avatar} from '@mui/material/';
import MySnackbar from "../../../Components/MySnackbar/MySnackbar";
import { careService } from "../../../services";
import {todayDate} from "../../../Components/StaticData";
import Autocomplete from '@mui/material/Autocomplete';



const EntryRecurring = forwardRef((props, ref) => {
    const [image] = useState("https://res.cloudinary.com/oasismanors/image/upload/v1691840500/Recurring_Charge_hnqjxd.jpg")
    const snackRef = useRef();
    const [recurring, setRec] = useState(false);
    const [payerType, setPayerType] = useState(null);
    const [payer, setPayer] = useState(null);
    const [item, setItem] = useState(null);
    const [description, setDisc]= useState("");
    const [startDate, setStartDate]=useState("");
    const [endDate, setEndDate]= useState("");
    const [price, setPrice] = useState("");
    const [taxPercent, setTaxPercent] = useState("");
    const [discontinue, setDis] =useState(false);
    const [allPayerType,setAllPT] = useState([{_id:"insurance",label:"Insurance"},{_id:"medicaid",label:"Medicaid"},{_id:"private",label:"Private"}]);
    const [allPayer, setAllPayer] = useState([])
    const [allBillingItem, setBI]= useState([])

    useEffect(() => {
      async function getData() {
        try {
          let res = await careService.getCare(`api/v1/residence/recPayment/getRecPayment/getAll/${props.prospectId}`, props.id);
          if(res.variant === "success"){
            handleClear(res.data)
            snackRef.current.handleSnack(res);
          }else snackRef.current.handleSnack(res);            
        } catch (error) {
          console.log(error);
          snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
        } 
      }
      if(props.id){getData()}
      
    }, [props.id])

    useEffect(() => {
     async function getAllPT() {
          try {
            let res = await careService.getCare(`api/v1/residence/payerType/getPayerType/getAll`, "");
            if(res.variant === "success"){
            setAllPT(res.data);
           }else snackRef.current.handleSnack(res);            
          } catch (error) {
           console.log(error);
           snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
          } 
        }
        getAllPT()
    }, [])

    useEffect(() => {
        async function getAllPayer() {
        try {
        let res = await careService.getCare(`api/v1/residence/payerType/getPayerType/getPayer/${props.prospectId}/${payerType?.id}`, "");
        if(res.variant === "success"){
         setAllPayer(res.data);
        }else snackRef.current.handleSnack(res);            
        } catch (error) {
        console.log(error);
        snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
        } 
         }
        if(payerType){ getAllPayer()}
       }, [payerType])

    useEffect(() => {
        async function getAllBI() {
             try {
               let res = await careService.getCare(`api/v1/residence/payerType/getPayerType/getBillItem/getAll`, "");
               if(res.variant === "success"){
                setBI(res.data);
              }else snackRef.current.handleSnack(res);            
             } catch (error) {
              console.log(error);
              snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.res.data.message, variant:"error"});
             } 
           }
           getAllBI()
       }, [])
    
    useEffect(() => {
        setStartDate(todayDate())
      }, [])

    useEffect(() => {
      if(discontinue){
        setEndDate(todayDate())
      }
     }, [discontinue])

    const handleClear =(d)=>{
      props.setId(d? d._id : "");
      setRec(d ? d.recurring : false)
      setPayerType(d ? d.payerType : null);
      setPayer(d ? d.payer : null);
      setItem(d ? d.item : null);
      setDisc(d ? d.description : "");
      setStartDate(d ? d.startDate : todayDate());
      setEndDate(d ? d.endDate : "");
      setPrice(d ? d.price : "");
      setTaxPercent(d ? d.taxPercent : "");
      setDis(d ? d.discontinue : false);
    }

     useImperativeHandle(ref, () => ({
          handleSubmit: async () => {
            try {
              let data = {prospectId:props.prospectId,payerType,recurring, payer,item,description,startDate,endDate,price,taxPercent, discontinue };
              let response = await careService.saveCare("api/v1/residence/recPayment/addRecPayment", props.id, data);
               if(response.variant === "success"){
               snackRef.current.handleSnack(response);
               handleClear();
             }else snackRef.current.handleSnack(response?.response?.data);            
            } catch (error) {
             console.log(error);
             snackRef.current.handleSnack({message:"Failed to fetch Data. " + error.response.data.message, variant:"error"});
            } 
         },
         handleClear: () => handleClear() 
      }));
      
    return (
     <main style={{backgroundColor:"#fff", borderRadius:8, marginBottom:2, padding:"10px"}}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={4} className='center'>
          <FormControlLabel  control={<Checkbox size="small" checked={recurring} onChange={()=>setRec(!recurring)}/>} label="Recurring Charge" />
            </Grid>
          <Grid item xs={12} md={4} style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
           <Typography color="secondary" style={{fontFamily: 'Courgette'}} variant='h6' align='center'>Add {recurring && "Recurring"} Charge</Typography>
           <Avatar alt="medication-Img" sx={{width: 160, height: 160}} variant="square" src={image}/>
          </Grid>
          <Grid item xs={12} md={4} className='center'>
          {props?.id && <FormControlLabel control={<Checkbox size="small" checked={discontinue} onChange={()=>setDis(!discontinue)}  />} label="Discontinued" /> }
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
      <Autocomplete
            isOptionEqualToValue={(option, value) => option._id === value._id}
            options={allBillingItem}
            onChange={(e, v) => {
            setItem(v);
            if(v){
              setPrice(v.price)
            } else setPrice("")
            }}
            value={item}
            groupBy={(option) => option.category}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option._id}>
                  {option.label}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} variant="standard" fullWidth label="Select Billing Item"/>}
            />
      </Grid>
      <Grid item xs={12} md={4}>
      <Autocomplete
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={allPayerType}
            onChange={(e, v) => {
            setPayerType(v);
            setPayer(null)
            }}
            value={payerType}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.label}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} variant="standard" fullWidth label="Select Payer Type"/>}
            />
      </Grid>
      <Grid item xs={12} md={4}>
      <Autocomplete
            isOptionEqualToValue={(option, value) => option._id === value._id}
            options={allPayer}
            onChange={(e, v) => {
            setPayer(v);
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
            renderInput={(params) => <TextField {...params} variant="standard" helperText="First Select Payer Type" fullWidth label="Select Payer"/>}
            />
      </Grid>
     
      <Grid item xs={12}>
      <TextField fullWidth label="Description" minRows={4} multiline value={description} onChange={e=>setDisc(e.target.value)} placeholder='Describe the Charge...' variant="standard" />   
      </Grid>
      <Grid item xs={12} md={2}>
      <TextField fullWidth label="Start Date" helperText="Inclusive Start Date" value={startDate} onChange={e=>setStartDate(e.target.value)} type="date" focused variant="standard" />   
      </Grid>
      <Grid item xs={12} md={2}>
      <TextField fullWidth label="End Data" disabled={discontinue || recurring===false} helperText="Inclusive End Date" value={recurring===false ? startDate : endDate} onChange={e=>setEndDate(e.target.value)} type="date" focused variant="standard" />   
      </Grid>
      <Grid item xs={12} md={3}>
      <TextField fullWidth label="Price ($)" helperText="You may change the recommended Price." type="number" value={price} onChange={e=>setPrice(e.target.value)} focused variant="outlined" />   
      </Grid>
      <Grid item xs={12} md={3}>
      <TextField fullWidth label="Tax (in %)" helperText="Tax in Percentage" type="number" value={taxPercent} onChange={e=>setTaxPercent(e.target.value)} focused variant="outlined" />   
      </Grid>
      <Grid item xs={12} md={2}>
      <TextField fullWidth label="Total Amount" helperText="Sum of (Price + Tax Value)" type="number" value={(+price + ((+price*taxPercent)/100))} disabled focused variant="filled" />   
      </Grid>
      </Grid>
      <MySnackbar ref={snackRef} />
     </main>
    )
  });
  
  export default EntryRecurring;