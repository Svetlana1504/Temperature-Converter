const сelcius = document.querySelector('.сelcius > input');
const fahrenheit = document.querySelector('.fahrenheit > input');
const kelvin = document.querySelector('.kelvin > input');
const button = document.querySelector('.btn')

function roundNumber(number) {
    return Math.round(number*100)/100
}

сelcius.addEventListener('input', function(){
    let cTemp = parseFloat(сelcius.value);
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15;

    fahrenheit.value = roundNumber(fTemp);
    kelvin.value = roundNumber(kTemp);
})
fahrenheit.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheit.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp - 32) * (5/9) + 273.15;

    сelcius.value = roundNumber(cTemp);
    kelvin.value = roundNumber(kTemp);
})
kelvin.addEventListener('input', function(){
    let kTemp = parseFloat(kelvin.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9/5) + 32;

    fahrenheit.value = roundNumber(fTemp);
    сelcius.value = roundNumber(cTemp);
})

button.addEventListener('click', () => {
    сelcius.value = '';
    fahrenheit.value = '';
    kelvin.value = '';
})