// Refactored code
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

    calculatePensionInsurance() {
        return this.#gross * this.#tax.pensionInsurance;
    }

    calculateHealthInsurance() {
        return this.#gross * this.#tax.healthInsurance;
    }

    calculateIncomeTaxes() {
        return this.#gross * this.#tax.incomeTaxes;
    }

    calculateNetSalary(){
        return this.#gross - this.employeeTaxes;
    }
}

module.exports.SalaryCalculator = SalaryCalculator;