
import express from 'express';
import mongoose from 'mongoose';
import Cards from "./dbCards.js";


const app = express();

const port = process.env.PORT || 8001

const connection_url = `mongodb+srv://Jatin:Jatin%40123@cluster0.qnn5s1m.mongodb.net/?retryWrites=true&w=majority`

 mongoose.connect(connection_url,{

    useNewUrlParser: true, 

    useUnifiedTopology: true 
 
  

 }, err => {
        if(err) throw err;
        console.log('Connected to MongoDB!!!')
 })


app.get('/',(req,res)=>{
    res.status(200).send('Heloo World')
})

app.post('/tinder/cards', (req,res)=>{
     const dbCard = req.body;

     Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data);
        }
     })
});

app.get('/tinder/cards', (req,res)=>{
    Cards.find((err,data)=>{
       if(err){
           res.status(500).send(err);
       }
       else{
           res.status(200).send(data);
       }
    })
});



app.listen(port ,()=> {
    console.log(`listening on localhost:${port}`)
})