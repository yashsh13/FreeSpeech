import postModel from "../models/post.model";

export async function insertPost(req,res){

    try{
        const postData = req.body;

        //check if logged in 

        //get the username

        const newPost = new postData({postdata:postData,username:username});
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