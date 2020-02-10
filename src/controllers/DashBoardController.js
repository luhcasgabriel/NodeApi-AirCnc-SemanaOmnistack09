
const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {

    // método show - traz um só dashboard painel de controle que traz a listagem de sport do usuario 
    async show(req, res){

        // pega user_id
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });

        return res.json(spots);





    }


}