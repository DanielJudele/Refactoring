var assert = require("assert");
var Person = require("../src/Encapsulate collection/EncapsulateCollection");
var data = {firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 2020"};
var personObject = new Person(data);

describe("Encapsulate collection", function () {
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
        let coursesList = ['Math', "English", "Science"];
        coursesList.forEach(element => {
            personObject.addCourse(element);
        });
        it("Courses are set", function () {
            assert.notEqual(personObject.courses, null);
            assert.equal(personObject.courses.length, coursesList.length);
        }),
        it("Remove last course", function () {
            personObject.removeCourse(coursesList[2]);
            let index = personObject.findCourseIndex(coursesList[2]);
            assert.equal(personObject.courses.length, 2);
            assert.equal(index, -1);
        })
    })
});