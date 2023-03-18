const express=require('express');
var router=express.Router();
const path=require('path');
router.use(express.json());
router.use(express.static('pages'));
router.use(express.urlencoded({extended:false}));
var mongoose=require('./mongodb');
var Csmodel= require('../schema/csmodel');
router.get('/homepage',(req,res)=>{
    res.sendFile(path.resolve('pages/cehome.html'));
});
router.post('/give',(req,res)=>{
    Csmodel.findOne({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})

module.exports=router;