var assert = require("assert");
var Person = require("../src/Extract/Extract Function/extractFunctionOriginal");
var personObject = new Person("Dan","Popescu", new Date());

describe("Extract Function Original Tests", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert(personObject);
        }),
        it("Has first Name", function () {
            assert.equal("Dan",personObject.firstName);
        }),
        it("Has last Name", function () {
            assert.equal("Popescu",personObject.lastName);
        });
    })
});