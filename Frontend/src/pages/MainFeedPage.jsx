import { useState , useEffect } from "react";
import axios from "axios";

const MainFeedPage = () =>{

    const [enterPost,setEnterPost] = useState('');
    const [posts,setPosts] = useState([]);

    const handleChange = (e)=>{
        setEnterPost(e.target.value);
    }

    const insertPosts = async () => {

        try{
            const postData = {data:enterPost}

            const response = await axios.post('http://localhost:3000/api/card/insertpost',
                postData,
                {headers:{"Content-Type":"application/json",'token':localStorage.getItem('token')}}
            );
            
            if(!response.data.success){
                console.log('insertPosts axios response failed : '+response.data.message);
            }

            console.log('Posted successfully');

        } catch (error) {
            console.log('Error in insertPosts axios request: '+error);
        }

    }

    const getposts = async () => {

        try{

            const response = await axios.get('http://localhost:3000/api/card/getposts',
                {headers:{'token':localStorage.getItem('token')}}
            )
            
            if(!response.data.success){
                console.log("getposts response failed");
                return
            }

            console.log(response.data.message);
            setPosts(response.data.posts);

        } catch (error) {
            console.log("axios get posts request error: "+error);
        }

    }

    useEffect(()=>{
        getposts();
    },[posts]);

    return(
        <div className="flex flex-row items-start">
            <div className="basis-1/5 border mx-2 my-5 p-3 text-center">
                <div>Username : Username</div>
            </div>
            <div className="flex flex-col basis-3/5 h-150 m-5 pb-10">
                <div className="flex flex-col justify-end basis-2/8 border">
                    <textarea className="basis-1/5 border-b m-2 px-3" value={enterPost} onChange={handleChange} placeholder="Enter your thoughts . . ."></textarea>
                    <button className="self-end border m-2 py-2 px-3 cursor-pointer hover:bg-stone-100" onClick={insertPosts}>Post</button>
                </div>
                
                {posts.map( (post)=>{

                    return(
                        <div className="flex flex-col border mt-10 ">
                            <div className="basis-2/3 p-5">{post.postdata}</div>
                            <div className="basis-1/3 p-5">Date : {post.updatedAt}</div>
                        </div>);

                    }

                )}
                

            </div>
        </div>
    )
}

export default MainFeedPage