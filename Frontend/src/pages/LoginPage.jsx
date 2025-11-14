import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const LoginPage = () => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) =>{

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }

    const handleSubmit = async () => {

        try{

            const response = await axios.post('http://localhost:3000/api/user/login',
                formData,
                { headers : { 'Content-Type':'application/json' }}
            );

            
            if(!response.data.success){
                console.log('Response failed ',response.data.message);
                return
            }

            const token = response.data.token;
            localStorage.setItem('token',token);

            navigate('../feed');

            console.log('Response Success : ',response.data.message);
            return

        }catch(error){
            console.log("Frontend login request error : ",error);
            return
        }

    }


    return(

        <div className="text-center flex flex-col justify-center items-center">

            <h1 className="text-center text-5xl mt-10">FreeSpeech</h1>

            <div className="flex flex-col justify-center items-center w-120 mt-15 border border-black rounded-md p-10">
                <p className="mb-15 text-5xl">Login</p>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="border border-black m-3 text-3xl rounded-md p-2"/>
                <input type="text" name="password" placeholder="Your Password" value={formData.password} onChange={handleChange} className="border border-black m-3 text-3xl rounded-md p-2"/>
                <button className="border border-black m-3 pt-3 pb-3 pr-7 pl-7 text-3xl rounded-md cursor-pointer hover:bg-stone-100" onClick={handleSubmit} >Submit</button>
            </div>
            
        </div>
    )
}

export default LoginPage