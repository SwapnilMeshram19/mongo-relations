const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    name:String,
    blog:[
        {type:mongoose.Schema.Types.ObjectId,ref:"blog"}
    ]
})

const category=mongoose.model('category',schema);
module.exports=category;