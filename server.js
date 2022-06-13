const express = require ("express");
const User =require("./models/userModel")


const app = express()
const cors=require('cors')
const mongoose = require ('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://harikrishnane:harikrishnan@cluster0.watck.mongodb.net/formDB')

app.post('/register', async (req,res) =>{
    //console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({status : "ok"})
    }
    catch(err){
        res.json({status : "error", error : 'duplicate email'})
    }
   
})



app.post('/login', async (req,res) =>{
        const user=await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        if(user){
            return res.json({status: 'ok' , user : true})
        }
        else{
            return res.json({status: 'error' , user : false})
        }
})


app.get("/datapage" , async (req,res) =>{
         User.find()
            .then(foundDetails => res.json(foundDetails))
 
})


app.listen(3001 , function(){
    console.log("listen on port 3001");
    
    })