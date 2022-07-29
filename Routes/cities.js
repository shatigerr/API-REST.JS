import express from "express";
import mongoose from "mongoose";
import Travel from "../models/Travel.js";

const router =  express.Router()



router.get("/", (req,res) =>{ 
       Travel.find({}, (err , foundItems) =>{
          res.send(foundItems)
       })
    })

router.get("/:id", (req,res) => {
     const id = req.params.id

     Travel.findById(id, (err, city) => {
          res.send(city)
     })
})


router.post("/", (req,res) => {
     const travel = new Travel({
          name: req.body.name,
          travelled: req.body.travelled
     })
     travel.save()
     res.send("POSTED")
})

router.put("/:id", (req,res) => {
     const id = req.params.id
     Travel.findByIdAndUpdate(id, {name: req.body.name, travelled:req.body.travelled}, (err,updated) => {
          res.send(updated)
     })
})

router.delete("/", (req,res) => {
     Travel.deleteMany({}, () => {
          res.send("Deleted succesfully")
     })
})

router.delete("/:id", (req, res) => {
     const id = req.params.id
     Travel.findByIdAndDelete(id, (err, deletedItem) =>{
          res.send(`Deleted city with _id:${id}`)
     })
})

export default router


