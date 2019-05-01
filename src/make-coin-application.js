function makeCoinApplication(formData){
    const year = parseInt(formData.get('year'));
    const yearUnknown = formData.get('yearUnknown') === 'true';
    const goldOrNot = formData.get('gold') === 'yes';
    const multiMaterials = formData.get('multiMaterials') === 'yes';
    const condition = parseInt(formData.get('condition'));

    const application = {
        year: year,
        yearUnknown: yearUnknown,
        continent: formData.get('continent'),
        goldOrNot: goldOrNot,
        multiMaterials: multiMaterials,
        whatMaterials: formData.getAll('whatMaterials'),
        condition: condition
    };
    return application;
}

export default makeCoinApplication;