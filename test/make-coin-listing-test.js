import makeCoinListing from '../src/make-coin-listing.js';

const test = QUnit.test;

test('Return completed form in object', function(assert) {
    const expected = {
        year: 1455,
        yearUnknown: 'true',
        continent: 'south america',
        goldOrNot: 'yes',
        multiMaterial: 'yes',
        composition: ['copper', 'nickel'],
        condition: 10
    };

    const formData = new FormData();
    formData.set('year', '1455');
    formData.set('yearUnknown', true);
    formData.set('continent', expected.continent);
    formData.set('gold', 'yes');
    formData.set('multiMaterial', 'yes');
    formData.set('composition', expected.composition[0]);
    formData.append('composition', expected.composition[1]);
    formData.set('condition', '10');

    const listing = makeCoinListing(formData);

    assert.deepEqual(listing, expected);
});
