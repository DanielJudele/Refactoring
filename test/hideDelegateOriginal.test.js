var assert = require("assert");
var Department = require("../src/Encapsulation/Hide Delegate/hideDelegateOriginal").Department;
var Person = require("../src/Encapsulation/Hide Delegate/hideDelegateOriginal").Person;

var department = new Department("Development");
var managerData = {firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 1990"};
var manager = new Person(managerData);
department.manager = manager;
 
var data = {firstName: "Vlad", lastName: "Stanescu", dateOfBirth: "6th November 2000"};
var employee = new Person(data);
employee.department = department;

describe("Hide Delegate Original Tests", function () {
    describe("Constructor Test", function () {
        it("Department is created", function () {
            assert(department);
        }),
        it("Employee is created", function () {
            assert(employee);
        }),
        it("Department has a Name", function () {
            assert(department.name);
        }),
        it("Department has Development Name", function () {
            assert.equal("Development", department.name);
        }),
        it("Employee Test", function () {
            assert(employee);            
            assert.equal("Vlad Stanescu",employee.fullName);
            assert.equal(department.name, employee.department.name);
        })
        it("Employee has manager", function () {
            assert(employee.department.manager);
            assert.equal("Dan Popescu",employee.department.manager.fullName);
        })
    })
});