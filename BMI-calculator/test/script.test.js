const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');

function submitMeasurements(weight, height) {
    let submitHandler;
    const form = {
        elements: {
            weight: { value: String(weight) },
            height: { value: String(height) },
        },
        addEventListener(eventName, handler) {
            assert.equal(eventName, 'submit');
            submitHandler = handler;
        },
    };
    const result = { hidden: true, innerHTML: '' };

    vm.runInNewContext(script, {
        document: {
            getElementById(id) {
                return id === 'bmi-form' ? form : result;
            },
        },
        Number,
    });

    submitHandler({ preventDefault() {} });
    return result;
}

test('calculates BMI using weight in kilograms and height in centimeters', () => {
    const result = submitMeasurements(70, 175);

    assert.match(result.innerHTML, /Your BMI is 22\.86/);
    assert.equal(result.hidden, false);
});

test('shows a validation message for invalid measurements', () => {
    const result = submitMeasurements(0, 175);

    assert.match(result.innerHTML, /Please enter valid measurements/);
    assert.equal(result.hidden, false);
});
