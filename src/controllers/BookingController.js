const Booking = require('../models/Booking');

module.exports = {

    // store booking
    async store(req, res){

        // pega usuario
        const { user_id } = req.headers;

        // pega spot - route params
        const { spot_id  } = req.params;

        // pega data 
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        return res.json(booking);

    }



};