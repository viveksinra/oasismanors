const express = require("express");
const router = express.Router();
const passport = require("passport");
const Ledger = require("../../../../../Models/Private/Account/Ledger");
const {  formatDateToShortMonth } = require("../../../../../utils/dateFormat");
const Task = require("../../../../../Models/Private/Enquiry/Task");
const Note = require("../../../../../Models/Private/Enquiry/Note");

// @type    GET
// @route   /api/v1/account/ledger/getLedger/getAll/:id
// @desc    Get a ledger by ID
// @access  Public
router.get(
  "/getAll/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      // Find the ledger by ID
      const myLedger = await Ledger.findById(req.params.id);
      // Format date fields using formatDateToShortMonth function
      myLedger.forCreateDate = formatDateToShortMonth(myLedger.date);
      myLedger.forLastModified = formatDateToShortMonth(myLedger.lastModified);
      const totalCount = await totalCountCTN(req.params.id)
      // Send response with the loaded ledger
      const responseData = {
        variant: "success",
        message: "Ledger Loaded",
        data: {
          ...myLedger.toObject(),
          forCreateDate: myLedger.forCreateDate,
          forLastModified: myLedger.forLastModified,
          totalCount
        },
      };

      res.status(200).json(responseData);
    } catch (error) {
      // Handle errors
      console.log(error);
      res.status(500).json({
        variant: "error",
        message: "Internal server error",
      });
    }
  }
);

const totalCountCTN = async(pId) => {

  let totalPendingTask = await Task.find({"taskStatus.id":"new",ledgerId:pId}).countDocuments()
  let totalNotes = await Note.find({ledgerId:pId}).countDocuments();

    let totalCount = {
      totalPendingTask: totalPendingTask,
      totalNotes:totalNotes
    }
  return totalCount
}

  // @type    GET
  // @route   /api/v1/account/ledger/getLedger/getAll
  // @desc    Get all ledgers
  // @access  Public
  router.get(
    "/getAll",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
     
      try {

        const myData = await Ledger.find({})
   
        res
          .status(200)
          .json({ variant: "success", message: "Ledger Loaded", data: myData });
      } catch (error) {
        console.log(error)
        res.status(500).json({ variant: "error", message: "Internal server error" + error.message});
      }
    }
  );
  
  
  
  // @type    GET
  // @route   /api/v1/account/ledger/getLedger/getDataWithPage/:limit/:PageNumber
  // @desc    Get ledgers with pagination
  // @access  Public
  router.get(
    "/getDataWithPage/:sort/:limit/:PageNumber",
    passport.authenticate("jwt", { session: false }),
    async(req, res) => {
      try {
       
        let myMatch = { }
        let data = await commonSearchFilter(req,myMatch)
        res.status(200).json(data)
  

      } catch (error) {
  console.log(error)
        res.status(500).json({
          variant: "error",
          message: "Internal server error" + error.message,
        });
      }
    }
  );
  // @type    GET
  // @route   /api/v1/account/ledger/getLedger/getDataWithPage/:limit/:PageNumber/:filterByGroup/:search
  // @desc    Get ledgers with pagination
  // @access  Public
  router.get(
    "/getDataWithPage/:sort/:limit/:pageNumber/:filterByGroup",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        const filterByGroup = req.params.filterByGroup;
       
        let myMatch = { }
        if(filterByGroup != "allgroup"){
        myMatch = {"group._id":filterByGroup }
        }
        let data = await commonSearchFilter(req,myMatch)
        res.status(200).json(data)
  

      } catch (error) {
        console.log(error);
        res.status(500).json({
          variant: "error",
          message: "Internal server error" + error.message,
        });
      }
    }
  );

  router.get(
    "/getDataWithPage/:sort/:limit/:pageNumber/:filterByGroup/:search",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        const searchQuery = req.params.search;
        const filterByGroup = req.params.filterByGroup;     
     
        let myMatch = {
          $or: [
            { ledger: { $regex: new RegExp(searchQuery, "i") } },
            { "group.label": { $regex: new RegExp(searchQuery, "i") } },
            // Add more fields as needed for searching
          ],
        }
        if(filterByGroup != "allgroup"){
        myMatch = { $or: [
          { ledger: { $regex: new RegExp(searchQuery, "i") } },
          { "group.label": { $regex: new RegExp(searchQuery, "i") } },
          // Add more fields as needed for searching
        ],
        "group._id":filterByGroup }
        }
     
        let data = await commonSearchFilter(req,myMatch)
        res.status(200).json(data)
  

      } catch (error) {
        console.log(error);
        res.status(500).json({
          variant: "error",
          message: "Internal server error" + error.message,
        });
      }
    }
  );

  const commonSearchFilter = async(req,myMatch) => {
    const page = parseInt(req.params.pageNumber) || 0;
    const limit = parseInt(req.params.limit) || 10;
    let sort = req.params.sort
        let sortBy = { date: -1 }
        
        if(sort == "oldToNew"){
          sortBy = { date: +1 }
        }else if(sort == "important"){
          sortBy = { important: -1 }
        }

    
        // Calculate total count if it's the first page
        const totalCount = await Ledger.countDocuments(myMatch);
  
        // Retrieve ledgers with pagination and search filter
        let allLedger = await Ledger.find(myMatch)
          .skip(page * limit)
          .limit(limit)
          .sort(sortBy)
          .catch((err) => {
            throw new Error("An error occurred while retrieving ledgers.");
          });
  
        const modifiedData = allLedger.map((LedCare) => {
          return {
            ...LedCare.toObject(),
            ledgerImage:
              LedCare.ledgerImage ||
              "https://res.cloudinary.com/dncukhilq/image/upload/v1690208267/oasisManors/Default/myledgerDefault_x7kowb.jpg",
            createDate: formatDateToShortMonth(LedCare.createDate),
          };
        });
  
        return {
          variant: "success",
          message: "Ledger Loaded",
          data: modifiedData,
          page: page,
          totalCount: totalCount,
        };

  }
 

  // @type    GET
  // @route   /api/v1/account/ledger/getLedger/agentLedger/dropDown/getAll
  // @desc    Get all ledgers
  // @access  Public
  router.get(
    "/agentLedger/dropDown/getAll",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
     
      try {

        const myData = await Ledger.aggregate([
          {$match:{"group.link":"agent"}},
          {$project:{ledgerImage:1,ledger:1}}
        ]).exec()
   let modifiedData = myData.map(data => {

    return {
      label:data.ledger,
      ledgerImage:data.ledgerImage,
      _id:data._id
    }
   })
        res
          .status(200)
          .json({ variant: "success", message: "Agent Loaded", data: modifiedData });
      } catch (error) {
        console.log(error)
        res.status(500).json({ variant: "error", message: "Internal server error" + error.message});
      }
    }
  );

  

  module.exports = router;