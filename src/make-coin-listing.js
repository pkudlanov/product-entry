function makeCoinListing(formData){
    const year = parseInt(formData.get('year'));
    const yearUnknown = formData.get('yearUnknown');
    const goldOrNot = formData.get('gold');
    const multiMaterials = formData.get('multiMaterial');
    const condition = parseInt(formData.get('condition'));

    const listing = {
        year: year,
        yearUnknown: yearUnknown,
        continent: formData.get('continent'),
        goldOrNot: goldOrNot,
        multiMaterials: multiMaterials,
        composition: formData.getAll('composition'),
        condition: condition
    };
    return listing;
}

export default makeCoinListing;