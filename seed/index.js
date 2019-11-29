// const House = require('../db/Schemas/Listing.js');


//loop 100 times
for(let i = 0; i < 100; i++) {
    const house = {};
    //generate random price, 6 - 7 digits
    //details
    //random room count 2-8
    //random bathroom count: 1-4
    //random sq footage: look up reasonable sq footage
    //address {}
    //random house number 4 digits
    //random street number 1 - 3 digits
    //random street: either st or ave w NE, NW, SE, S, N as addition tackons
    //seattle
    //wa
    //random zip
    //zestimate flip between true or false
    //agents flip between true or false
    //saved defaults to false
    house['Saved'] = false;
     House.create(house);//create and save record in db
    
    }