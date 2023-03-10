const express=require('express');
var router=express.Router();
const path=require('path');
router.use(express.json());
router.use(express.static('pages'));
router.use(express.urlencoded({extended:false}));
//mongodb requirement
var mongoose=require('./mongodb');
//schema requirement
var Contractor=require('../schema/contractor');
const contractor = require('../schema/contractor');
var addedprojects = require('../schema/addedprojects');
var Bidsdetails = require('../schema/bidsdetails');
//sending pages
router.get('/contractorsignup',(req,res)=>{
    res.sendFile(path.resolve('pages/contractorsignup.html'));
});
router.get('/contractorlogin',(req,res)=>{
    res.sendFile(path.resolve('pages/contractorlogin.html'));
});
router.get('/ownerhomepage',(req,res)=>{
    res.sendFile(path.resolve('pages/CHome.html'));
});
//local variables
var con_details;
var projects_displayed;
var email_of_project;
//post api
router.post('/register',(req,res)=>{
    var a=req.body.name;
    var b=req.body.email
    var c=req.body.mobile;
    var d=req.body.newpass;
    var e=req.body.confpass;
    var f=req.body.company_name;
    var g=req.body.city;
    Contractor.findOne({email:b},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(result==null)
            {
                Contractor.create({
                    name:a,
                    email:b,
                    mobile:c,
                    password:d,
                    company_name:f,
                    city:g
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
router.post('/login',(req,res)=>{
    var a=req.body.email;
    var b=req.body.pass;
    contractor.findOne({email:a,password:b},(err,result)=>{
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
                con_details=result;
                res.send("true");
            }
        }
    })
});
router.post('/searchprojects',(req,res)=>{
    var a=req.body.city;
    addedprojects.find({pro_city:a},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(result==[])
            {

            }
            else
            {
                projects_displayed=result;
                res.send(result);
            }
        }
    })

});
router.get('/bidtheproject/:id',(req,res)=>{
    var id=req.params.id;
    email_of_project = projects_displayed[id].pro_email;

    Bidsdetails.create({
        owner_mail:projects_displayed[id].pro_email,
        contractor_mail:con_details.email,
        contractor_mobile:con_details.mobile,
        pro_area:projects_displayed[id].pro_area,
        pro_city:projects_displayed[id].pro_city,
        pro_floors:projects_displayed[id].pro_floors,
        contractor_company:con_details.company_name,
        pro_use:projects_displayed[id].pro_use,
        pro_type:projects_displayed[id].pro_type
    },(err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            
            res.redirect('/contractor/ownerhomepage')
        }
    })
    
    
})
module.exports=router;