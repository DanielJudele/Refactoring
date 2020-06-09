var assert = require("assert");
var Person = require("../src/Extract Function/extractFunction");
var personObject = new Person("Dan","Popescu", new Date());

describe("Extract Function Tests", function () {
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