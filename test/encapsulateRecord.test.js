var assert = require("assert");
var Person = require("../src/Encapsulate Record/EncapsulateRecord");
var data = {firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 2020"};
var personObject = new Person(data);

describe("Encapsulate Record", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert(personObject);
        }),
        it("Has first Name", function () {
            assert.equal("Dan",personObject.firstName);
        }),
        it("Has last Name", function () {
            assert.equal("Popescu",personObject.lastName);
        })
    })
});