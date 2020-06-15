# Rename Variable
## Why?
You have a function that has multiple behaviors and it's hard to understand the result.
### Benefits:
- the code is more readable
- avoid code duplication
- more easy to implement tests
## What?
Create a new function where all the multiple functions are called to get the same data.
## How?
- Split the code into multiple functions
- Test
## Sample
**Before**
```js
function calculateNetSalary(gross){
    let pensionInsurance = gross * 0.25;
    let healthInsurance = gross*0.1;
    let incomeTax =  gross * 0.1
    return gross - (pensionInsurance + healthInsurance + incomeTax);
}
```
**After refactoring**
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
