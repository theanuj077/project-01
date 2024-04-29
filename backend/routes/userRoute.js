const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();
router.post("/",async (req,res)=>{
    const {name,email,age} = req.body;
    try{
      const userAdded = await User.create({
        name:name,
        email:email,
        age:age,
      });
      res.status(201).json(userAdded);
    }
    catch(error){
      res.status(400).json({error:error.message})
    }
    
  });
  
  router.get("/", async (req, res) => {
    try{
    const showAll=await User.find();
    res.status(200).json(showAll);
    //res.send("apit running");
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
  });

  router.get("/:id", async (req, res) => {
    try{
    const {id}=req.params;
    const singleUser=await User.findById({_id:id});
    res.status(200).json(singleUser);
    res.send("apit running");
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
  });

//   router.delete("/:id", async (req, res) => {
//     const {id}=req.params;
//     const singleUser=await User.findByIdAndDelete(id);
//     res.status(200).json(singleUser);
//     res.send("apit running");
//   });
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete({_id:id});
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});
//UPDATE
router.patch("/edit/:id", async (req, res) => {
    const { id } = req.params;
    console.log("get body", req.body);
    console.log("get id", id);
    //const { name, email, age } = req.body;
    try {
      const updatedUser = await userData.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  module.exports=router;