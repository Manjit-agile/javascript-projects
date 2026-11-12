
const form = document.getElementById('bmi-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = Number(form.elements.weight.value);
    const height = Number(form.elements.height.value) / 100;
    const bmi = weight / (height * height);

    if (!Number.isFinite(weight) || !Number.isFinite(height) || weight <= 0 || height <= 0) {
        result.innerHTML = '<strong>Please enter valid measurements.</strong>';
    } else {
        result.innerHTML = `<strong>Your BMI is ${bmi.toFixed(2)}</strong>`;
    }
    result.hidden = false;
});
