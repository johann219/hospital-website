import './styles/styles.css';
import Doctor from './departments/doctor.js';
import { SELECTOR } from './const.js';

const doctorListElement = document.querySelector(SELECTOR.DOCTOR_LIST);
const doctorCardTemplateElement = document.querySelector(SELECTOR.DOCTOR_CARD_TEMPLATE);

const fetchDoctorsData = async () => {
    const response = await fetch('/doctorsData.json');
    const doctorsData = await response.json();

    return doctorsData;
};  

const initDoctorRegistry = async () => {
    const plainDoctorRegistry = await fetchDoctorsData();

    const doctorRegistry = plainDoctorRegistry.map((plainDoctorObject) => new Doctor(plainDoctorObject));

    console.log(doctorRegistry);
    
    return doctorRegistry;
};
// const createDoctorCardElement = (doctor) => {
//     const newDoctorCardFragment = doctorCardTemplateElement.content.cloneNode(true);

//     const newDoctorPhotoElement = 

//     const newDoctorCardFioElement = newDoctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_FIO);
//     newDoctorCardFioElement.textContent = `${doctor.surname} ${doctor.name} ${doctor.patronymic}`;

//     const newDoctorCardSpecialtyElement = newDoctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_SPECIALTY);
//     newDoctorCardSpecialtyElement.textContent = doctor.specialty;

//     const newDoctorCardAccoladesElement = newDoctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_ACCOLADES);
//     newDoctorCardAccoladesElement.textContent = doctor.accolades;

//     return newDoctorCardFragment;
// }

// const renderDoctorList = (doctorList) => {
//     doctorListElement.replaceChildren();

//     const newFragment = new DocumentFragment();

//     doctorList.forEach((doctor) => {
//         const newDoctorCardElement = createDoctorCardElement(doctor);
//         newFragment.append(newDoctorCardElement);
//     })

//     doctorListElement.append(newFragment);
// };

// console.log(doctorListElement);
// console.log(doctorCardTemplateElement);

// renderDoctorList(doctorRegistry);