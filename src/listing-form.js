import makeCoinListing from './make-coin-listing.js'
import listingApi from './listing-api.js'

const form = document.getElementById('coin-listing');

const conditionSlider = document.getElementById('condition');
const conditionDisplay = document.getElementById('condition-display');

conditionSlider.addEventListener('change', function() {
    conditionDisplay.textContent = conditionSlider.value;
});

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const listing = makeCoinListing(formData);
    listingApi.save(listing);
});

let yearUnknown = document.getElementById('year-unknown');
let yearInput = document.getElementById('year');
console.log(yearUnknown.checked);
console.log('hello');
if(document.forms[0].yearUnknown.checked){
    yearInput.setAttribute('disabled', false);
}

// function enable(id)
// {
//     var eleman = document.getElementById(id);
//     eleman.setAttribute("disabled", false);
//     eleman.setAttribute("editable", true);
// }