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