const mongoose=require('mongoose');
var schema=mongoose.Schema;
var owner=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model("Owner",owner);