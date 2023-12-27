const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  
communityName:{
    type: String,
    required: true
  },
  buildingNumber:{
    type: String,
    default:""
  },
  licenseNumber:{
    type: String,
    required: true
  },
  communityMobileNumber:{
    type: String,
    required: true
  },
  communityAddress:{
    type: String,
    required: true
  },
  communityCity:{
   city:{ 
    type: String,
    required: true
  },
  state:{
    type: String,
    required: true
  }
  },
  communityState:{
    type: String,
    required: true
  },
  communityZipCode:{
    type: String,
    required: true
  },
  licenseeName:{
    type: String,
    required: true
  },
  licenseeMobileNumber:{
    type: String,
    required: true
  },
  licenseeAddress:{
    type: String,
    required: true
  },
  licenseeCity:{
    city:{ 
      type: String,
      required: true
    },
    state:{
      type: String,
      required: true
    }
  },
  licenseeState:{
    type: String,
    required: true
  },
  licenseeZipCode:{
    type: String,
    required: true
  },
  timeZone: {
    label: {
      type: String,
      default: "Pacific Standard Time (PST) UTC-8",
      enum: [
        "Eastern Standard Time (EST) UTC-5",
        "Central Standard Time (CST) UTC-6",
        "Mountain Standard Time (MST) UTC-7",
        "Pacific Standard Time (PST) UTC-8",
        "Indian Standard Time (IST) UTC+5:30",
        // Add other timezones as needed
      ],
    },
    value: {
      type: String,
      default: "UTC-8",
      enum: [
        "UTC-5",
        "UTC-6",
        "UTC-7",
        "UTC-8",
        "UTC+5:30",
        // Add other timezone values as needed
      ],
    },
  },
  
  // comman data required in every Model
  user: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true
  },
  company:{
    type: Schema.Types.ObjectId,
    ref: "myCompany",
    default: "647644e05117173d58993882"

  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Community = mongoose.model("myCommunity", CommunitySchema);
