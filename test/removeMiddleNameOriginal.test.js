var assert = require("assert");
var Department = require("../src/Remove/Remove Middle Man/removeMiddleManOriginal").Department;
var Person = require("../src/Remove/Remove Middle Man/removeMiddleManOriginal").Person;

var department = new Department("Development");
var managerData = {firstName: "Dan", lastName: "Popescu", dateOfBirth: "6th November 1990"};
var manager = new Person(managerData);
department.manager = manager;
 
var data = {firstName: "Vlad", lastName: "Stanescu", dateOfBirth: "6th November 2000"};
var employee = new Person(data);
employee.department = department;

describe("Remove Middle Man Original Code Tests", function () {
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
            assert.equal("Development",department.name);
        }),
        it("Department has manager", function () {
            assert(department.manager);
            assert.equal("Dan Popescu",department.manager.fullName);
        }),
        it("Employee Test", function () {
            assert(employee);            
            assert.equal("Vlad Stanescu",employee.fullName);
            assert.equal(department.name, employee.departmentName);
        })
        it("Employee has manager", function () {
            assert(employee.manager);
            assert.equal("Dan Popescu",employee.manager.fullName);
        })
    })
});