const express=require('express');
var router=express.Router();
const path=require('path');
router.use(express.json());
router.use(express.static('pages'));
router.use(express.urlencoded({extended:false}));
//mongodb requirement
var mongoose=require('./mongodb');
//Schema Requirement
var Owner=require('../schema/owner');
//sending Pages
router.get('/ownersignup',(req,res)=>{
    res.sendFile(path.resolve('pages/projectownersignup.html'));
});
router.get('/ownerlogin',(req,res)=>{
    res.sendFile(path.resolve('pages/projectownerlogin.html'));
})
//owner Registration
router.post('/register',(req,res)=>{
    var a=req.body.name;
    var b=req.body.email;
    var c=req.body.mobile;
    var d=req.body.newpass;
    Owner.findOne({email:b,mobile:c},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            if(result==null)
            {
                Owner.create({
                    name:a,
                    email:b,
                    phone:c,
                    password:d
                },(err)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        res.send("true");
                    }
                })
            }
            else
            {
                res.send("invalid");
            }
        }
    })

})
module.exports=router;