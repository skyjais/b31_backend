const express=require("express")
//const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {auth}=require("../middleware/auth.middleware")
const {NotesModel}=require("../models/note.model")
const noteRouter=express.Router()

noteRouter.post("/create",auth,async(req,res)=>{
    try {
        const note=new NotesModel(req.body)
        await note.save()
        res.status(200).send({"msg":"A new note has been added"})
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

noteRouter.get("/",auth,async(req,res)=>{
    try {
        console.log(req.body,"lll")
        const notes=await NotesModel.find({userID:req.body.userID})
        res.status(200).send(notes)
    } catch (error) {
        res.status(400).send({"error":error})
    }
})

noteRouter.patch("/update/:noteID",auth,async(req,res)=>{
    const {noteID}=req.params

    try {
        const note=await NotesModel.findOne({_id:noteID})
        if(req.body.userID===note.userID){
            await NotesModel.findByIdAndUpdate({_id:noteID},req.body)
            res.status(200).send({"msg":`Note with ID ${noteID} has been updated`})
      
        }else{
            res.status(400).send({"msg":"You are not Authorised"})
        }
         } catch (error) {
        res.status(400).send({"error":error})
    }
})


noteRouter.delete("/delete/:noteID",auth,async(req,res)=>{
    const {noteID}=req.params

    try {
        const note=await NotesModel.findOne({_id:noteID})
        if(req.body.userID===note.userID){
            await NotesModel.findByIdAndUpdate({_id:noteID})
            res.status(200).send({"msg":`Note with ID ${noteID} has been deleted`})
      
        }else{
            res.status(400).send({"msg":"You are not Authorised"})
        } } catch (error) {
        res.status(400).send({"error":error})
    }
})

module.exports={noteRouter}