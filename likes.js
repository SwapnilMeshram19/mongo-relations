const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
  user:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});

const like = mongoose.model("like", schema);
module.exports = like;
