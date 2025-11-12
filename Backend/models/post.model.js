import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postdata : {type:String,required:true},
    username : {type:String,required:true}
},{
    timestamps:true
}
)

export default postModel = mongoose.model('posts',postSchema);