const express = require("express");
const router = express.Router();
const MailForAsnit = require("./sendFunction/asnitEmail");

router.post('/sendAsnitEmail',async (req, res) => {
 let data = await MailForAsnit(req,res)
 res.json(data)
});


module.exports = router;
