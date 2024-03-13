
const validateOnCreate = async (req, res, next) => {

  // Check if the required fields are present
  if (!req.body.documentName ) {
    return res.status(406).json({
      message: "Document Name is required fields.",
      variant: "error",
    });  
  }

  // Check if the required fields are present
  if (!req.body.documentUrl ) {
    return res.status(406).json({
      message: "Document Url is required fields.",
      variant: "error",
    });  
  }

      //   Check if the required fields are present
    
      if (!req.body.type ) {
        return res.status(406).json({
          message: "Type is required field.",
          variant: "error",
        });  
      } else {
        if(req.body.type == "prospect")
       { if (!req.body.prospectId ) {
          return res.status(406).json({
            message: "Prospect Id is required fields.",
            variant: "error",
          });  } }
          else if(req.body.type == "myContact"){
            if (!req.body.prospectId ) {
              return res.status(406).json({
                message: "ledger Id is required fields.",
                variant: "error",
              });  } 
          }
        
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

module.exports = { validateOnCreate, validateOnUpdate };
