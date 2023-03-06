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
var Addedprojects=require('../schema/addedprojects');
var addedprojects = require('../schema/addedprojects');
var bidsdetails = require('../schema/bidsdetails');
//Local variables 
var user_details;
var added_project_details;
var bids_details;
//sending Pages
router.get('/ownersignup',(req,res)=>{
    res.sendFile(path.resolve('pages/projectownersignup.html'));
});
router.get('/ownerlogin',(req,res)=>{
    res.sendFile(path.resolve('pages/projectownerlogin.html'));
});
router.get('/ownerhomepage',(req,res)=>{
    res.sendFile(path.resolve('pages/POHome.html'));
});
router.get('/addnewproject',(req,res)=>{
    res.sendFile(path.resolve('pages/POAddnewproject.html'));
});
router.get('/addedprojects',(req,res)=>{
    res.sendFile(path.resolve('pages/POAddedProjects.html'));
});
router.get('/recievedbids',(req,res)=>{
    res.sendFile(path.resolve('pages/POAddedBids.html'));
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
//owner login
router.post('/login',(req,res)=>{
    var a=req.body.email;
    var b=req.body.pass;
    Owner.findOne({email:a,pass:b},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(result==null)
            {
                res.send("invalid");
            }
            else
            {
                user_details=result;
                res.send("true");
            }
        }
    })
});
//adding new project
router.post('/addnewproject',(req,res)=>{
    var a=req.body.pro_area;
    var b=req.body.pro_floors;
    var c=req.body.pro_city;
    var d=req.body.pro_add;
    var e=req.body.pro_use;
    var f=req.body.pro_type;
    var g=req.body.pro_first_name;
    var h=req.body.pro_last_name;
    var i=req.body.pro_phone;
    var j=req.body.pro_email;
    console.log(req.body);
    if(user_details.email == j)
    {
        addedprojects.create({
            pro_area:a,
            pro_floors:b,
            pro_city:c,
            pro_add:d,
            pro_use:e,
            pro_type:f,
            pro_first_name:g,
            pro_last_name:h,
            pro_phone:i,
            pro_email:j

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

});
router.post('/projectdisplay',(req,res)=>{
    addedprojects.find({pro_email:user_details.email},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            added_project_details=result;
            res.send(result);
        }
    })
});
router.get('/deleteadded/:id',(req,res)=>{
    var id=req.params.id;
    addedprojects.deleteOne(added_project_details[id],(err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect('/owner/addedprojects')
        }
    })
});
router.post('/bidsdisplay',(req,res)=>{
    bidsdetails.find({owner_mail:user_details.email},(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            bids_details=result;
            res.send(result);
        }
    })
});
router.get('/deleterecievedbid/:id',(req,res)=>{
    var id=req.params.id;
    bidsdetails.deleteOne(bids_details[id],(err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect('/owner/recievedbids');
        }
    })
});
module.exports=router;