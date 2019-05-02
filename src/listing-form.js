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





// let yearUnknown = document.getElementById('yearUnknown');
// let yearInput = document.getElementById('year');

// yearUnknown.addEventListener('change', function(){
//     if(yearUnknown.checked){
//         yearInput.setAttribute('disabled', false);
//     }else{
//         yearInput.setAttribute('disabled') = true;
//     }
// })

// console.log('Hi', yearUnknown.checked);
// if(yearUnknown.checked){
//     yearInput.setAttribute('disabled', false);
//     console.log('hello');
// }else{
//     console.log('hey');
// }