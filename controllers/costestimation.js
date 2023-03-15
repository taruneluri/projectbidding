const express=require('express');
var router=express.Router();
const path=require('path');
router.use(express.json());
router.use(express.static('pages'));
router.use(express.urlencoded({extended:false}));
var mongoose=require('./mongodb');
router.get('/homepage',(req,res)=>{
    res.sendFile(path.resolve('pages/cehome.html'));
})



module.exports=router;