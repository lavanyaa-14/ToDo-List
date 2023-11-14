import React from "react";
import "./home.css";
const Home=() =>{
    return (

        <div classname="home d-flex justify-content-center align-item-center">
            <div classname = "container d-flex justify-content-center align-item-center flex-column">
                <h1 classname='text-center'>
                    THE MOONLIT SCROLL<br/>Manage your ethereal tasks. 
                </h1>
                <p>
                 Inspired by the Grace and Purpose of Princess Kaguya,<br/>this App empowers users to Organize their Daily tasks.
                </p>
                <button class="homebutton p-2">Make ToDo list</button>
            </div>
        </div>

    );
};

export default App;
