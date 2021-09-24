const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(express.urlencoded({extended: true}));
app.use(express.json()) //

const mongoose= require("mongoose");

require("./Client")
const Client = mongoose.model("Client");

mongoose.connect("mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/User",()=> {
    console.log("Database is connected");
});

app.get("/clients", (req, res)=>{
    // res.send("service user");
    Client.find().then((clients)=>{
        res.json(clients)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})
app.get("/clients", (req, res)=>{
    // res.send("service user");
    Client.find()
    .then((clients)=>{
        res.json(clients)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

app.get("/client/:id", (req, res)=>{
    // res.send(req.params.id);
    Client.findById(req.params.id).then((client)=>{
        if(client) {
            res.json(client)
        }else{
            res.sendStatus(404)
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

app.post("/client",(req,res)=>{
    var newClient = {
        nom: req.body.nom
    }

    var client = new  Client(newClient)

    client.save().then(() =>{
        console.log("new client added");
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
    res.send("client added with success");
})

app.listen(4546,()=>{
    console.log("Up and running! service user");
});