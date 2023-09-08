const express = require("express");
const router = express.Router();
const passport = require("passport");
const ResMed = require("../../../../../Models/Private/Residence/ResMed");
const Prospect = require("../../../../../Models/Private/Enquiry/Prospect");
const { verifyMongoId } = require("../../../../../validation/verifyId");
const ProvideMed = require("../../../../../Models/Private/Residence/ProvideMed");
var mongoose = require('mongoose');
const {
  formatDateToLong,formatDateToISO,convertTimeTo12HourFormat,convertTimeTo24HourFormat,formatTimeWithTimeZone
} = require("../../../../../utils/dateFormat");
const { medProData } = require("./getMedPro");




// @type    GET
// @route   /api/v1/residence/resMed/getResMed/getAll/:prospectId/:id
// @desc    Get a resMed by ID
// @access  Public
router.get(
    "/getAll/:prospectId/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {

      try {
        const resMed = await ResMed.findById(req.params.id);
if (!resMed) {
  return res
    .status(404)
    .json({ 
      variant: "error", 
      message: "Data not found" });
}
const formattedResMedDate = formatDateToLong(resMed.date);
const formatedLastModified = formatDateToLong(resMed.lastModified);
const formatedStartDate = resMed.startDate?formatDateToISO(resMed.startDate): resMed.startDate;
const formatedEndDate = resMed.endDate?formatDateToISO(resMed.endDate):resMed.endDate;
const formatedImage = resMed.image || "https://onemg.gumlet.io/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/hx2gxivwmeoxxxsc1hix.png";

let formattedData = {
  ...resMed.toObject(),     
  date:formattedResMedDate,
  lastModified:formatedLastModified,
  startDate:formatedStartDate,
  endDate:formatedEndDate,
  image:formatedImage,

};
res.status(200).json({ variant: "success", message: "Data Loaded", data: formattedData });
      } catch (error) {
        console.log(error)
        res
          .status(500)
          .json({ 
            variant: "error", 
            message: "Internal server error" + error.message});
      }
    }
  );
  
  // @type    GET
  // @route   /api/v1/residence/resMed/getResMed/getAll/:prospectId
  // @desc    Get all resMeds
  // @access  Public
  router.get(
    "/getAll/:prospectId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
     
      try {


        const myData = await ResMed.find({prospectId: req.params.prospectId})
        const modifiedData = myData.map((resMed) => {
          const formattedResMedDate = formatDateToLong(resMed.date);
          const formatedLastModified = formatDateToLong(resMed.lastModified);
          const formatedStartDate = resMed.startDate?formatDateToLong(resMed.startDate): "Not Given";
          const formatedEndDate = resMed.endDate?formatDateToLong(resMed.endDate):"Not Given";
          const formatedImage = resMed.image || "https://onemg.gumlet.io/l_watermark_346,w_240,h_240/a_ignore,w_240,h_240,c_fit,q_auto,f_auto/hx2gxivwmeoxxxsc1hix.png";
    
          return {
            ...resMed.toObject(),     
            date:formattedResMedDate,
            lastModified:formatedLastModified,
            startDate:formatedStartDate,
            endDate:formatedEndDate,
            image:formatedImage,
          };
        });
        let myUser = await Prospect.findById(req.params.prospectId)
        let ourUser = {firstName:myUser.firstName, lastName:myUser.lastName, room:myUser.room.label, seat:myUser.seat.label,important: myUser.important,userImage:myUser.userImage}
        res
          .status(200)
          .json({ variant: "success", message: "Data Loaded",user:ourUser, data: modifiedData });
      } catch (error) {
        res.status(500).json({ variant: "error", message: "Internal server error" + error.message});
      }
    }
  );
  

  
  // @type    GET
  // @route   /api/v1/resMed/getDataWithPage
  // @desc    Get resMeds with pagination
  // @access  Public
  router.post(
    "/getDataWithPage/:PageNumber",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      try {
        const page = parseInt(req.params.PageNumber) || 1; // Get the page number from the route parameters (default to 1)
        const limit = 10; // Number of records to retrieve per page
  
        // Retrieve resMeds with pagination
        ResMed.find()
          .skip((page - 1) * limit) // Skip the appropriate number of records based on the page number
          .limit(limit) // Limit the number of records to retrieve
          .then((resMeds) => {
            // Calculate total count if it's the first page
            const totalCountPromise =
              page === 1 ? ResMed.countDocuments() : Promise.resolve(0);
  
            // Respond with resMeds and total count
            Promise.all([totalCountPromise, resMeds])
              .then(([totalCount, resMeds]) => {
                const response = {
                  page,
                  totalCount: totalCount || resMeds.length, // Use totalCount if available, otherwise use the length of resMeds
                  resMeds,
                };
                res.status(200).json({ variant: "success",message:"Data Loaded", data: response });
              })
              .catch((err) => {
                throw new Error("An error occurred while retrieving resMeds.");
              });
          })
          .catch((err) => {
            throw new Error("An error occurred while retrieving resMeds.");
          });
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
//@route    /api/v1/residence/resMed/getResMed/getall/:searchResMed
// @desc    route for searching of user from searchbox using any text
// @access  PRIVATE
router.get(
    "/getAll/:searchResMed",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
          const search = req.params.searchResMed; 
        
          try {
            const mydata = await ResMed.aggregate([
              {$match:{$or: [              
                { firstName: new RegExp(search, "i") },
                { lastName: new RegExp(search, "i") },
                { phone: new RegExp(search, "i") },     
              
            ]}},
          
            ]);
           
            res.status(200).json({ variant: "success",message:"ResMed Loaded", data:mydata });
          } catch (error) {
            console.log(error);
            res.status(500).json({
              variant: "error",
              message: "Internal server error" + error.message,
            });
          }
      
    }
  );



    // @type    GET
  // @route   /api/v1/residence/resMed/getResMed/byDate/:prospectId
  // @desc    Get all resMeds
  // @access  Public
  router.post(
    "/byDate/:prospectId",
    verifyMongoId,
    passport.authenticate("jwt", { session: false }),
    async (req, res) => 
  {
    let timeZone = req.body.timeZone || "+5.30"

   let dataToSend = await medProData(req.body.date,req.params.prospectId,timeZone)
    res
    .status(200)
    // .json({pData,updatedSecondFilter});
    .json(dataToSend);
  }
  );


  

  module.exports = router;
 