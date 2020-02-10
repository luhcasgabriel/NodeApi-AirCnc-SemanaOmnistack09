const express = require('express');
// é necessário importar com o ./ senão o node entende que tem quer importar uma dependencia inteira dentro do node_modules
// ./ significa pasta atual
const routes = require('./routes');

/* import mongoose - gerencia banco de dados mongoDB na núvem*/
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ynfcm.mongodb.net/omnistack09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

/* por padrão o express não entende requisições no formato json 
   é necessário informa-lo
*/
app.use(express.json());
// usando o arquivo importado
//  lembrando que sempre deve vir após o use express.json
app.use(routes);
 
/* porta */
app.listen(3333);





