const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/listings';
const db = mongoose.connect(URI, {useNewUrlParser: true,  useUnifiedTopology: true });


module.exports = db;
