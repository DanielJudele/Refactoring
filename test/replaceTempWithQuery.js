var assert = require("assert");
var replaceTempWithQuery = require("../src/Basic/Replace Temp with Query/replaceTempWithQuery");

describe("Replace Temp with Query", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let salaryCalculator = new replaceTempWithQuery.SalaryCalculator(gross);
        it("Net salary", function () {
            assert.equal(550, salaryCalculator.calculateNetSalary());
        })
    })
});