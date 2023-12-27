
const validateRequireField = async (req, res, next) => {
  // Check if the required label fields are present
  if (!req.body.communityName) {
    return res.json({
      message: "Community Name is a required field.",
      variant: "error",
    });
  }
  if (!req.body.licenseNumber) {
    return res.json({
      message: "License Number is a required field.",
      variant: "error",
    });
  }
  if (!req.body.communityMobileNumber) {
    return res.json({
      message: "Community Mobile Number is a required field.",
      variant: "error",
    });
  }
  if (!req.body.communityAddress) {
    return res.json({
      message: "Community Address is a required field.",
      variant: "error",
    });
  }
  if (!req.body.communityCity || !req.body.communityCity.city || !req.body.communityCity.state) {
    return res.json({
      message: "Community City is a required field.",
      variant: "error",
    });
  }
  if (!req.body.communityState) {
    return res.json({
      message: "Community State is a required field.",
      variant: "error",
    });
  }
  if (!req.body.communityZipCode) {
    return res.json({
      message: "Community Zip Code is a required field.",
      variant: "error",
    });
  }
  if (!req.body.licenseeName) {
    return res.json({
      message: "Licensee Name is a required field.",
      variant: "error",
    });
  }
  if (!req.body.licenseeMobileNumber) {
    return res.json({
      message: "Licensee Mobile Number is a required field.",
      variant: "error",
    });
  }
  if (!req.body.licenseeAddress) {
    return res.json({
      message: "Licensee Address is a required field.",
      variant: "error",
    });
  }
  if (!req.body.licenseeCity || !req.body.licenseeCity.city || !req.body.licenseeCity.state) {
    return res.json({
      message: "Licensee City is a required field.",
      variant: "error",
    });
  }
  if (!req.body.licenseeState) {
    return res.json({
      message: "Licensee State is a required field.",
      variant: "error",
    });
  }
  if (!req.body.licenseeZipCode) {
    return res.json({
      message: "Licensee Zip Code is a required field.",
      variant: "error",
    });
  }

  next();
};
const validateOnCreate = async (req, res, next) => {
  // Check if the required label fields are present
  let c1 = await Community.findOne({communityName:req.body.communityName}).catch(err => console.error(err));
  if (c1) {
    return res.json({
      message: "Duplicate Community Name",
      variant: "error",
    });
  }
  let c2 = await Community.findOne({licenseNumber:req.body.licenseNumber}).catch(err => console.error(err));
  if (c2) {
    return res.json({
      message: "Duplicate License Number",
      variant: "error",
    });
  }
  next();
};

     const validateOnUpdate = async (req, res, next) => {
    
      // Check if the required fields are present
      // if (!req.body.salesAgent || !req.body.salesAgent.label || !req.body.salesAgent._id) {
      //   return res.status(406).json({
      //     message: "Sales Agent are required fields.",
      //     variant: "error",
      //   });
      // }
        
      next();
    };
     const validateOnDelete = async (req, res, next) => {
    
      // Check if community Used anywhere
      // let c1 = 

      next();
    };
    
    module.exports = {validateOnDelete,validateRequireField, validateOnCreate, validateOnUpdate };
    