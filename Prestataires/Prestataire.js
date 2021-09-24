const mongoose = require ("mongoose");

mongoose.model("Prestataire", {
    nom: {
        type: String,
        require: true
    }
    
});