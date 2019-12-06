/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const House = require('../db/Schemas/Listing.js');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use('/:Listing_id', express.static(path.resolve(__dirname, '..', 'public')));


// app.route('/api/listings')
//     .get((req, res) => {
//         House.find({})
//         .then(houses => res.send(houses))
//         .catch(() => res.status(500).send());
//     })

app.route('/api/listings/:Listing_id')
  .get((req, res) => {
    House.find(req.params)
      .then((house) => res.send(house))
      .catch(() => res.sendStatus(500));
  });


app.listen(PORT, () => console.log(`... server is listening on PORT ${PORT}`));
