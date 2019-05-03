import listingApi from '../src/listing-api.js';
const test = QUnit.test;

QUnit.module('listing api')

listingApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round trip listing object', function(assert) {
    testStorage.removeItem('listings');
    const listing = { continent: 'south america' };

    listingApi.save(listing);
    const result = listingApi.get();

    assert.deepEqual(result, listing);
});

test('removing listings in local storage, returns empty array', function(assert){
    testStorage.removeItem('listings');
    const expected = [];

    const listings = listingApi.getAll();

    assert.deepEqual(listings, expected);
});

test('saving two entries returns two items', function(assert){
    testStorage.removeItem('listings');

    const listing1 = {name: 'coin1'};
    const listing2 = {name: 'coin2'};
    const expected = [listing1, listing2];

    listingApi.save(listing1);
    listingApi.save(listing2);

    const listings = listingApi.getAll();
    
    assert.deepEqual(listings, expected);
});