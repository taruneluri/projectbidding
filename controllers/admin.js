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
//local variables
var admindetails;
//sending pages
router.get('/adminsignup',(req,res)=>{
    res.sendFile(path.resolve('pages/admin/signup.html'));
});
router.get('/adminlogin',(req,res)=>{
    res.sendFile(path.resolve('pages/admin/signin.html'))
})
//post methods
router.post('/adminsignup',(req,res)=>{
    var a=req.body.id;
    var b=req.body.pass;
    Admin.findOne({empid:a},(err,results)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(results==null)
            {
                Admin.create({
                    empid:a,
                    password:b
                },(err)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        res.send('true');
                    }
                })
            }
            else
            {
                res.send("invalid");
            }
        }
    })
});
router.post('/adminlogin',(req,res)=>{
    var a=req.body.empid;
    var b=req.body.password;
    Admin.findOne({empid:a,password:b},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(result==null)
            {
                res.send('invalid');
            }
            else
            {
                admindetails=result;
                res.send('true');
            }
        }
    })
});
module.exports=router;