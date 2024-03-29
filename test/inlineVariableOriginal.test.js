var assert = require("assert");
var Person = require("../src/Inline/Inline Variable/InlineVariableOriginal");
var personObject = new Person("Dan","Popescu", new Date(2002, 12, 01));

describe("Inline Variable Original Tests", function () {
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
        it("He is 18 age old", function () {
            const age = personObject.getAge();
            assert.equal(18, age);
        }),
        it("He is not an adult", function () {
            assert.equal(true, personObject.isAdult());
        })
    }),

    describe("Age Test", function () {
        let personObject = new Person("Ion","Popescu", new Date(1982, 01, 01));
        it("Object is created", function () {
            assert(personObject);
        }),
        it("Has first Name", function () {
            assert.equal("Ion",personObject.firstName);
        }),
        it("Has last Name", function () {
            assert.equal("Popescu",personObject.lastName);
        }),
        it("He is 38 age old", function () {
            const age = personObject.getAge();
            assert.equal(38, age);
        }),
        it("He is an adult", function () {
            assert.equal(true, personObject.isAdult());
        })
    })
});