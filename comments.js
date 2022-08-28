const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  message: String,
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
  user:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
});

const comment = mongoose.model("comment", schema);
module.exports = comment;
