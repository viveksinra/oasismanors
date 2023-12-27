const express = require("express");
const router = express.Router();
const passport = require("passport");
const RoleAccess = require("../../../../../Models/Access/RoleAccess");

// @type    GET
// @route   /api/v1/access/roleAccess/getAccess/getAll/:id
// @desc    Get a roleAccess by ID
// @access  Public
router.get(
    "/getAll/:id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      try {
        const roleAccess = await RoleAccess.findById(req.params.id);
if (!roleAccess) {
  return res
    .status(404)
    .json({ 
      variant: "error", 
      message: "RoleAccess not found" });
}
res.status(200).json({ variant: "success", message: "RoleAccess Loaded", data: roleAccess });
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
  // @route   /api/v1/access/roleAccess/getAccess/getAll
  // @desc    Get all roleAccesss
  // @access  Public
  router.get(
    "/getAll",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
     
      try {

        const myData = await RoleAccess.find()
    

        res
          .status(200)
          .json({ variant: "success", message: "RoleAccess Loaded", data: myData });
      } catch (error) {
        res.status(500).json({ variant: "error", message: "Internal server error" + error.message});
      }
    }
  );
  
  
 
  // @type    GET
  // @route   /api/v1/access/roleAccess/getAccess/getDataWithPage/:limit/:PageNumber
  // @desc    Get ledgers with pagination
  // @access  Public
  router.get(
    "/getDataWithPage/:limit/:PageNumber",
    passport.authenticate("jwt", { session: false }),
    async(req, res) => {
      try {
        const page = parseInt(req.params.PageNumber) || 0; // Get the page number from the route parameters (default to 1)
        const limit = parseInt(req.params.limit) || 10; // Number of records to retrieve per page

        // Calculate total count if it's the first page
        const totalCount = await RoleAccess.countDocuments() 
        // Retrieve ledgers with pagination
    
   let allRoleAccess = await RoleAccess.find()
          .skip((page) * limit) // Skip the appropriate number of records based on the page number
          .limit(limit) // Limit the number of records to retrieve
          .sort({ date: -1 })
          .catch((err) => {
            throw new Error("An error occurred while retrieving ledgers.");
          });

                   res.status(200).json({ 
                     variant: "success",
                    message:"RoleAccess Loaded",
                    data: allRoleAccess ,
                    page: page ,
                    totalCount: totalCount ,
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
  // @route   /api/v1/access/roleAccess/getAccess/getDataWithPage/:limit/:PageNumber/:search
  // @desc    Get ledgers with pagination
  // @access  Public
  router.get(
    "/getDataWithPage/:limit/:PageNumber/:search",
    passport.authenticate("jwt", { session: false }),
    async(req, res) => {
      try {
        const page = parseInt(req.params.PageNumber) || 0; // Get the page number from the route parameters (default to 1)
        const limit = parseInt(req.params.limit) || 10; // Number of records to retrieve per page
        const searchQuery = req.params.search

        // Calculate total count if it's the first page
        const totalCount = await RoleAccess.countDocuments(
            {
                $or: [

                  { "role.label": { $regex: new RegExp(searchQuery, "i") } },
                  // Add more fields as needed for searching
                ],
              }
        ) 
        // Retrieve ledgers with pagination
    
   let allRoleAccess = await RoleAccess.find( {
    $or: [
   { "role.label": { $regex: new RegExp(searchQuery, "i") } },
      // Add more fields as needed for searching
    ],
  })
          .skip((page) * limit) // Skip the appropriate number of records based on the page number
          .limit(limit) // Limit the number of records to retrieve
          .sort({ date: -1 })
          .catch((err) => {
            throw new Error("An error occurred while retrieving ledgers.");
          });

                   res.status(200).json({ 
                     variant: "success",
                    message:"RoleAccess Loaded",
                    data: allRoleAccess ,
                    page: page ,
                    totalCount: totalCount ,
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
  // @route   /api/v1/account/roleAccess/getRoleAccess/dropdown/getLedger
  // @desc    Get all roleAccesss
  // @access  Public
  router.get(
    "/dropdown/getLedger",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
     
      try {
        const myData = await Ledger.aggregate([
          {$project:{
            ledger:1,group:1,date:1
          }},
          {$sort:{date:-1}}
        ]).exec()

        const modifiedData = myData.map((resLed) => {
          return {
            ...resLed,
            label: resLed.ledger,
            group: resLed.group.label,
            type:"ledger"
          };
        });


        const myData2 = await Prospect.aggregate([
          {$project:{
            firstName:1,lastName:1,date:1,residenceStage:1
          }},
          {$sort:{date:-1}}
        ]).exec()
        const modifiedData2 = myData2.map((resLed) => {
          let grp = resLed.residenceStage
          return {
            ...resLed,
            label: `${resLed.firstName} ${resLed.lastName}`,
            group: grp.charAt(0).toUpperCase() + grp.slice(1),            
            type:"prospect"
          };
        });
        const myData3 = await User.aggregate([
          {$match:{designation:"employee"}},
          {$project:{
            firstName:1,lastName:1,date:1
          }},
          {$sort:{date:-1}}
        ]).exec()
        const modifiedData3 = myData3.map((resLed) => {
          return {
            ...resLed,
            label: `${resLed.firstName} ${resLed.lastName}`,
            group: "Employee",
            type:"employee"
          };
        });
        var dataToSend = modifiedData.concat(modifiedData2, modifiedData3);
        res
          .status(200)
          .json({ variant: "success", message: "RoleAccess Loaded", data: dataToSend });
      } catch (error) {
        console.log(error)
        res.status(500).json({ variant: "error", message: "Internal server error" + error.message});
      }
    }
  );

  module.exports = router;