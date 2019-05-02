import listingApi from '../src/listing-api.js';
const test = QUnit.test;

test('round trip listing object', function(assert) {
    const listing = {
        continent: 'south america'
    };

    listingApi.save(listing);
    const result = listingApi.get();

    assert.deepEqual(result, listing);
});
