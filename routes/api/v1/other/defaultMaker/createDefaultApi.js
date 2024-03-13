const express = require("express");
const router = express.Router();
const passport = require("passport");
const defaultGroupMaker = require("./Group/DefaultGroup");
const defaultLedgerMaker = require("./Group/DefaultLedger");

// @type    POST
// @route   /api/v1/other/defaultMaker/createDefaultApi/defaultGroupMaker
// @desc    Create a new group
// @access  Public
router.post(
  "/defaultGroupMaker",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
        defaultGroupMaker(req,res)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);
// @type    POST
// @route   /api/v1/other/defaultMaker/createDefaultApi/defaultLedgerMaker
// @desc    Create a new group
// @access  Public
router.post(
  "/defaultLedgerMaker",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      defaultLedgerMaker(req,res)
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);





module.exports = router;
