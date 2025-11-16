import postModel from "../models/post.model.js";
import UserModel from "../models/user.model.js";

export async function insertPost(req,res){
    
    try{
        const postData = req.body.data;

        const userID =  req.userID;

        const userInfo = await UserModel.findOne({_id:userID});

        const username = userInfo.username;

        const newPost = new postModel({postdata:postData,username:username});
        const save = await newPost.save();

        return res.json({
            message:'Inserted Post Successfully',
            success:true
        })

    } catch (error) {

        res.json({
            message:'insertPost Controller error '+error,
            success:false
        })
    }
    

} 

export async function getPosts(req,res){
    try{
        
        const posts = await postModel.find({});
        
        return res.json({
            message:'Got the posts',
            success:true,
            posts:posts
        })

    } catch (error) {
        return res.json({
            message:'Get posts controller error : '+error,
            success:false
        })
    }
}