import listingApi from './listing-api.js'

const year = document.getElementById('year');
const unknownYear = document.getElementById('unknown year');
const continent = document.getElementById('continent');
const goldOrNot = document.getElementById('yes-gold');
const multiMaterial = document.getElementById('yes-multi');
const composition = document.getElementById('composition');
const condition = document.getElementById('condition');

const listing = listingApi.get();

if(!listing) {
    window.location = './';
}

year.textContent = listing.year;
unknownYear.textContent = listing.unknownYear;
continent.textContent = listing.continent;
goldOrNot.textContent = listing.goldOrNot;
multiMaterial.textContent = listing.multiMaterial;
composition.textContent = listing.composition;
condition.textContent = listing.condition;