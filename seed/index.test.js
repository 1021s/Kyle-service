const seed = require('./index.js');



test('generates 100 house listings', () => {
    const houses = seed();
    expect(houses.length).toBe(100);
})

test('generates listing ids as zero padded strings', () => {
    const house = seed()[1];
    expect(house['Listing_id']).toBe('001');
}) 