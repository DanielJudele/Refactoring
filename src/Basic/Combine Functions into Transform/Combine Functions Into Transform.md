# Rename Variable
## Why?
You have multiple functions that are called when it's necessary to get data.
### Benefits:
- avoid code duplication
- the code is more readable
- more easy to implement tests
## What?
Create a new function where all the multiple functions are called to get the same data.
## How?
- Create a new function
- Move the call of the multiple functions to that function
- Test
## Sample
**Before**
```js
function calculatePensionInsurance(gross) {
    return gross * 0.25;
}

function calculateHealthInsurance(gross) {
    return gross * 0.1;
}

function calculateIncomeTaxes(gross) {
    return gross * 0.1;
}

//calculate net salary
let gross = 1000;
let netSalary = 0;
let employeeTaxes = calculatePensionInsurance(gross) + calculateHealthInsurance(gross) + calculateIncomeTaxes(gross);
netSalary = gross - employeeTaxes;
```
![After refactoring](../../../images/arrow.png)
```js
function calculatePensionInsurance(gross) {
    return gross * 0.25;
}

function calculateHealthInsurance(gross) {
    return gross * 0.1;
}

function calculateIncomeTaxes(gross) {
    return gross * 0.1;
}

function calculateNetSalary(gross){
    let employeeTaxes = calculatePensionInsurance(gross) + calculateHealthInsurance(gross) + calculateIncomeTaxes(gross);
    return gross - employeeTaxes;
}
```
