
const form = document.getElementById('bmi-form');
const result = document.getElementById('result');
// const button = document.getElementById('calculate-btn');
// button.addEventListener('click', () => {
//     alert('Calculate button clicked');
// });

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const height = parseInt(form.elements.height.value);
    const weight = parseInt(form.elements.weight.value);
    
    if (height <= 0 || height == '' ||  weight <= 0 || weight == '' ) {
        result.innerHTML = '<strong>Please enter valid measurements.</strong>';
    } else{
        const bmi = (weight / ((height/100) * (height/100))).toFixed(2);
        result.innerHTML = `<strong>Your BMI is ${bmi}</strong>`;
    }
});
