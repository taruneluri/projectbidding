const mongoose=require('mongoose');
var schema=mongoose.Schema;
var contractor=new schema({
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
    },
    company_name:{
        type:String
    },
    city:{
        type:String
    }
});
module.exports=mongoose.model("Contractor",contractor);