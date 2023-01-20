// console.log('hello worldd dds dsd weds d');

//mongodb+srv://keyrun:Keyrun@cluster0.gxraksm.mongodb.net/met?retryWrites=true&w=majority
const mongoose = require('mongoose');
const cors=require('cors')
const express = require('express')
// console.log(typeof express);
const app = express()

mongoose.connect("mongodb+srv://keyrun:Keyrun@cluster0.gxraksm.mongodb.net/met?retryWrites=true&w=majority")
.then(()=>{console.log("connect");})

const Schema = mongoose.Schema;
const BlogPost = new Schema({
    name:String,
    id:Number,
    emailId:String,
    designation:String
  });
  const MyModel = mongoose.model('users', BlogPost);

app.use(cors())
app.use(express.json())
const port = 3001
app.get("/api/category" , function(req,res){
    res.send({message:"category 1111"})
})
app.get("/api/product" , (req,res)=>{
    res.send({message:"product"})
})

app.post("/api/useraction",async(req,res)=>{
    console.log(req.body);
    const instance = new MyModel(req.body);
    try{
        await instance.save()
        res.send({message:"data inserted"})
    }catch(err){

    }
})
app.listen(port);