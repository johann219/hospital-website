export default class Doctor {
    constructor ( {name, surname, patronymic, specialty, accolades, department} ) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.specialty = specialty;
        this.accolades = accolades;
        this.department = department;
        this.employeeID = crypto.randomUUID();
    }
}