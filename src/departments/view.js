import { SELECTOR } from '../const.js';
import { Utils } from '../../utils.js';

let doctorCardTemplateElement = null;
let doctorListElement = null;

const init = (templateElement, listElement) => {
    doctorCardTemplateElement = templateElement;
    doctorListElement = listElement;
};

const createDoctorPhotoElement = (doctorCardFragment, doctor) => {
    const doctorPhotoElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_PHOTO);
    doctorPhotoElement.setAttribute('src', doctor.photoUrl);
    doctorPhotoElement.addEventListener('error', () => {
        doctorPhotoElement.setAttribute('src', '/images/doctor-placeholder.jpg');
    });
};

const createDoctorFullNameElement = (doctorCardFragment, doctor) => {
    const doctorFullNameElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_FULLNAME);
    doctorFullNameElement.textContent = `${doctor.surname} ${doctor.name} ${doctor.patronymic}`;
};

const createDoctorSpecialtiesElement = (doctorCardFragment, doctor) => {
    const doctorSpecialtiesElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_SPECIALTY);
    const doctorSpecialties = Utils.capitalizeFirstLetter(doctor.specialties.join(', '))
    doctorSpecialtiesElement.textContent = doctorSpecialties;
};

const createDoctorAccoladesElement = (doctorCardFragment, doctor) => {
    const doctorAccoladesElement = doctorCardFragment.querySelector(SELECTOR.DOCTOR_CARD_ACCOLADES);
    const doctorAccolades = Utils.capitalizeFirstLetter(doctor.accolades.join(', '));
    doctorAccoladesElement.textContent = doctorAccolades;
};

const createDoctorCardElement = (doctor) => {
    const doctorCardFragment = doctorCardTemplateElement.content.cloneNode(true);
    
    createDoctorPhotoElement(doctorCardFragment, doctor);

    createDoctorFullNameElement(doctorCardFragment, doctor);

    createDoctorSpecialtiesElement(doctorCardFragment, doctor);

    createDoctorAccoladesElement(doctorCardFragment, doctor);

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

export const departmentView = {
    init,
    renderDoctorList,
}