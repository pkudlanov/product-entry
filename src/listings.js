import listingApi from './listing-api.js';

const tbody = document.getElementById('listings');

const listings = listingApi.getAll();

