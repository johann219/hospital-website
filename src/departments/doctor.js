export default class Doctor {
    constructor ( {name, surname, patronymic, specialty, accolades, department, photoUrl, hasAppointments, isDepartmentHead} ) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.specialty = specialty;
        this.accolades = accolades;
        this.department = department;
        this.photoUrl = photoUrl;
        this.hasAppointments = hasAppointments;
        this.isDepartmentHead = isDepartmentHead;
        this.employeeID = crypto.randomUUID();
    }
}