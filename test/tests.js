const test = QUnit.test;
import getCoinApplication from '../src/get-coin-application.js';

test('Return completed form in object', function(assert) {
    const expected = {
        year: 1455,
        yearUnknown: '',
        continent: 'south america',
        goldOrNot: false,
        multiMaterials: true,
        whatMaterials: ['copper', 'nickel'],
        condition: 10
    };

    const formData = new FormData();
    formData.set('year', expected.name);
    formData.set('yearUnknown', expected.name);
    formData.set('continent', expected.continent);
    formData.set('goldOrNot', expected.goldOrNot);
    formData.set('multiMaterials', 'yes');
    formData.set('whatMaterials', expected.whatMaterials[0]);
    formData.append('whatMaterials', expected.whatMaterials[1]);
    formData.set('condition', '10');

    const application = getCoinApplication(formData);

    assert.deepEqual(application, expected);
});
 