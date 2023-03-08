const express=require('express');
var router=express.Router();
const path=require('path');
router.use(express.json());
router.use(express.static('pages'));
router.use(express.urlencoded({extended:false}));
//mongodb requirement
var mongoose=require('./mongodb');
//schema require ment
var Admin=require('../schema/admin');
//sending pages
router.get('/adminsignup',(req,res)=>{
    res.sendFile(path.resolve('pages/adminsignup.html'));
});
router.get('/adminlogin',(req,res)=>{
    res.sendFile(path.resolve('pages/admin/signin.html'))
})
//post methods
router.post('/signup',(req,res)=>{
    console.log(req.body);
    var a=req.body.empid;
    var b=req.body.name;
    var c=req.body.email;
    var d=req.body.mobile;
    var e=req.body.newpass;
    Admin.findOne({empid:a,email:c},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(result == null)
            {
                Admin.create({
                    empid:a,
                    name:b,
                    email:c,
                    mobile:d,
                    password:e
                },(err)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        res.send('true');
                    }
                })
            }
        }
    })
})
module.exports=router;