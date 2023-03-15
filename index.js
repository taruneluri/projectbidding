var express = require('express');
const app= express();
const path = require('path');
app.use(express.json());
app.use(express.static('pages'));
app.use(express.urlencoded({extended:false}));
var owner=require('./controllers/owner');
var contractor=require('./controllers/contractor');
var admin=require('./controllers/admin');
var cost=require('./controllers/costestimation');
//html pages
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/pages/index.html');
});
app.use('/owner',owner);
app.use('/contractor',contractor);
app.use('/admin',admin);
app.use('/ce',cost);
app.listen(3030,()=>{console.log('server started at port 3030')});