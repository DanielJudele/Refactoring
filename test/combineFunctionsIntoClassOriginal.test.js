var assert = require("assert");
var Object = require("../src/Combine Functions into Class/combineFunctionsIntoClassOriginal.js");

var personObject = new Object.Original.Person("Dan","Popescu", new Date(2002, 12, 01));
var addressObject = new Object.Original.Address("Route","66","New York","United States");
personObject.Income = 5000;
personObject.Expenses = 1500;

describe("Combine functions into Class", function () {
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
        }),
        it("Has income 5000", function () {
            assert.equal(5000,personObject.Income);
        }),
        it("Has expenses 1500", function () {
            assert.equal(1500,personObject.Expenses);
        }),
        it("Has overall balance 3500", function () {
            assert.equal(3500,personObject.getBalance());
        })
    }),
    describe("Address Test", function () {
        personObject.Address = addressObject;
        it("Has street Name", function () {
            assert.equal("Route",personObject.Address.StreetName);
        })
        it("Has street Number", function () {
            assert.equal("66",personObject.Address.StreetNumber);
        }),
        it("Has town", function () {
            assert.equal("New York",personObject.Address.Town);
        }),
        it("Has country", function () {
            assert.equal("United States",personObject.Address.Country);
        })
    })
});