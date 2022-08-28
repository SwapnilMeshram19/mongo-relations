const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    Title:String,
    Body:String,
    category:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:'category'}
    ],
    Author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    Comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    },
    Likes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like"
    }
})

const Blog=mongoose.model('Blog',schema);
module.exports=Blog;