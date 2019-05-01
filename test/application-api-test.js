import applicationApi from '../src/application-api.js';
const test = QUnit.test;

test('round trip application object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const product = {
        year: 1812
    };
    //Act 
    // Call the function you're testing and set the result to a const
    applicationApi.save(product);
    const result = applicationApi.get();

    //Assert
    assert.equal(result, product);
});
