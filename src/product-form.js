import makeCoinApplication from './make-coin-application.js'

const form = document.getElementById('coin-application');

const conditionSlider = document.getElementById('condition');
const conditionDisplay = document.getElementById('condition-display');

conditionSlider.addEventListener('change', function() {
    conditionDisplay.textContent = conditionSlider.value;
});

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const coinApplication = makeCoinApplication(formData);
    console.log(coinApplication);
})