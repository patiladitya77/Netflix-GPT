import { useState } from "react";
import Header from "./Header";

const Login = () =>{
    const [isSignInForm,setisSignInForm]=useState(true);
    const toggleSignInForm = () =>{
        setisSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header/>
            <div className="absolute">

            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" alt="bg"/>
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className=" p-2 my-4 w-full bg-gray-800"/>}
                <input type="text" placeholder="Email Address" className=" p-2 my-4 w-full bg-gray-800"/>
                <input type="password" placeholder="Password" className=" p-2 my-4 w-full bg-gray-800"/>
                <button className=" p-2 my-4 bg-red-500 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"}</button>
            <p className=" p-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up now":"Already a User? Sign In"}</p>
            </form>
        </div>
    )
};
export default Login;