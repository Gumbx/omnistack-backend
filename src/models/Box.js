const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }] //file vai armazenar os ids q pertencem aos box
}, {
    timestamps: true//data de criaçao
});

module.exports = mongoose.model('Box', Box);