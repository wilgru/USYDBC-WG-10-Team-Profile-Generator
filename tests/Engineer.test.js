const Engineer = require("../lib/Engineer")

describe("Emplyee", () => {
    describe("getGithub", () => {
        it("Should return a string of the Engineer's github", () => {
            const newEngineer = new Engineer("John", "01", "john.doe@gmail.com", "johndoe1");
            const github = newEngineer.getGithub();

            expect(github).toEqual("johndoe1");
        })
    })
    describe("getRole", () => {
        it("Should return the string 'Engineer'", () => {
            const newEngineer = new Engineer("John", "01", "john.doe@gmail.com", "johndoe1");
            const role = newEngineer.getRole();

            expect(role).toEqual("Engineer");
        })
    })
})