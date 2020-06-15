var assert = require("assert");
var combineFunctionsIntoTransform = require("../src/Split phase/splitPhase");

describe("Split phase", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let net = combineFunctionsIntoTransform.calculateNetSalary(1000);
        it("Net salary", function () {
            assert.equal(550, net);
        })
    })
});