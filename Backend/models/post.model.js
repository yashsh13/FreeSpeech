import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postdata : {type:String,required:true},
    username : {type:String,required:true}
},{
    timestamps:true
}
)

const postModel = mongoose.model('posts',postSchema);

export default postModel;