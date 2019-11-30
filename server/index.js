const express = require('express');
const app = express();
const PORT = 3001;
const House = require('../db/Schemas/Listing.js');


app.use(express.json());


app.route('/api/listings')
    .get((req, res) => {
        House.find({})
        .then(houses => res.send(houses))
        .catch(() => res.status(500).send());
    })

app.route('/api/listings/:Listing_id')
    .get((req, res) => {
        House.find(req.params)
        .then(house => res.send(house))
        .catch(() => res.sendStatus(500));
    })


app.listen(PORT, () => console.log(`... server is listening on PORT ${PORT}`));
