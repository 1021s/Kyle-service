const db = require('../index.js');
const mongoose = require('mongoose');


const houseSchema = new mongoose.Schema({
    Listing_id: Number,
    Price: Number,
    Details: {
        Room_count: Number,
        Bathroom_count: Number,
        Square_footage: Number
    },
    Address: {
        House_number: Number,
        Street_number: Number,
        Street: String,
        City: String,
        State: String,
        ZIP_code: Number
    },
    Zestimate: Boolean,
    Agent: Boolean,
    Saved: Boolean
});

const House = mongoose.model('House', houseSchema);


module.exports = House;