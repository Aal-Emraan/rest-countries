const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    // console.log(data)
    const countryHTML = countries.map(country => getCountryHTML(country));
    console.log(countryHTML);
    const countryDiv = document.getElementById('countries');
    countryDiv.innerHTML = countryHTML.join(' ');
}
const getCountryHTML = country => {
    const {name, capital, flag} = country;
    return `
        <div class='country'>
            <h2>${name}</h2>
            <p>Capital: ${capital}</p>
            <img src="${flag}"/>
        </div>    
    `
}
loadCountries();