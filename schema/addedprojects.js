const mongoose=require('mongoose');
var schema=mongoose.Schema;
var Addedprojects=new schema({
    pro_area:{
        type:Number
    },
    pro_floors:{
        type:Number
    },
    pro_city:{
        type:String
    },
    pro_add:{
        type:String
    },
    pro_use:{
        type:String
    },
    pro_type:{
        type:String
    },
    pro_first_name:{
        type:String
    },
    pro_last_name:{
        type:String
    },
    pro_phone:{
        type:Number
    },
    pro_email:{
        type:String
    }
});
module.exports=mongoose.model("Addedprojects",Addedprojects);