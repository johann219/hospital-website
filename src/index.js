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

const hydrateDoctorsData = async () => {
    const plainDoctorRegistry = await fetchDoctorsData();
    const doctorRegistry = plainDoctorRegistry.map((plainDoctorObject) => new Doctor(plainDoctorObject));

    return doctorRegistry;
};

/**
* @param {Doctor} doctor
*/

const createDoctorCardElement = (doctor) => {
    const doctorCardFragment = doctorCardTemplateElement.content.cloneNode(true);

    const doctorPhotoElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_PHOTO);
    doctorPhotoElement.setAttribute('src', doctor.photoUrl);

    const doctorCardFioElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_FIO);
    doctorCardFioElement.textContent = `${doctor.surname} ${doctor.name} ${doctor.patronymic}`;

    const doctorCardSpecialtyElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_SPECIALTY);
    doctorCardSpecialtyElement.textContent = doctor.specialty;

    const doctorCardAccoladesElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_ACCOLADES);
    doctorCardAccoladesElement.textContent = doctor.accolades;

    return doctorCardFragment;
}

const renderDoctorList = (doctorList) => {
    doctorListElement.replaceChildren();

    const newFragment = new DocumentFragment();

    doctorList.forEach((doctor) => {
        const doctorCardElement = createDoctorCardElement(doctor);
        newFragment.append(doctorCardElement);
    })

    doctorListElement.append(newFragment);
};

const initDoctorRegistry = async () => {
    const plainDoctorRegistry = await fetchDoctorsData();
    const doctorRegistry = plainDoctorRegistry.map((plainDoctorObject) => new Doctor(plainDoctorObject));

    renderDoctorList(doctorRegistry);
};

initDoctorRegistry();