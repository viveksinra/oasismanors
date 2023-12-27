const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Contact Model
const Contact = require("../../../../../Models/Private/Enquiry/Contact");
const LIC601  = require("./residence/LIC601");
const LIC9020  = require("./residence/LIC9020");
const LIC604A = require("./residence/LIC604A");
const LIC627A = require("./residence/LIC627A");
const LIC627C = require("./residence/LIC627C.JS");
const LIC603 = require("./residence/LIC603");
const LIC605A = require("./residence/LIC605A");
const LIC625 = require("./residence/LIC625");
const LIC613C = require("./residence/LIC613C");
const LIC9158 = require("./residence/LIC9158");
const LIC621 = require("./residence/LIC621");
const LIC405 = require("./residence/LIC405");

// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic601/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic601/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC601(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic604a/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic604a/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC604A(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic627a/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic627a/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC627A(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic627c/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic627c/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC627C(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic603/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic603/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC603(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic605a/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic605a/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC605A(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic625/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic625/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC625(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic613c/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic613c/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC613C(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic621/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic621/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC621(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic613c/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic9158/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC9158(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic405/:residenceId
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic405/:residenceId",
  // passport.authenticate("jwt", { session: false }),

  async (req, res) => {
    try {
      let resId = req.params.residenceId
     await LIC405(res,resId)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    GET
// @route   /api/v1/form/formFunction/getFormData/residence/lic9020
// @desc    Create a 
// @access  Private
router.get(
  "/residence/lic9020",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
    await LIC9020(res)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);




module.exports = router;
