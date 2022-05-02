const Manager = require("../lib/Manager")

describe("Emplyee", () => {
    describe("getRole", () => {
        it("Should return the string 'Manager'", () => {
            const newManager = new Manager("John", "01", "john.doe@gmail.com", "room_1", "johndoe1");
            const role = newManager.getRole();

            expect(role).toEqual("Manager");
        })
    })

    describe("getOfficeNum", () => {
        it("Should return the string 'room_1'", () => {
            const newManager = new Manager("John", "01", "john.doe@gmail.com", "room_1", "johndoe1");
            const officeNum = newManager.getOfficeNum();

            expect(officeNum).toEqual("room_1");
        })
    })
})