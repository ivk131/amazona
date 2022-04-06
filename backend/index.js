import express from "express";
import data from "./data.js";

const app = express();

const PORT = 4000;

app.get('/api/products/:id',(req,res)=>{
    const product = data.products.find(x=>x._id === req.params.id)
    if(product){
        res.send(product)

    } 
    else{
        res.status(404).send({message:'Product Not Found!'})
    }
})

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

app.listen(PORT,()=>console.log('App is running!'));

