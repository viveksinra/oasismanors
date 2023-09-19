const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeatSchema = new mongoose.Schema({
    changeType:{
        type: String,
    required: true,
    enum:[
      "building","floor","room","seat"
    ]
    },
  building: {
   label: {
    type: String,
    required: true
},
   _id: {
    type: Schema.Types.ObjectId,
    ref: "Seat",
},

  },
  floor: {
    label: {
        type: String,
    },
    _id: {
      type: Schema.Types.ObjectId,
      ref: "Seat",
  },
  },
  room: {
    label: {
        type: String,
    },
    _id: {
      type: Schema.Types.ObjectId,
      ref: "Seat",
  },
  },
  seat: {
    label: {
        type: String,
    },
    _id: {
      type: Schema.Types.ObjectId,
      ref: "Seat",
  },
  },
    // Default for all
 community: {
  type: Schema.Types.ObjectId,
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
  date: {
    type: Date,
    default: Date.now
  }
});

const Seat = mongoose.model('Seat', SeatSchema);

module.exports = Seat;
