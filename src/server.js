const express = require('express');
// é necessário importar com o ./ senão o node entende que tem quer importar uma dependencia inteira dentro do node_modules
// ./ significa pasta atual
const routes = require('./routes');

/* import mongoose - gerencia banco de dados mongoDB na núvem*/
const mongoose = require('mongoose');

const path = require('path');

const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ynfcm.mongodb.net/omnistack09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

/* por padrão o express não entende requisições no formato json 
   é necessário informa-lo
*/

/*permite que qualquer aplicação acesse o backend - a não ser que tenha parametros indicando { origin: 'http://local:333'} */
app.use(cors());


app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); /* quando o usuario usar a rota /files - vai setar staticamente um camimho pra ele - direcionando para a pasta de imagens - __dirname (pega o caminho do arquivo atual - (..) retorna uma pasta e entra em uploads) */

// usando o arquivo importado
//  lembrando que sempre deve vir após o use express.json
app.use(routes);
 
/* porta */
app.listen(3333);





