import listingApi from './listing-api.js';

const year = document.getElementById('year');
const continent = document.getElementById('continent');
const goldOrNot = document.getElementById('yes-gold');
const multiMaterial = document.getElementById('yes-multi');
const composition = document.getElementById('composition');
const condition = document.getElementById('condition');


const searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('year');
console.log(id, 'id');

const listing = listingApi.get(id);
console.log(searchParams, 'search');
console.log(listing, 'yo');
if(listing.yearUnknown === 'Year Unknown'){
    year.textContent = 'Unknown';
} else {
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
