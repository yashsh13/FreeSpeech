import express from "express";
import connectDb from "./utils/db.js";
import UserRouter from "./routes/user.routes.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.json({message : 'Supp Gangg'});
});

app.use(express.json());

app.use(cors({
    credentials:true,
    origin : 'http://localhost:5173'
}));

app.use("/api/user",UserRouter);

await connectDb().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server running on PORT : ${PORT}`)
    })
})

