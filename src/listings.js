import listingApi from './listing-api.js';

const tbody = document.getElementById('listings');

const listings = listingApi.getAll();

for (let i = 0; i < listings.length; i++) {
    const listing = listings[i];

    const tr = document.createElement('tr');
    
    const yearCell = document.createElement('td');
    yearCell.textContent = listing.year;
    tr.appendChild(yearCell);
    
    const continentCell = document.createElement('td');
    continentCell.textContent = listing.continent;
    tr.appendChild(continentCell);
    
    const goldCell = document.createElement('td');
    goldCell.textContent = listing.gold;
    tr.appendChild(goldCell);
    
    const compositionCell = document.createElement('td');
    let compositionList = '';
    if(listing.composition) {
        compositionList = listing.composition.join(', ');
    }
    compositionCell.textContent = compositionList;
    tr.appendChild(compositionCell);
    
    tbody.appendChild(tr);
}