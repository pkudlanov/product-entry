import listingApi from './listing-api.js';

const tbody = document.getElementById('listings');

const listings = listingApi.getAll();

for(let i = 0; i < listings.length; i++) {
    const listing = listings[i];

    const tr = document.createElement('tr');
    
    const yearCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', listing.year);
    link.href = 'listing-detail.html?' + searchParams.toString();
    if(listing.year === null){
        link.textContent = 'Unknown';
    } else {
        link.textContent = listing.year;
    }
    yearCell.appendChild(link);
    tr.appendChild(yearCell);
    
    const continentCell = document.createElement('td');
    continentCell.textContent = listing.continent;
    tr.appendChild(continentCell);
    
    const goldCell = document.createElement('td');
    goldCell.textContent = listing.goldOrNot;
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