// Original source code
function calculateNetSalary(gross){
    let pensionInsurance = gross * 0.25;
    let healthInsurance = gross*0.1;
    let incomeTax =  gross * 0.1
    return gross - (pensionInsurance + healthInsurance + incomeTax);
}

module.exports.calculateNetSalary = calculateNetSalary;