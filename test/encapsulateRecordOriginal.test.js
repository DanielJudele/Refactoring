var assert = require("assert");
var personRecord = require("../src/Encapsulate Record/EncapsulateRecordOriginal").Original;

describe("Describe Record", function () {
    describe("Record Test", function () {
        it("Object is created", function () {
            assert(personRecord);
        }),
        it("Has first Name", function () {
            assert.equal("Dan",personRecord.firstName);
        }),
        it("Has last Name", function () {
            assert.equal("Popescu",personRecord.lastName);
        })
    })
});