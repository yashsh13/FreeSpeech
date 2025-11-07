import bcryptjs from "bcryptjs";
import UserModel from "../models/user.model.js";

export async function signInController(req,res){

    try{
        const {username,email,password} = req.body;

        if(!username||!email||!password){
            res.status(400).json({
                message:'signInControllerError , All fields are not filled',
                success:false
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt);

        const newUser = new UserModel({username:username,email:email,password:hashPassword});
        const save = await newUser.save();
        
        return res.status(200).json({
            message:"Account created successfully",
            success:true,
            data:save
        })

    } catch (error) {

        return res.status(500).json({
            message:`signInController Error, Error : ${error} `,
            success:false
        })
    }

}