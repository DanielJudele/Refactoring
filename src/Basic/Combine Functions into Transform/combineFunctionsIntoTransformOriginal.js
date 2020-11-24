// Original source code
function calculatePensionInsurance(gross) {
    return gross * 0.25;
}

function calculateHealthInsurance(gross) {
    return gross * 0.1;
}

function calculateIncomeTaxes(gross) {
    return gross * 0.1;
}

module.exports.Original =  { calculatePensionInsurance, calculateHealthInsurance, calculateIncomeTaxes};