var assert = require("assert");
var OriginalPerson = require("../src/Basic/Change Function Declaration/changeFunctionDeclarationOriginal.js").OriginalPerson;
var personObject = new OriginalPerson("Dan","Popescu", new Date(2002, 12, 01));

describe("Change Function Declaration Before Refactoring Tests", function () {
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
            assert.equal("Dan Popescu", personObject.getFName());
        })
    })
});