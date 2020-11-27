# Replace Temp with Query
## Why?
You have a expression which is saved in a local variable for later use in your code.
### Benefits:
- the code is more readable
- avoid code duplication
- more easy to implement tests
## What?
Move the entire expression to a separate function and return the result from it.
## How?
- Create a new function
- Move the entire expression to the new function
- Test
## Sample
**Before**
```js
/*
class SalaryCalculator{
    #gross;

    constructor (gross){
        this.#gross = gross;
    }

    calculatePensionInsurance() {
        return this.#gross * 0.25;
    }

    calculateHealthInsurance() {
        return this.#gross * 0.1;
    }

    calculateIncomeTaxes() {
        return this.#gross * 0.1;
    }
*/
     calculateNetSalary(){
        let employeeTaxes = this.calculatePensionInsurance() + this.calculateHealthInsurance() + this.calculateIncomeTaxes();
        return this.#gross - employeeTaxes;
    }
/*   
}

module.exports.SalaryCalculator = SalaryCalculator;
*/
```
![After refactoring](../../../images/arrow.png)
```js
/*
class SalaryCalculator{
    #gross;

    constructor (gross){
        this.#gross = gross;
    }
*/
    get employeeTaxes(){
        return this.calculatePensionInsurance() + this.calculateHealthInsurance() + this.calculateIncomeTaxes();
    }

    calculateNetSalary(){
        return this.#gross - this.employeeTaxes;
    }
/*
    calculatePensionInsurance() {
        return this.#gross * 0.25;
    }

    calculateHealthInsurance() {
        return this.#gross * 0.1;
    }

    calculateIncomeTaxes() {
        return this.#gross * 0.1;
    }
}

module.exports.SalaryCalculator = SalaryCalculator;
*/
```
