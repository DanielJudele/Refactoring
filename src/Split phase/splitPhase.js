// Original code
/*
function calculateNetSalary(gross){
    let pensionInsurance = gross * 0.25;
    let healthInsurance = gross*0.1;
    let incomeTax =  gross * 0.1
    return gross - (pensionInsurance + healthInsurance + incomeTax);
}
*/

// Refactored code
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

module.exports.calculateNetSalary = calculateNetSalary;