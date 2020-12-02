# Replace Primitive with Object
## Why?
A class contains data value. The field has its own behavior and associated data.
### Benefits:
- avoid code duplication
- more easy to extend the code
## What?
Create a new class, place the field with data value and its behavior in the class, and store the object of the class in the original class.
## How?
- Create a new class
- Place the field with data value and its behavior in the class
- Store the object of the class in the original class
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

    get employeeTaxes(){
        return this.calculatePensionInsurance() + this.calculateHealthInsurance() + this.calculateIncomeTaxes();
    }
*/
    calculatePensionInsurance() {
        return this.#gross * 0.25;
    }

    calculateHealthInsurance() {
        return this.#gross * 0.1;
    }

    calculateIncomeTaxes() {
        return this.#gross * 0.1;
    }
/*
    calculateNetSalary(){
        return this.#gross - this.employeeTaxes;
    }
}

module.exports.SalaryCalculator = SalaryCalculator;
*/
```
![After refactoring](../../../images/arrow.png)
```js
class Tax{
    #pensionInsurance = 0.25;
    #healthInsurance = 0.1;
    #incomeTaxes = 0.1;

    get pensionInsurance(){
        return this.#pensionInsurance;
    }
    
    get healthInsurance(){
        return this.#healthInsurance;
    }
    
    get incomeTaxes(){
        return this.#incomeTaxes;
    }
}

/*
class SalaryCalculator{
    #gross;
    #tax

    constructor (gross){
        this.#gross = gross;
        this.#tax = new Tax();
    }

    get employeeTaxes(){
        return this.calculatePensionInsurance() + this.calculateHealthInsurance() + this.calculateIncomeTaxes();
    }
*/
    calculatePensionInsurance() {
        return this.#gross * this.#tax.pensionInsurance;
    }

    calculateHealthInsurance() {
        return this.#gross * this.#tax.healthInsurance;
    }

    calculateIncomeTaxes() {
        return this.#gross * this.#tax.incomeTaxes;
    }
/*
    calculateNetSalary(){
        return this.#gross - this.employeeTaxes;
    }
}

module.exports.SalaryCalculator = SalaryCalculator;
*/
```
