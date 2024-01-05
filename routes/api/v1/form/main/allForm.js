const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Contact Model

const ResidenceData = require("./Component/ResidenceForms");
let mongoose = require('mongoose');
const CommunityData = require("./Component/CommunityForm");
// @type    GET
// @route   /api/v1/form/main/allForm/allType
// @desc    Create a 
// @access  Private
router.get(
  "/allTypeOfForm",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
     let myMatch = { residenceStage: "residence" }
      let resData = await ResidenceData(req, res,myMatch)
      let facData = await CommunityData(req, res)

        let myData =  [
            {
            category:"Resident File Checklist",
            expand:true,
         residentData:resData
        },
        {category:"Forms for Community",
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

// @type    GET
// @route   /api/v1/form/main/allForm/allResidence
// @desc    Create a 
// @access  Private
router.get(
  "/allResidence",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
     let myMatch = { residenceStage: "residence" }
      let resData = await ResidenceData(req, res,myMatch)

        res.json({
            message: "DATA Loaded",
            variant: "success",
            data: resData,
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
// @route   /api/v1/form/main/allForm/allCommunity
// @desc    Create a 
// @access  Private
router.get(
  "/allCommunity",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
     let myMatch = {  }

      let facData = await CommunityData(req, res,myMatch)

        res.json({
            message: "DATA Loaded",
            variant: "success",
            data: facData,
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
// @route   /api/v1/form/main/allForm/allCommunity
// @desc    Create a 
// @access  Private
router.get(
  "/allEmployee",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
     let myMatch = {  }

      let facData = await CommunityData(req, res,myMatch)

        res.json({
            message: "DATA Loaded",
            variant: "success",
            data: facData,
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
