var assert = require("assert");
var Person = require("../src/Encapsulation/Substitute Algorithm/SubstituteAlgorithmOriginal").Original;
var data = {firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 2020"};
var personObject = new Person(data);
let coursesList = ['Math', "English", "Science"];
personObject.courses = coursesList;

describe("Substitute Algorithm Original Tests", function () {
    describe("Constructor Test", function () {
        it("Object is created", function () {
            assert(personObject);
        }),
        it("Has first Name", function () {
            assert.equal("Dan",personObject.firstName);
        }),
        it("Has last Name", function () {
            assert.equal("Popescu",personObject.lastName);
        })
    }),
    describe("Courses Test", function () {
        it("Courses are set", function () {
            assert.notEqual(personObject.courses, null);
            assert.equal(personObject.courses.length, coursesList.length);
        }),
        it("Courses find index", function () {
            assert.notEqual(personObject.courses, null);
            for(var i=0; i< coursesList.length; i++){
                assert.equal(personObject.findCourseIndex(coursesList[i]), i);
            }
        })
    })
});