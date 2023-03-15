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
var Owner=require('../schema/owner');
var Contractor=require('../schema/contractor');
var addedprojects = require('../schema/addedprojects');
var biddetails=require('../schema/bidsdetails');
var Csmodel=require('../schema/csmodel');
//local variables
var admindetails;
//sending pages
router.get('/adminsignup',(req,res)=>{
    res.sendFile(path.resolve('pages/admin/signup.html'));
});
router.get('/adminlogin',(req,res)=>{
    res.sendFile(path.resolve('pages/admin/signin.html'))
});
router.get('/adminhome',(req,res)=>{
    res.sendFile(path.resolve('pages/admin/index.html'));
});
router.get('/cost-estimation-form',(req,res)=>{
    res.sendFile(path.resolve('pages/admin/estimationform.html'));
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
//providing project owner information
router.post('/getpodetails',(req,res)=>{
    Owner.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
});
router.post('/getcodetails',(req,res)=>{
    Contractor.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
});
//project information
router.post('/getprodet',(req,res)=>{
    addedprojects.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
});
router.post('/getbidsto',(req,res)=>{
    biddetails.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
});
router.post('/inputdata',(req,res)=>{
    Csmodel.find({},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(result==[])
            {
                Csmodel.create({
                    total_cost:req.body.total_cost,
                    steel:req.body.steel,
                    cement:req.body.cement,
                    bricks:req.body.bricks,
                    stone:req.body.stone,
                    sand:req.body.sand,
                    water:req.body.water,
                    excavation:req.body.excavation,
                    labour:req.body.labour,
                    design_fee:req.body.design_fee,
                    doors:req.body.doors,
                    frame_work:req.body.frame_work,
                    plumbing:req.body.plumbing,
                    electric:req.body.electric,
                    flooring:req.body.flooring,
                    painting:req.body.painting,
                    boundary:req.body.boundary,
                    others:req.body.others

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
                Csmodel.deleteMany({},(err)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        Csmodel.create({
                            total_cost:req.body.total_cost,
                            steel:req.body.steel,
                            cement:req.body.cement,
                            bricks:req.body.bricks,
                            stone:req.body.stone,
                            sand:req.body.sand,
                            water:req.body.water,
                            excavation:req.body.excavation,
                            labour:req.body.labour,
                            design_fee:req.body.design_fee,
                            doors:req.body.doors,
                            frame_work:req.body.frame_work,
                            plumbing:req.body.plumbing,
                            electric:req.body.electric,
                            flooring:req.body.flooring,
                            painting:req.body.painting,
                            boundary:req.body.boundary,
                            others:req.body.others
        
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
                })
            }
        }
    })
})
module.exports=router;