var assert = require("assert");
var Person = require("../src/Encapsulation/Encapsulate Variable/EncapsulateVariableOriginal.js").Original;
var personObject = new Person("Dan","Popescu", new Date(2002, 12, 01));

describe("Encapsulate Variables or Field", function () {
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
        it("Has full Name", function () {
            assert.equal("Dan Popescu",personObject.getFName());
        }),
        it("He is 18 age old", function () {
            const age = personObject.getAge();
            assert.equal(18, age);
        }),
        it("He is not an adult", function () {
            assert.equal(true, personObject.isAdult());
        })
    })
});