import getCoinApplication from './get-coin-application.js'

const form = document.getElementById('coin-application');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const coinApplication = getCoinApplication(formData);
    console.log(coinApplication);
})