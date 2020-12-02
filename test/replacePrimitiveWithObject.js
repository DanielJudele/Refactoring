var assert = require("assert");
var replacePrimitiveWithObject = require("../src/Encapsulation/Replace Primitive with Object/replacePrimitiveWithObject");

describe("Replace Primitive with Object", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let salaryCalculator = new replacePrimitiveWithObject.SalaryCalculator(gross);
        
        it("Net salary", function () {
            assert.equal(550, salaryCalculator.calculateNetSalary());
        })
    })
});