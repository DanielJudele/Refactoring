var assert = require("assert");
var Person = require("../src/Encapsulation/Encapsulate collection/EncapsulateCollectionOriginal").Original;
var data = { firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 2020" };
var personObject = new Person(data);

describe("Encapsulate collection Original Code", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert(personObject);
        }),
            it("Has first Name", function () {
                assert.equal("Dan", personObject.firstName);
            }),
            it("Has last Name", function () {
                assert.equal("Popescu", personObject.lastName);
            })
    }),
        describe("Courses Test", function () {
            let coursesList = ['Math', "English", "Science"];
            personObject.courses = coursesList;
            it("Courses are set", function () {
                assert.notEqual(personObject.courses, null);
                assert.equal(personObject.courses.length, coursesList.length);
            })
        })
});