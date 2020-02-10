
const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    // método index - listar todos os spots por filtro de tecnologia
    // async = diz que a função, é uma função assincrona
    async index(req, res){

        // pegando tecnologia da requisição
        const { tech } = req.query;

        // pega array de todos os spots que tem a tecnologia especifica
        // método find() pega varios resultados - passa o atributo
        const spots = await Spot.find({ techs: tech });

        //retorna lista
        return res.json(spots);

    },



    // método store - salvar spots novos
    // async = diz que a função, é uma função assincrona
    async store(req, res) {
        // console.log(req.body);
        // console.log(req.file);

        // pega file e coloca na variável
        const { filename } = req.file;
        // pega atributos da requisição e coloca nas variáveis
        const { company, techs , price } = req.body;
        // pega o user_id dentro do headers da requisição (cabeçalho)
        // obs: no header pode enviar varias outras informações como o idioma por exemplo - para ter uma resposta em idioma diferente
        const { user_id } = req.headers;

        //validação - consulta usuário na base
        const user = await User.findById(user_id);

        // validação - verifica se usuario existe, caso não retorna erro 400 + mensagem de erro 
        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }        

        // se usuario exite criar na base de dados o spot novo (local novo)
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), // como tech é uma string - usa split para separar em um array, depois usa um map para percorrer o array e dar um trim() que vai retirar espaços em branco
            price
        });

        //retorna em formato json usuário criado
        return res.json(spot)
    }
};