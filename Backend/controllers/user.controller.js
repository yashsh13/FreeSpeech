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

        const alreadyExistUserName = await UserModel.findOne({username:username});
        const alreadyExistEmail = await UserModel.findOne({email:email});

        if(alreadyExistUserName){
            res.json({
                message:"Username Already Exists",
                success:false
            })
        }

        if(alreadyExistEmail){
            res.json({
                message:"Email Already Exists",
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

export async function logInController(req,res){

    try{
        const {email,password} = req.body;
        
        const userInfo = await UserModel.findOne({email:email});

        if(!userInfo){

            return res.json({
                message:"This email is not registered",
                success:false
            })
        }

        const correctPassword = await bcrypt.compare(password,userInfo.password);

        if(!correctPassword){
            return res.json({
                message:"Password is Invalid",
                success:false
            })
        }

        return res.json({
            message:"Login Successful",
            success:true
        })
    } catch (error) {
        return res.json({
            message:"login controller error",
            success:false,
            error:error
        })
    }
}