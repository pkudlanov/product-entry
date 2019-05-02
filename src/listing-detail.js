import listingApi from './listing-api.js'

const year = document.getElementById('year');
const yearUnknown = document.getElementById('year-unknown');
const continent = document.getElementById('continent');
const goldOrNot = document.getElementById('yes-gold');
const multiMaterial = document.getElementById('yes-multi');
const composition = document.getElementById('composition');
const condition = document.getElementById('condition');

const listing = listingApi.get();

if(!listing) {
    window.location = './';
}

if(listing.yearUnknown === 'Year Unknown'){
    year.textContent = listing.yearUnknown;
}else{
    year.textContent = listing.year;
}

continent.textContent = listing.continent;
goldOrNot.textContent = listing.goldOrNot;
multiMaterial.textContent = listing.multiMaterials;
let compositionList = '';
if(listing.composition){
    compositionList = listing.composition.join(', ');

}
composition.textContent = compositionList;
condition.textContent = listing.condition;
