const mongoose=require('mongoose');
const uri = "mongodb+srv://taruneluri:taruneluri@cluster0.gkezw.mongodb.net/finalyrproject?retryWrites=true&w=majority";
mongoose.connect(uri).then(()=>{console.log("DataBase Connected !!")});
module.exports=mongoose;