// Original code
/*
calculatePensionInsurance(gross) {
    return gross * 0.25;
}

calculateHealthInsurance(gross) {
    return gross * 0.1;
}

calculateIncomeTaxes(gross) {
    return gross * 0.1;
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