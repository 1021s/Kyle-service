const express = require('express');
const app = express();
const PORT = 3001;
const House = require('../db/Schemas/Listing.js');


app.use(express.json());


app.route('/api/listings')
    .get((req, res) => {
        console.log(req.url);
        // console.log(House);
        // res.sendStatus(200);
        House.find({})
        .then(houses => res.send(houses))
        .catch(() => res.status(500).send());
    })


app.listen(PORT, () => console.log(`... server is listening on PORT ${PORT}`));