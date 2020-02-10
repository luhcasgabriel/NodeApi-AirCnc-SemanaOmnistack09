/*import express*/
const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashBoardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');
/*pegando o roteador do epress e colocando na variável criada*/
const routes = express.Router();
// cria variável para o multer passando a configuração
const upload = multer(uploadConfig);

/* routes */

    //session

        // rota store session
        routes.post('/sessions', SessionController.store);
    
    // Spot

        // rota store spots(local), passando como uma unica imagem na requisição (obs: se fosse mais de uma seria upload.array())
        routes.post('/spots', upload.single('thumbnail'), SpotController.store);

        // rota index spot(local) - busca todos os sopots cadastrados filtrados por tecnologia
        routes.get('/spots', SpotController.index);

    // DashBoard

        // rota show dashboard(spots do usuário9painel do usuário) - busca todos os spots do usuario logado 
        routes.get('/dashboard', DashBoardController.show);

    // Booking

        //store booking - utilizando route params, pois somente vai criar um booking se tiver dentro de um spot
        routes.post('/spots/:spot_id/bookings' , BookingController.store);

module.exports = routes;



