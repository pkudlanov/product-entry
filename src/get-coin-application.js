function getCoinApplication(formData){
    const year = parseInt(formData.get('year'));
    const yearUnknown = formData.get('yearUnknown') === 'unknown';
    const goldOrNot = formData.get('gold') === 'yes';
    const multiMaterials = formData.get('multiMaterial') === 'yes';
    const condition = parseInt(formData.get('condition'));

    const application = {
        year: formData.get('year'),
        yearUnknown: yearUnknown,
        continent: formData.get('continent'),
        goldOrNot: goldOrNot,
        multiMaterials: multiMaterials,
        whatMaterials: formData.getAll('whatMaterials'),
        condition: condition
    };
    return application;
}




export default getCoinApplication