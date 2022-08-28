const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    name:String,
    email:String,
    avtar:String,
    phone:Number,
})

const user=mongoose.model('user',schema);
module.exports=user;