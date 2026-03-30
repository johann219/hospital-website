import { SELECTOR } from '../const.js';

let doctorCardTemplateElement = null;
let doctorListElement = null;

const init = (templateElement, listElement) => {
    doctorCardTemplateElement = templateElement;
    doctorListElement = listElement;
};

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

export const departmentView = {
    init,
    renderDoctorList,
}