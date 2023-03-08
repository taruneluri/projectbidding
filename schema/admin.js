const mongoose=require('mongoose');
var schema=mongoose.Schema;
var admin=new schema({
    empid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model("Admin",admin);