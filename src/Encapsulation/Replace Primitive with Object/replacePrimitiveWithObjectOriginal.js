// Original code
class SalaryCalculator{
    #gross;

    constructor (gross){
        this.#gross = gross;
    }

    get employeeTaxes(){
        return this.calculatePensionInsurance() + this.calculateHealthInsurance() + this.calculateIncomeTaxes();
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

    calculateNetSalary(){
        return this.#gross - this.employeeTaxes;
    }
}

module.exports.SalaryCalculator = SalaryCalculator;