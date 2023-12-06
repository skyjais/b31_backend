const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {UserModel}=require("../models/user.model")
const userRouter=express.Router()

//restricted routes
userRouter.post("/register",async(req,res)=>{
  const {username,email,pass}=req.body
    try {
    bcrypt.hash(pass, 5, async(err, hash)=> {
        if(err){
            res.status(200).send({"error":err})
        }else{
            const user=new UserModel({username,email,pass:hash})
             await user.save()
             res.status(200).send({"msg":"A new user has been registered"})
  
        }
    });
     } catch (error) {
    res.status(400).send({"error":error})
   }
})

userRouter.post("/login",async(req,res)=>{
const {email,pass}=req.body
try {
    const user=await UserModel.findOne({email})
    bcrypt.compare(pass, user.pass,(err, result)=> {
        //console.log(pass, user.pass)
        if(result){
          //  console.log("kkkk")
            const token=jwt.sign({userID:user._id,username:user.username},"masai")
            res.status(200).send({"msg":"Login Successful","token":token})

        }else{
            res.status(200).send({"error":"Wrong Credentials"})
        }
    });
} catch (error) {
    res.status(400).send({"error":error})
}
})

module.exports={userRouter}