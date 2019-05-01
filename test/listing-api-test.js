import listingApi from '../src/listing-api.js';
const test = QUnit.test;

test('round trip listing object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const listing = {
        continent: 'south america'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    listingApi.save(listing);
    const result = listingApi.get();

    //Assert
    assert.deepEqual(result, listing);
});
