const express = require("express");
const router = express.Router();



router.get("/",async (req,res)=>{
	res.send("Welcome to Zoro Luna Server!");
})
module.exports = router;