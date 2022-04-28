const Manager = require("../lib/Manager")

describe("Emplyee", () => {
    describe("getRole", () => {
        it("Should return the string 'Manager'", () => {
            const newManager = new Manager("John", "01", "john.doe@gmail.com", "johndoe1", "room_1");
            const role = newManager.getRole();

            expect(role).toEqual("Manager");
        })
    })
})