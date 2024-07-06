function convertToCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('c').value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('f').value = fahrenheit.toFixed(2);
}



function convertToKilogramsToPounds() {
    const kilograms = parseFloat(document.getElementById('kg').value);
    const pounds = (kilograms * 2.205) ;
    document.getElementById('lbs').value = pounds.toFixed(2);
}



function convertToKilometersToMiles() {
    const kilometers = parseFloat(document.getElementById('km').value);
    const miles = (kilometers / 1.609) ;
    document.getElementById('m').value = miles.toFixed(2);
}
