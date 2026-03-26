export default class Doctor {
    constructor ( {name, surname, patronymic, specialty, accolades, department, photoAddress, hasAppointments, isDepartmentHead} ) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.specialty = specialty;
        this.accolades = accolades;
        this.department = department;
        this.photoAddress = photoAddress;
        this.hasAppointments = hasAppointments;
        this.isDepartmentHead = isDepartmentHead;
        this.employeeID = crypto.randomUUID();
    }
}