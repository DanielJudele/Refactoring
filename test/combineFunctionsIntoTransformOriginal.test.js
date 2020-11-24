var assert = require("assert");
var combineFunctionsIntoTransform = require("../src/Basic/Combine Functions into Transform/combineFunctionsIntoTransformOriginal.js").Original;

describe("Combine functions into Tranform Before Refactoring", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let netSalary = 0;
        let employeeTaxes = combineFunctionsIntoTransform.calculatePensionInsurance(gross) + combineFunctionsIntoTransform.calculateHealthInsurance(gross) + combineFunctionsIntoTransform.calculateIncomeTaxes(gross);
        netSalary = gross - employeeTaxes;
        it("Net salary", function () {
            assert.equal(550, netSalary);
        })
    })
});