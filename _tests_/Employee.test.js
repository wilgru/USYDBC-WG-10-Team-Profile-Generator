const Employee = require("../lib/Employee")

describe("Emplyee", () => {
    describe("getName", () => {
        it("Should return a string of the Employee's name", () => {
            const newEmployee = new Employee("John", "01", "john.doe@gmail.com");
            const name = newEmployee.getName();

            expect(name).toEqual("John");
        })
    })
    describe("getId", () => {
        it("Should return a string of the Employee's id", () => {
            const newEmployee = new Employee("John", "01", "john.doe@gmail.com");
            const id = newEmployee.getId();

            expect(id).toEqual("01");
        })
    })
    describe("getEmail", () => {
        it("Should return a string of the Employee's email", () => {
            const newEmployee = new Employee("John", "01", "john.doe@gmail.com");
            const email = newEmployee.getEmail();

            expect(email).toEqual("john.doe@gmail.com");
        })
    })
    describe("getRole", () => {
        it("Should return the string 'Employee'", () => {
            const newEmployee = new Employee("John", "01", "john.doe@gmail.com");
            const role = newEmployee.getRole();

            expect(role).toEqual("Employee");
        })
    })
})

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'