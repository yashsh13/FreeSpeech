import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (req,res,next) => {
    
    try{
        const token = req.headers.token;

        const decoded = jwt.verify(token,process.env.JWT_PASSWORD);

        req.userID = decoded.userID;

        next();

    } catch (error) {
        
        return res.json({
            message:"Authentication Middleware Error: "+error,
            success:false
        })
    }

}

export default auth;