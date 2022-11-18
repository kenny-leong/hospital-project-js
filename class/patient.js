const User = require('./user.js')





class Patient extends User {
    constructor(name, mon, day, year) {
        super(name, mon, day, year);
        this.birthday = new Date(this.year, this.mon - 1, this.day)
        this.insurance = null;
    }

    setInsurance(insurance) {
        if (this.insurance == null) {
            this.insurance = insurance
        } else {
            this.insurance = insurance;
        }
    }

    getInsurance() {
        return this.insurance;
    }

}




module.exports = Patient;
