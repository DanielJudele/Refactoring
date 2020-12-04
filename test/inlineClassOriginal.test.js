var assert = require("assert");
var Person = require("../src/Inline/Inline Class/inlineClassOriginal");
var data = {firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 2020"};
var personObject = new Person(data);
personObject.officeAreaCode = "123";
personObject.officeNumber = "123456789";

describe("Inline Class Source Code Tests", function () {
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
            assert.equal("123456789",personObject.officeNumber);
        });
    })
});