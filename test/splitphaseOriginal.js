var assert = require("assert");
var splitPhaseOriginal = require("../src/Split phase/splitPhaseOriginal");

describe("Split phase Before refactoring", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let net = splitPhaseOriginal.calculateNetSalary(1000);
        it("Net salary", function () {
            assert.equal(550, net);
        })
    })
});