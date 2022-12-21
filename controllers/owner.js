const express=require('express');
var router=express.Router();
const path=require('path');
router.use(express.json());
router.use(express.static('pages'));
router.use(express.urlencoded({extended:false}));
//mongodb requirement
var mongoose=require('./mongodb');

module.exports=router;