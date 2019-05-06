import listingApi from './listing-api.js'

const year = document.getElementById('year');
const continent = document.getElementById('continent');
const goldOrNot = document.getElementById('yes-gold');
const multiMaterial = document.getElementById('yes-multi');
const composition = document.getElementById('composition');
const condition = document.getElementById('condition');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('year');

const listing = listingApi.get(id);

// li

if(listing.yearUnknown === 'Year Unknown'){
    year.textContent = listing.yearUnknown;
}else{
    year.textContent = listing.year;
}

continent.textContent = listing.continent;
goldOrNot.textContent = listing.goldOrNot;
multiMaterial.textContent = listing.multiMaterial;
let compositionList = '';
if(listing.composition){
    compositionList = listing.composition.join(', ');

}
composition.textContent = compositionList;
condition.textContent = listing.condition;
