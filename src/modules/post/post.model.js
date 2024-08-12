const { Schema, Types, model } = require("mongoose");

const PostSchema = new Schema({
    title: {type: String, required: false},
    userId: {type: Types.ObjectId, required:false},
    amount: {type: Number, required: true, default:0},
    content: {type: String, required: false},
    category: {type: Types.ObjectId, required: false, ref:"Category"},
    province: {type: String, required:false},
    city: {type: String, required: false},
    district: {type: String, required: false},
    address: {type: String, required: false},
    coordinate: {type: [Number], required: false},
    images: {type: [String], required: false, default:[]},
    options: {type: Object, default:{}}
},{timestamps: true})

const PostModel  = model("post", PostSchema)
module.exports = PostModel
