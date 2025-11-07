
const LoginPage = () => {

    return(

        <div className="text-center flex flex-col justify-center items-center">

            <h1 className="text-center text-5xl mt-10">FreeSpeech</h1>

            <div className="flex flex-col justify-center items-center w-120 mt-15 border border-black rounded-md p-10">
                <p className="mb-15 text-5xl">Login</p>
                <input type="email" placeholder="Your Email" className="border border-black m-3 text-3xl rounded-md p-2"/>
                <input type="text" placeholder="Your Password" className="border border-black m-3 text-3xl rounded-md p-2"/>
                <button className="border border-black m-3 pt-3 pb-3 pr-7 pl-7 text-3xl rounded-md">Submit</button>
            </div>
            
        </div>
    )
}

export default LoginPage