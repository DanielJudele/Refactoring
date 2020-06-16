var assert = require("assert");
var Person = require("../src/Encapsulate Record/EncapsulateRecord");
var personObject = new Person("Dan","Popescu", new Date(2002, 12, 01));

describe("Encapsulate Record", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert(personObject);
        }),
        it("Has first Name", function () {
            assert.equal("Dan",personObject.FirstName);
        }),
        it("Has last Name", function () {
            assert.equal("Popescu",personObject.LastName);
        }),
        it("Has full Name", function () {
            assert.equal("Dan Popescu",personObject.FullName);
        }),
        it("He is 17 age old", function () {
            const age = personObject.getAge();
            assert.equal(17, age);
        }),
        it("He is not an adult", function () {
            assert.equal(false, personObject.isAdult());
        })
    })
});