const Intern = require("../lib/Intern")

describe("Emplyee", () => {
    describe("getSchool", () => {
        it("Should return a string of the Intern's school", () => {
            const newIntern = new Intern("John", "01", "john.doe@gmail.com", "johndoe1", "Test College");
            const school = newIntern.getschool();

            expect(school).toEqual("Test College");
        })
    })
    describe("getRole", () => {
        it("Should return the string 'Intern'", () => {
            const newIntern = new Intern("John", "01", "john.doe@gmail.com", "johndoe1", "Test College");
            const role = newIntern.getRole();

            expect(role).toEqual("Intern");
        })
    })
})