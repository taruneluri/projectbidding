const mongoose = require('mongoose');
var schema = mongoose.Schema;
var bidsdetails=new schema({
    owner_mail:{
        type:String
    },
    contractor_mail:{
        type:String,
        required:true
    },
    contractor_mobile:{
        type:Number
    },
    pro_area:{
        type:Number
    },
    pro_city:{
        type:String
    },
    pro_floors:{
        type:Number
    },
    contractor_company:{
        type:String
    },
    pro_use:{
        type:String
    },
    pro_type:{
        type:String
    },
});
module.exports= mongoose.model("Bidsdetails",bidsdetails);