import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const SigninPage = () => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
            })
    }

    const handleSubmit = async () => {
        
        try{

            const response = await axios.post('http://localhost:3000/api/user/signin',
                formData,
                { headers: { 'Content-Type': 'application/json' } }
            );

            if(!response.data.success){
                console.log('Response did not succedd : ',response.data.message);
                return
            }

            const token = response.data.token;
            localStorage.setItem('token',token);

            navigate('../feed');

            console.log('Registration Successfull : ', response.data.data);

        } catch(error) {
            console.log(`Error occured in fetching data : ${error}`);
        }

    }


    return(
        
        <div className="text-center flex flex-col justify-center items-center">

            <h1 className="text-center text-5xl mt-10">FreeSpeech</h1>

            <div className="flex flex-col justify-center items-center w-120 mt-15 border border-black rounded-md p-10">
                <p className="mb-10 text-5xl">Sign In</p>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Set UserName" className="border border-black m-3 text-2xl rounded-md p-2" required/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="border border-black m-3 text-2xl rounded-md p-2" required/>
                <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Your Password" className="border border-black m-3 text-2xl rounded-md p-2" required/>
                <button onClick={handleSubmit} className="border border-black m-3 pt-3 pb-3 pr-7 pl-7 text-3xl rounded-md cursor-pointer hover:bg-stone-100">Submit</button>
            </div>
            
        </div>
    )
}

export default SigninPage