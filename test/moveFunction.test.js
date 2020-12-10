var assert = require("assert");
var Person = require("../src/Moving Features/Move Function/moveFunction").Person;
var data = {firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 2020"};
var personObject = new Person(data);
personObject.officeAreaCode = "123";
personObject.officeNumber = "+40213-564-864";

describe("Move Function Tests", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert(personObject);
        }),
        it("Has first Name", function () {
            assert.equal("Dan",personObject.firstName);
        }),
        it("Has office area code", function () {
            assert.equal("123",personObject.officeAreaCode);
        });
        it("Has office number", function () {
            assert.equal("+40213-564-864",personObject.officeNumber);
        });
    })
});