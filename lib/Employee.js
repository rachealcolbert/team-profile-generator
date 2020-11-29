class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        if (this.id >= 0) {
            return true;
        }
        return false;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

};

module.exports = Employee;