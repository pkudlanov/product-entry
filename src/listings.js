import listingApi from './listing-api.js';

const tbody = document.getElementById('listings');

const listings = listingApi.getAll();

for(let i = 0; i < listings.length; i++) {
    const listing = listings[i];

    const tr = document.createElement('tr');
    
    //create the table cell
    const yearCell = document.createElement('td');
    //create the anchor link <a>
    const link = document.createElement('a');

    //create a search params object
    const searchParams = new URLSearchParams();
    //set the year key with the listings year as the value
    
    if(listing.year === null) {
        searchParams.set('year', 'unknown');
    } else {
        searchParams.set('year', listing.year);
    }
    
    //Use the formated search string as the end of the link href
    //that goes to the detail page
    link.href = 'listing-detail.html?' + searchParams.toString();
    
    console.log(listing, 'hello');
    //use the listings year as the display text for the link
    if(listing.year === null) {
        // link.textContent = listing.yearUnknown;
        link.textContent = 'Unknown';
    } else {
        link.textContent = listing.year;
    }
    //add the link to the year cell
    yearCell.appendChild(link);
    // add the year cell to the table row
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