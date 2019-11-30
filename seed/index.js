const House = require('../db/Schemas/Listing.js');


//loop 100 times
const seed = () => {
    const houses = [];
    for (let i = 0; i < 100; i++) {
        const house = {};
        let pad = i;

        if (pad.toString().length < 2) {
            house['Listing_id'] = '00' + pad.toString();
        } else {
            house['Listing_id'] = '0' + pad.toString();
        }

        house['Price'] = Math.floor(Math.random() * 5999999) + 100000;

        const Detail = {};

        Detail['Room_count'] = Math.floor(Math.random() * 6) + 2;
        Detail['Bathroom_count'] = Math.floor(Math.random() * 3) + 1;
        Detail['Square_footage'] = Math.floor(Math.random() * 2600) + 500;;

        house['Details'] = Detail;

        const Address = {};
        Address['House_number'] = Math.floor(Math.random() * 9888) + 111;
        Address['Street_number'] = Math.floor(Math.random() * 300);

        const street = ['Street', 'Avenue', 'Place', 'Boulevard'];
        const direction = ['', ' W', ' NW', ' NE', ' S', ' E', ' SW', ' SE', ' N'];

        Address['Street'] = street[Math.floor(Math.random() * 4)] + direction[Math.floor(Math.random() * 9)];
        Address['City'] = 'Seattle';
        Address['State'] = 'WA';
        Address['ZIP_code'] = Math.floor(Math.random() * 99) + 98100;
        house['Address'] = Address;


        const bools = [false, true];

        house['Zestimate'] = bools[Math.floor(Math.random() * 2)];
        house['Agent'] = bools[Math.floor(Math.random() + .799999)];
        house['Saved'] = false;

        houses.push(house);

        House.create(house);//create and save record in db

    }
    console.log(houses);
    return houses;

}


seed();
module.exports = seed;
