const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeId) {
        super(name, id, email);
        this.officeId = officeId;
        this.role = "Manager";
    }

    getRole () {
        return this.role;
    }
}

module.exports = Manager;