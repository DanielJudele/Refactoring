var assert = require("assert");
var Person = require("../src/Basic/Change Function Declaration/changeFunctionDeclaration.js").Person;
var personObject = new Person("Dan","Popescu", new Date(2002, 12, 01));

describe("Change Function Declaration After Refactoring Tests", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert(personObject);
        }),
        it("Has first Name", function () {
            assert.equal("Dan",personObject.firstName);
        }),
        it("Has last Name", function () {
            assert.equal("Popescu",personObject.lastName);
        }),
        it("Test full name", function () {
            assert.equal("Dan Popescu", personObject.getFullName());
        })
    })
});