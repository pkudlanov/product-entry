import makeCoinApplication from '../src/make-coin-application.js';

const test = QUnit.test;

test('Return completed form in object', function(assert) {
    const expected = {
        year: 1455,
        yearUnknown: true,
        continent: 'south america',
        goldOrNot: true,
        multiMaterials: true,
        whatMaterials: ['copper', 'nickel'],
        condition: 10
    };

    const formData = new FormData();
    formData.set('year', '1455');
    formData.set('yearUnknown', true);
    formData.set('continent', expected.continent);
    formData.set('gold', 'yes');
    formData.set('multiMaterials', 'yes');
    formData.set('whatMaterials', expected.whatMaterials[0]);
    formData.append('whatMaterials', expected.whatMaterials[1]);
    formData.set('condition', '10');

    const application = makeCoinApplication(formData);

    assert.deepEqual(application, expected);
});
 