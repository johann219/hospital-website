export default class Doctor {
    constructor ( {id, name, surname, patronymic, specialties, accolades, photoUrl, hasAppointments} ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.specialties = specialties;
        this.accolades = accolades;
        this.photoUrl = photoUrl;
        this.hasAppointments = hasAppointments;
    }
}