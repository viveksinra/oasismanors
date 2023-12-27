const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Contact Model
const Contact = require("../../../../../Models/Private/Enquiry/Contact");
const Prospect = require("../../../../../Models/Private/Enquiry/Prospect");
const ResidenceData = require("./Component/ResidenceForms");
const FacilityData = require("./Component/FacilityForm");
let mongoose = require('mongoose');
// @type    GET
// @route   /api/v1/form/main/allForm/allType
// @desc    Create a 
// @access  Private
router.get(
  "/allType",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
     let myMatch = { residenceStage: "residence" }
      let resData = await ResidenceData(req, res,myMatch)
      let facData = await FacilityData(req, res)

        let myData =  [
            {
            category:"Resident File Checklist",
            expand:true,
         residentData:resData
        },
        {category:"Forms for Facility",
        expand:false,
        forms:facData,
    },
      ]
        res.json({
            message: "DATA Loaded",
            variant: "success",
            data: myData,
        });


    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/main/allForm/oneResident/:id
// @desc    Create a 
// @access  Private
router.get(
  "/oneResident/:id",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      let myMatch = { _id: mongoose.Types.ObjectId(req.params.id) }
      let resData = await ResidenceData(req, res,myMatch)


        res.json({
            message: "DATA Loaded",
            variant: "success",
            data: resData[0],
        });


    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);






module.exports = router;
