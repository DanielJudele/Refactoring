var assert = require("assert");
var Object = require("../src/Moving Features/Move Field/moveField.js");
var personObject = new Object.Person("Dan","Popescu", new Date(2002, 12, 01));
var addressObject = new Object.Address("Route","66","New York","United States");

describe("Move Field", function () {
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
        it("He is 18 age old", function () {
            const age = personObject.getAge();
            assert.equal(18, age);
        }),
        it("He is not an adult", function () {
            assert.equal(true, personObject.isAdult());
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
        }),
        it("He is living abroad", function () {
            assert.equal(true, personObject.Address.IsLivingAbroad);
        })
    })
});