const Ledger = require("../Models/Private/Account/Ledger")
const Prospect = require("../Models/Private/Enquiry/Prospect")

async function GetLedgerDetails(type,id){
    let data = {}

    if (type == "prospect" || type == "employee"){
     data = await getProspectDetails(id)
} else if (type == "ledger"){
     data = await getLedgerDetails(id)
}

return data
}

const getProspectDetails= async(id) => {
    let data = await Prospect.findById(id)
if(data){
    let myData = {
    label:data.lastName + " " + data.firstName,
address:data.streetAddress,
 city:data.city, 
 state:data.state.label, 
 zip:data.zipCode, 
 mobile:data.phone, 
email:data.email
}
return myData
}
}

const getLedgerDetails= async(id) => {
    let data = await Ledger.findById(id)
if(data){let myData = {
    label:data.ledger,
address:data.street ,
 city:data.city, 
 state:data.state.label, 
 zip:data.zip, 
 mobile:data.mobile, 
email:data.email
}

return myData}
}

module.exports = GetLedgerDetails