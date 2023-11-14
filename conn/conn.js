const mongoose = require("mongoose");

const conn = async(req, res) =>{
    await mongoose.connect("mongodb+srv://lavanyaabelokar1406:Lavanyaa1406@cluster0.jsj9jfl.mongodb.net/").then(()=>{
        console.log("Connected");
    });
};
conn();
