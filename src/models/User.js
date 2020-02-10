/**
 * model usuário
 */


 const mongoose = require('mongoose');

 /* schema do usuário - estrutura do usuário */
 const UserSchema = new mongoose.Schema({
     email: String
 });

//  export = criação do model User, só a partir daqui é criado realmente o model
//  passado o nome da model (User) e o schema que ele usa (estrutura do usuário)
 module.exports = mongoose.model('User', UserSchema);


