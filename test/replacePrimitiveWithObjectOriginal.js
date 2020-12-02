var assert = require("assert");
var replacePrimitiveWithObjectOriginal = require("../src/Encapsulation/Replace Primitive with Object/replacePrimitiveWithObjectOriginal");

describe("Replace Primitive with Object Source code", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let salaryCalculator = new replacePrimitiveWithObjectOriginal.SalaryCalculator(gross);
        it("Net salary", function () {
            assert.equal(550, salaryCalculator.calculateNetSalary());
        })
    })
});