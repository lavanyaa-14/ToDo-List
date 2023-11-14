import React from "react";
import Navbar from "./components/navbar/navbar";
import home from "./components/home/home";
import footer from "./components/footer/footer";
import about from "./components/about/about";
import signup from "./components/signup/signup"
import signin from "./components/signin/"
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
const App=() =>{
    return (<div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<home />} />
                <Route path="/about" element={<about />} />
                <Route path="/signup" element={<signup />} />
                <Route path="/signin" element={<signin />} />

            </Routes>
        </Router>
    </div>);
};

export default App;