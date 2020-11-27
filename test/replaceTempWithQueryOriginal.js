var assert = require("assert");
var replaceTempWithQuery = require("../src/Encapsulation/Replace Temp with Query/replaceTempWithQueryOriginal");

describe("Replace Temp with Query Original", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let salaryCalculator = new replaceTempWithQuery.SalaryCalculator(gross);
        it("Net salary", function () {
            assert.equal(550, salaryCalculator.calculateNetSalary());
        })
    })
});