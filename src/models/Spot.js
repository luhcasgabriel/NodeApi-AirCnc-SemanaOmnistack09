/**
 * model spot (local)
 */


const mongoose = require('mongoose');

/* schema do usuário - estrutura do usuário */
const SpotSchema = new mongoose.Schema({
    
    thumbnail: String, // miniatura - imagem
    company: String,   // empresa
    price: Number,     // valor, preço
    techs: [String],   // tecnologias - array com tecnologias
    user: {
        type: mongoose.Schema.Types.ObjectId, // usuario que criou esse spot - vai gravar o id na base e é possível depois pegar esse id para outras operações
        ref: 'User' // ref - referencia de qual model está se referindo essa informação, no caso o usuário que criou o spot
    }  
}, {
    toJSON: {
        virtuals: true, /* parametro a mais no schema, para permitir que virtuals sejam carregados junto ao json de resposta */
    },
});

/* virtual - será carregado pelo schema acima */
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
})

//  export = criação do model Spot, só a partir daqui é criado realmente o model
//  passado o nome da model (Spot) e o schema que ele usa (estrutura do Spot)
module.exports = mongoose.model('Spot', SpotSchema);


