const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express(); //variavel guarda todas info da app

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    });
});

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-n4nnb.mongodb.net/omnistack?retryWrites=true", 
    {
        useNewUrlParser: true //novo tipo de url
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json()); // use = cadastrar um modulo dentro do express, express.json ajuda o server a entender jason
app.use(express.urlencoded({ extended: true }));//urlencoded permite enviar arquivos pela aplicaçao
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));//importa as rotas

server.listen(process.env.PORT || 3333);
