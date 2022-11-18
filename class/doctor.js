const User = require('./user.js')

class Doctor extends User {
    constructor(name, mon, day, year) {
        super(name, mon, day, year);
        this.birthday = new Date(this.year, this.mon - 1, this.day)
        this.appointments = [];
        this.insurances = [];
    }

    acceptsInsurance(insurance) {
        if (this.insurances.includes(insurance)) {
            return true;
        } else {
            return false;
        }
    }

    addInsurance(insurance) {
        if (this.acceptsInsurance(insurance) !== true) {
            this.insurances.push(insurance);
        }
    }

    removeInsurance(insurance) {
        if (this.acceptsInsurance(insurance)) {
            let index = this.insurances.indexOf(insurance);
            this.insurances.splice(index, 1);
        }
    }

}



module.exports = Doctor;
