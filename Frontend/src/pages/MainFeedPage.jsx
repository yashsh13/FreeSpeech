import {useState} from "react";
import axios from "axios";

const MainFeedPage = () =>{

    const [enterPost,setEnterPost] = useState('');

    const handleChange = (e)=>{
        setEnterPost(e.target.value);
    }

    const insertPosts = async () => {

        try{

            const response = await axios.post('http://localhost:3000/api/posts/getpost',
                enterPost,
                {headers:{"Content-Type":"application/json"}}
            );

            if(!respone.data.success){
                console.log('insertPosts axios response failed : '+response.data.message);
            }

            console.log('Posted successfully');

        } catch (error) {
            console.log('Error in insertPosts axios request: '+error);
        }

    }

    return(
        <div className="flex flex-row items-start">
            <div className="basis-1/5 border mx-2 my-5 p-3 text-center">
                <div>Username : Username</div>
            </div>
            <div className="flex flex-col basis-3/5 h-150 m-5">
                <div className="flex flex-col justify-end basis-2/8 border">
                    <textarea className="basis-1/5 border-b m-2 px-3" value={enterPost} onChange={handleChange} placeholder="Enter your thoughts . . ."></textarea>
                    <button className="self-end border m-2 py-2 px-3 cursor-pointer hover:bg-stone-100">Post</button>
                </div>
                <div className="flex flex-col border mt-10">
                    <div className="basis-2/3 p-5">My life my rules,my style my attitude,dont play with me</div>
                    <div className="basis-1/3 p-5">Date : 9/10/25</div>
                </div>
            </div>
        </div>
    )
}

export default MainFeedPage