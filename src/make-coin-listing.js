function makeCoinListing(formData){
    const year = parseInt(formData.get('year'));
    const yearUnknown = formData.get('year-unknown');
    const goldOrNot = formData.get('gold');
    const multiMaterials = formData.get('yes-multi') === 'yes';
    const condition = parseInt(formData.get('condition'));

    const listing = {
        year: year,
        yearUnknown: yearUnknown,
        continent: formData.get('continent'),
        goldOrNot: goldOrNot,
        multiMaterials: multiMaterials,
        material: formData.getAll('material'),
        condition: condition
    };
    return listing;
}

export default makeCoinListing;