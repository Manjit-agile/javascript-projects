# BMI Calculator

A simple browser-based BMI calculator. Enter your weight in kilograms and height in centimeters to calculate your BMI.

## Run the app

Open `index.html` in a web browser. No installation or build step is required.

## How it works

The calculator converts height from centimeters to meters and calculates BMI using:

```text
BMI = weight (kg) / height (m)²
```

The result is displayed to two decimal places. Invalid or non-positive measurements produce a validation message.

## Scripts

Run the package's placeholder test script from this folder:

```sh
npm test
```

This currently prints `No tests configured`; automated tests have not been set up.

## Files

- `index.html` — calculator page and styles
- `script.js` — BMI calculation and input validation
