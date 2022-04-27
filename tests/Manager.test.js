const Shape = require("./Employee")

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber
        this.role = "Manager"
    }

    getRole () {
        return this.role;
    }
}