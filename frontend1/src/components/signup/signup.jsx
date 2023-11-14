import React from 'react';
import "./signup.css"
const about = () =>{
    return(
        <div classname="signup">
            <div classname="container">
                <div classname="row">
                    <div classname="col-lg-a colunm justify-content-center align-items-center ">
                        <div classname="d-flex flex-column w-100 p-8">
                            <input 
                            type = "email" 
                            classname = "p-2 my-2 input-signup"
                            placeholder="Enter your Email"
                            name = "email"/> 
                            <input type = "username" 
                            classname = "p-2 my-2 input-signup"
                            placeholder="Enter your Username"
                            name = "username"/> 
                            <input type = "password" 
                            classname = "p-2 my-2 input-signup"
                            placeholder="Enter your Password"
                            name = "username"/> 
                            <button classname="btn-signup">SignUp</button>
                        </div>
                    </div>

                    <div classname="col-lg-4 column col-left justify-content-center align-items-center " >
                        <h1 classname="text-center sign-up-heading">
                            Sign<br/> Up
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
    
}
export default signup;
