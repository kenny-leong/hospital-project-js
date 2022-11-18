class User {
    constructor(name, mon, day, year) {
        this.name = name;
        this.mon = mon;
        this.day = day;
        this.year = year;
        this.birthday = new Date(this.year, this.mon - 1, this.day)
    }

    getBirthday() {
        const birthday = this.birthday.toDateString()
        return birthday
    }

    getAge() {
        const currentYear = 2022
        const currentMonth = 11;
        const currentDay = 18;
        const currentAge = currentYear - this.year;

        if (this.mon <= currentMonth && this.day <= currentDay) {
            return currentAge;
        } else {
            return currentAge - 1;
        }

    }

}



module.exports = User;
