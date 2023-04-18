const mongoose=require('mongoose');
var schema=mongoose.Schema;
var contribute = new schema({
    plot_width:{
        type:Number,
        required:true
    },
    plot_length:{
        type:Number,
        required:true
    },
    floors:{
        type:Number,
        required:true
    },  
    total_cost:{
        type:Number,
        required:true
    },
    steel:{
        type:Number,
        required:true
    },
    cement:{
        type:Number,
        required:true
    },
    bricks:{
        type:Number,
        required:true
    },
    stone:{
        type:Number,
        required:true
    },
    sand:{
        type:Number,
        required:true
    },
    water:{
        type:Number,
        required:true
    },
    excavation:{
        type:Number,
        required:true
    },
    labour:{
        type:Number,
        required:true
    },
    design_fee:{
        type:Number,
        required:true
    },
    doors:{
        type:Number,
        required:true
    },
    frame_work:{
        type:Number,
        required:true
    },
    plumbing:{
        type:Number,
        required:true
    },
    electric:{
        type:Number,
        required:true
    },
    flooring:{
        type:Number,
        required:true
    },
    painting:{
        type:Number,
        required:true
    },
    boundary:{
        type:Number,
        required:true
    },
    others:{
        type:Number,
        required:true
    }
    
});
module.exports=mongoose.model("Contribute",contribute);