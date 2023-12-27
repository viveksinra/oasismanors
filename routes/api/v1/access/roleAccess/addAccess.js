const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load RoleAccess Model
const RoleAccess = require("../../../../../Models/Access/RoleAccess");
const {
  validateOnCreate,
  validateOnUpdate
} = require("../../../../../validation/access/roleAccessValidation");
const { labelToId } = require("../../../../../utils/generalFun/StringFormat");

// @type    POST
// @route   /api/v1/access/roleAccess/addAccess
// @desc    Create a new access
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validateOnCreate,
  async (req, res) => {
    try {
      const accessObj = await getRoleAccessObj(req,"create");
      await new RoleAccess(accessObj)
      .save();
      res.status(201).json({
        message: "New Role Successfully Created",
        variant: "success",
      });
    } catch (error) {
console.log(error)
      res
        .status(500)
        .json({ variant: "error", message: "Internal server error1" });
    }
  }
);



// @type    PUT
// @route   /api/v1/account/access/addRoleAccess/:id
// @desc    Update a access by ID
// @access  Public
// @type    POST

async function updateMe(req, res, updateRoleAccess) {
  try {
    const access = await RoleAccess.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updateRoleAccess },
      { new: true }
    );
    if (!access) {
      return res
        .status(406)
        .json({ message: "Id not found", variant: "error" });
    }
    res
      .status(200)
      .json({ message: "Updated successfully!!", variant: "success" });
  } catch (error) {
console.log(error)
    res
      .status(500)
      .json({ variant: "error", message: "Internal server error" + error.message});
  }
}

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validateOnUpdate,
  async (req, res) => {
    try {
      const accessObj = await getRoleAccessObj(req,"update");

      updateMe(req, res, accessObj);
    } catch (error) {
console.log(error)
      res.status(500).json({
        variant: "error",
        message: "Internal server error" + error.message,
      });
    }
  }
);


// @type    DELETE
// @route   /api/v1/account/access/addRoleAccess/deleteOne/:id
// @desc    Delete a access by ID
// @access  Public
router.delete(
  "/deleteOne/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const access = await RoleAccess.findByIdAndRemove(req.params.id);
      if (!access) {
        return res
          .status(404)
          .json({ variant: "error", message: "RoleAccess not found" });
      }
      res
        .status(200)
        .json({ variant: "success", message: "RoleAccess deleted successfully" });
    } catch (error) {
console.log(error)
      res.status(500).json({
        variant: "error",
        message: "Internal server error" + error.message,
      });
    }
  }
);

async function getRoleAccessObj(req, type) {
  let newRoleAccess = {
    user: req.user.id,
    lastModified: new Date(),
  };

  // Check and assign values for each parameter based on their type


  if (req.body.role) {
    newRoleAccess.role = {}
      newRoleAccess.role.label = req.body.role      
      newRoleAccess.role.id = labelToId(req.body.role)  
  }
  if (req.body.permissions) {
    newRoleAccess.permissions = req.body.permissions;
  }

  return newRoleAccess;
}





module.exports = router;
