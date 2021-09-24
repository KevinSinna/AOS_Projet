const mongoose = require ("mongoose");

mongoose.model("Client", {
    nom: {
        type: String,
        require: true
    }
});