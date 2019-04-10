const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

// GET/POST/PUT/DELETE

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
    '/boxes/:id/files', 
    multer(multerConfig).single('file'), BoxController.store,
    FileController.store
);//array varios arquivos no lugar de single
/*
routes.get('/teste', (req, res) => {//middleware (req,res) = interceptador de requisicao////req= requisiçao do servidor, ex: campos de formulario (cliente manda pro server)/////res resposta pro cliente
    return res.send('Hello gumb');//envia resposta pro cliente
});*/

module.exports = routes;//exporta informaçao do arquivo, exporta a variavel routes