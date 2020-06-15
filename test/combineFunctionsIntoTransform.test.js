var assert = require("assert");
var combineFunctionsIntoTransform = require("../src/Combine Functions into Transform/combineFunctionsIntoTransform.js");

describe("Combine functions into Tranform", function () {
    describe("Net Salary calculation", function () {
        let gross = 1000;
        let net = combineFunctionsIntoTransform.calculateNetSalary(1000);
        it("Net salary", function () {
            assert.equal(550, net);
        })
    })
});