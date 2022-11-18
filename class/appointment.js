const Doctor = require('./doctor.js')
const Patient = require('./patient.js')


class AppointmentError extends Error {
    constructor(...params) {
        super(...params)

         // Maintains proper stack trace for where error was thrown
         if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AppointmentError);
        }

        // The name property should match the class's name
        this.name = 'AppointmentError';
    }
}


class Appointment {
    constructor(doctor, patient, month, date, year, hour) {
        this.doctor = doctor;
        this.patient = patient;
        this.month = month;
        this.date = date;
        this.year = year;
        this.hour = hour;
        this.apptTime = new Date (this.year, this.month, this.date, this.hour)
        this.apptString = this.apptTime.toString();
        this.allowedHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        this.today = new Date();

        // hours must be in the allowedHours array
        if (!(this.allowedHours.includes(this.hour))) {
            throw new AppointmentError ('Invalid time slot')
        }

        // appointments must be set in the future
        if (this.apptTime < this.today) {
            throw new AppointmentError ('Appointment must be in the future')
        }

        //patient does not have insurance
        if (this.patient.insurance == null) {
            throw new AppointmentError (`Patient's insurance not supported`)
        }

        //doctor does not accept patient's insurance
        if (!this.doctor.insurances.includes(this.patient.insurance)) {
            throw new AppointmentError (`Patient's insurance not supported`)
        }

        // finds any duplicate time slots
        const existingAppointments = this.doctor.appointments.filter(appointment =>
            appointment.apptString == this.apptString)

        // if any duplicates exist, throw an AppointmentError
        if (existingAppointments.length > 0) {
            throw new AppointmentError ('Invalid time slot')
        }

        //pushes the appointment to the doctor's appointments if no errors thrown
        this.doctor.appointments.push(this);
    }
}





// const doctor = new Doctor("Richard Kimble", 7, 13, 1942);
// doctor.addInsurance('BnL Insurance');

// const patient = new Patient("Laszlo de Almasy", 12, 22, 1962);
// patient.setInsurance('BnL Insurance');

// const today = new Date();

// const tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1)

// const yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1);

// const hour = 8;  // 8am
// const date = yesterday.getDate();
// const month = yesterday.getMonth(); // 0-indexed already
// const year = yesterday.getFullYear();



// const appointment = new Appointment(doctor, patient, month, date, year, hour);


// console.log(appointment.apptString)



module.exports = {
    Appointment,
    AppointmentError}
