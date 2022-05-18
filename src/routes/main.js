const express=require('express');
const router=express.Router();
const path=require("path")
const index=path.join(__dirname,"../index.html")
router.get('/',(req,res)=>res.sendFile(index));

module.exports=router
