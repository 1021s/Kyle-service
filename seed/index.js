// const House = require('../db/Schemas/Listing.js');


//loop 100 times
const houses = [];
for (let i = 0; i < 100; i++) {
    const house = {};

    house['Price'] = Math.floor(Math.random() * 5999999) + 100000;


    const Detail = {};
    Detail['Room_count'] = Math.floor(Math.random() * 6) + 2;

    Detail['Bathroom_count'] = Math.floor(Math.random() * 3) + 1;

    Detail['Square_footage'] = Math.floor(Math.random() * 2600) + 500;;
    house['Details'] = Detail;

    const Address = {};
    Address['House_number'] = Math.floor(Math.random() * 9888) + 111;
    Address['Street_number'] = Math.floor(Math.random() * 300);
    const street = ['street', 'avenue', 'place', 'boulevard'];
    const direction = ['', ' NW', ' NE', ' S', ' SW', ' SE', ' N'];
    Address['Street'] = street[Math.floor(Math.random() * 4)] + direction[Math.floor(Math.random() * 7)];
    Address['City'] = 'Seattle';
    Address['State'] = 'WA';
    Address['ZIP_code'] = Math.floor(Math.random() * 99) + 98100;
    house['Address'] = Address;


    const bools = [true, false];
    house['Zestimate'] = bools[Math.floor(Math.random() * 2)];
    house['Agent'] = bools[Math.floor(Math.random() * 2)];
    house['Saved'] = false;

    houses.push(house);
  
    // House.create(house);//create and save record in db

}