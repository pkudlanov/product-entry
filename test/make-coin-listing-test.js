import makeCoinListing from '../src/make-coin-listing.js';

const test = QUnit.test;

test('Return completed form in object', function(assert) {
    const expected = {
        year: 1455,
        yearUnknown: true,
        continent: 'south america',
        goldOrNot: true,
        multiMaterials: true,
        material: ['copper', 'nickel'],
        condition: 10
    };

    const formData = new FormData();
    formData.set('year', '1455');
    formData.set('yearUnknown', true);
    formData.set('continent', expected.continent);
    formData.set('gold', 'yes');
    formData.set('multiMaterials', 'yes');
    formData.set('material', expected.material[0]);
    formData.append('material', expected.material[1]);
    formData.set('condition', '10');

    const listing = makeCoinListing(formData);

    assert.deepEqual(listing, expected);
});
