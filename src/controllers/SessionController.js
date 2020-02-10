// index = retorna uma listagem
//  show = mostrar uma só sessão
//  store = criar uma sessão
//  update = aterar
// destroy = deletar

// import model user
const User = require('../models/User')


module.exports = {
    // async = diz que a função, é uma função assincrona
    async store(req, res) {
        // recurso do js chamado desestruturação = buscando um atributo json dentro do body 
        const { email } = req.body;

        // variável let(permitir, deixar) que pode ser mudada
        // verificando se existe email na base de dados já salvo
        // poderia ser assim { email: email } mas como a variavel tem o mesmo nome da chave pode ser assim { email}
        let user = await User.findOne({ email });

        // se não encontrou usuário com o mesmo email, cria novo
        if (!user) {
            // cria um usuário passando as informações dentro de um objeto {}
            // await = função do js que diz que espera a execução da criação do usuario
            // no js pode demorar uns milisegundo para criação de um dado na base 
            // então com o await, só vai deixar prossegir para a proxima linha quando essa instrução finalizar 
            user = await User.create({ email });
        
        }

        
        // retorna já o usuário como objeto
        return res.json(user);
    }
};