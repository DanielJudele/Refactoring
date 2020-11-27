// Original code
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

    calculateNetSalary(){
        let employeeTaxes = this.calculatePensionInsurance() + this.calculateHealthInsurance() + this.calculateIncomeTaxes();
        return this.#gross - employeeTaxes;
    }
}

module.exports.SalaryCalculator = SalaryCalculator;