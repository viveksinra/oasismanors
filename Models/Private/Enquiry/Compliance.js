const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComplianceSchema = new Schema({
 
  documentName: {
    type: String,
    required:true
  },
  documentUrl: {
    type: String,
    default: ""
  },
  expiryDate: {
    type: Date,
  },
  prospectId:{
    type: Schema.Types.ObjectId,
   ref: "myProspect",
   required:true
  },
  // Default for all
 communityId: {
    type: String,
    default: "647654545893b52b5c8bbc61"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "myUser",
    required: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "myCompany",
    default: "647644e05117173d58993882"
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Compliance = mongoose.model("Compliance", ComplianceSchema);

module.exports = Compliance;
