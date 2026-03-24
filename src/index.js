import './styles/styles.css';
import Doctor from './departments/doctor.js';
import { SELECTOR } from './const.js';

const doctorRegistry = [];

const doctorListElement = document.querySelector(SELECTOR.DOCTOR_LIST);
const doctorCardTemplateElement = document.querySelector(SELECTOR.DOCTOR_CARD_TEMPLATE);

const printDoctorInfo = (doctor) => {
    console.log(`${doctor.surname} ${doctor.name} ${doctor.patronymic} is a ${doctor.specialty}, ${doctor.accolades}, who works at ${doctor.department}. DEBUG INFO: Employee ID = ${doctor.employeeID}`);
};

const addDoctor = (doctor) => {
    const newDoctor = new Doctor(doctor);
    doctorRegistry.push(newDoctor);
}; 

addDoctor({
    name: 'Ivan', 
    surname: 'Ivanov', 
    patronymic: 'Ivanovich', 
    specialty: 'Neurosurgeon', 
    accolades: 'Doctor of Medical Science', 
    department: 'Neurosurgery Department'
});

addDoctor({
    name: 'Petr',
    patronymic: 'Petrovich', 
    surname: 'Petrov', 
    department: 'Surgery Department',
    specialty: 'General Surgeon', 
    accolades: 'Candidate of Medical Science', 
});

addDoctor({
    name: 'Ivan', 
    surname: 'Ivanov', 
    patronymic: 'Ivanovich', 
    specialty: 'Neurosurgeon', 
    accolades: 'Doctor of Medical Science', 
    department: 'Neurosurgery Department'
});

addDoctor({
    name: 'Petr',
    patronymic: 'Petrovich', 
    surname: 'Petrov', 
    department: 'Surgery Department',
    specialty: 'General Surgeon', 
    accolades: 'Candidate of Medical Science', 
});addDoctor({
    name: 'Ivan', 
    surname: 'Ivanov', 
    patronymic: 'Ivanovich', 
    specialty: 'Neurosurgeon', 
    accolades: 'Doctor of Medical Science', 
    department: 'Neurosurgery Department'
});

addDoctor({
    name: 'Petr',
    patronymic: 'Petrovich', 
    surname: 'Petrov', 
    department: 'Surgery Department',
    specialty: 'General Surgeon', 
    accolades: 'Candidate of Medical Science', 
});addDoctor({
    name: 'Ivan', 
    surname: 'Ivanov', 
    patronymic: 'Ivanovich', 
    specialty: 'Neurosurgeon', 
    accolades: 'Doctor of Medical Science', 
    department: 'Neurosurgery Department'
});

addDoctor({
    name: 'Petr',
    patronymic: 'Petrovich', 
    surname: 'Petrov', 
    department: 'Surgery Department',
    specialty: 'General Surgeon', 
    accolades: 'Candidate of Medical Science', 
});

const createDoctorCardElement = (doctor) => {
    const newDoctorCardFragment = doctorCardTemplateElement.content.cloneNode(true);

    const newDoctorCardFioElement = newDoctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_FIO);
    newDoctorCardFioElement.textContent = `${doctor.surname} ${doctor.name} ${doctor.patronymic}`;

    const newDoctorCardSpecialtyElement = newDoctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_SPECIALTY);
    newDoctorCardSpecialtyElement.textContent = doctor.specialty;

    const newDoctorCardAccoladesElement = newDoctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_ACCOLADES);
    newDoctorCardAccoladesElement.textContent = doctor.accolades;

    return newDoctorCardFragment;
}

const renderDoctorList = (doctorList) => {
    doctorListElement.replaceChildren();

    const newFragment = new DocumentFragment();

    doctorList.forEach((doctor) => {
        const newDoctorCardElement = createDoctorCardElement(doctor);
        newFragment.append(newDoctorCardElement);
    })

    doctorListElement.append(newFragment);
};

console.log(doctorListElement);
console.log(doctorCardTemplateElement);

renderDoctorList(doctorRegistry);