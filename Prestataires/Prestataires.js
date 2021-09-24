const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(express.urlencoded({extended: true}));
app.use(express.json()) //

const mongoose= require("mongoose");

require("./Prestataire")
const Prestataire = mongoose.model("Prestataire");

mongoose.connect("mongodb+srv://admin:admin@cluster0.5rir6.mongodb.net/Prestataire",()=> {
    console.log("Database is connected");
});

app.get("/Prestataires", (req, res)=>{
    // res.send("service user");
    Prestataire.find().then((Prestataires)=>{
        res.json(Prestataires)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})
// app.get("/Prestataires", (req, res)=>{
//     // res.send("service user");
//     Prestataire.find().then((Prestataires)=>{
//         res.json(Prestataires)
//     }).catch(err => {
//         if(err){
//             throw err;
//         }
//     })
// })

app.get("/Prestataire/:id", (req, res)=>{
    // res.send(req.params.id);
    Prestataire.findById(req.params.id).then((Prestataire)=>{
        if(Prestataire) {
            res.json(Prestataire)
        }else{
            res.sendStatus(404)
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

app.post("/Prestataire",(req,res)=>{
    var newPrestataire = {
        nom: req.body.nom
    }

    var Prestataire = new  Prestataire(newPrestataire)

    Prestataire.save().then(() =>{
        console.log("new Prestataire added");
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
    res.send("Prestataire added with success");
})

app.listen(4545,()=>{
    console.log("Up and running! service user");
});