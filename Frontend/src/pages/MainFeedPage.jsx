

const MainFeedPage = () =>{

    return(
        <div className="flex flex-row items-start">
            <div className="basis-1/5 border mx-2 my-5 p-3 text-center">
                <p>Username : Username</p>
            </div>
            <div className="flex flex-col basis-3/5 h-150 m-5">
                <div className="flex flex-col justify-end basis-2/8 border">
                    <textarea className="basis-1/5 border-b m-2 px-3" placeholder="Enter your thoughts . . ."></textarea>
                    <button className="self-end border m-2 py-2 px-3">Post</button>
                </div>
                <div className="border mt-10">Card</div>
            </div>
        </div>
    )
}

export default MainFeedPage