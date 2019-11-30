const seed = require('./index.js');



test('generates 100 house listings', () => {
    const houses = seed();
    expect(houses.length).toBe(100);
})

test('generates listing ids as zero padded strings', () => {
    const houses = seed();
    const lastHouse = houses[houses.length-1];
    expect(lastHouse['Listing_id']).toBe('099');
}) 
