import { DOCTOR_SELECTOR, DEPT_SELECTOR } from './const.js';
import { Utils } from '../../../utils.js';
import departmentPageTemplateMarkup from './department-page.html';
import doctorCardTemplateMarkup from './doctor-card.html';

const departmentPageTemplate = Utils.parseHTML(departmentPageTemplateMarkup);
const doctorCardTemplate = Utils.parseHTML(doctorCardTemplateMarkup);

const populateDoctorPhoto = (doctorCardFragment, doctor) => {
    const doctorPhotoElement = doctorCardFragment.querySelector(DOCTOR_SELECTOR.DOCTOR_CARD_PHOTO);
    doctorPhotoElement.setAttribute('src', doctor.photoUrl);
    doctorPhotoElement.addEventListener('error', () => {
        doctorPhotoElement.setAttribute('src', '/images/doctor-placeholder.jpg');
    });
};

const populateDoctorFullName = (doctorCardFragment, doctor) => {
    const doctorFullNameElement = doctorCardFragment.querySelector(DOCTOR_SELECTOR.DOCTOR_CARD_FULLNAME);
    doctorFullNameElement.textContent = `${doctor.surname} ${doctor.name} ${doctor.patronymic}`;
};

const populateDoctorSpecialties = (doctorCardFragment, doctor) => {
    const doctorSpecialtiesElement = doctorCardFragment.querySelector(DOCTOR_SELECTOR.DOCTOR_CARD_SPECIALTY);
    const doctorSpecialties = Utils.capitalizeFirstLetter(doctor.specialties.join(', '))
    doctorSpecialtiesElement.textContent = doctorSpecialties;
};

const populateDoctorAccolades = (doctorCardFragment, doctor) => {
    const doctorAccoladesElement = doctorCardFragment.querySelector(DOCTOR_SELECTOR.DOCTOR_CARD_ACCOLADES);
    const doctorAccolades = Utils.capitalizeFirstLetter(doctor.accolades.join(', '));
    doctorAccoladesElement.textContent = doctorAccolades;
};

const createDoctorCardElement = (doctor) => {
    const doctorCardFragment = doctorCardTemplate.cloneNode(true);
    
    populateDoctorPhoto(doctorCardFragment, doctor);
    populateDoctorFullName(doctorCardFragment, doctor);
    populateDoctorSpecialties(doctorCardFragment, doctor);
    populateDoctorAccolades(doctorCardFragment, doctor);

    return doctorCardFragment;
}

const createDoctorCardWrapper = (doctorCard) => {
    const doctorCardWrapper = document.createElement('li');
    doctorCardWrapper.classList.add('doctor-card-wrapper');
    doctorCardWrapper.append(doctorCard);
    return doctorCardWrapper;
};

const appendDoctorList = (departmentPageFragment, department, doctorList) => {
    const newFragment = new DocumentFragment();

    const departmentRoster = department.staffRoster;

    departmentRoster.forEach ((departmentDoctorId) => {
        const departmentDoctor = doctorList.find((doctor) => doctor.id === departmentDoctorId);
        const departmentDoctorCard = createDoctorCardElement(departmentDoctor);

        const wrappedDoctorCard = createDoctorCardWrapper(departmentDoctorCard);
        
        newFragment.append(wrappedDoctorCard);
    });

    departmentPageFragment.querySelector('.department-doctors-list').append(newFragment);
};
    
const populateDepartmentName = (departmentPageFragment, department) => {
    const departmentName = departmentPageFragment.querySelector(DEPT_SELECTOR.DEPT_NAME);
    departmentName.textContent = department.name;
};

const populateDepartmentDescription = (departmentPageFragment, department) => {
    const newFragment = new DocumentFragment();

    department.description.forEach((descriptionPara) => {
        const newDescriptionPara = document.createElement('p');
        newDescriptionPara.textContent = descriptionPara;
        newFragment.append(newDescriptionPara);
    });

    departmentPageFragment.querySelector(DEPT_SELECTOR.DEPT_DESC).append(newFragment);
};

const appendDepartmentHead = (departmentPageFragment, department, doctorList) => {
    const departmentHead = doctorList.find((doctor) => doctor.id === department.head);

    const departmentHeadCard = createDoctorCardElement(departmentHead);
    departmentHeadCard.firstElementChild.classList.add('department-head-card');

    departmentPageFragment.querySelector(DEPT_SELECTOR.DEPT_HEAD_WRAP).append(departmentHeadCard);
};

const renderDepartmentPage = (renderTarget, department, doctorList) => {
    renderTarget.replaceChildren();
    
    console.log(renderTarget);

    const departmentPageFragment = departmentPageTemplate.cloneNode(true);

    populateDepartmentName(departmentPageFragment, department);
    populateDepartmentDescription(departmentPageFragment, department);
    appendDepartmentHead(departmentPageFragment, department, doctorList);
    appendDoctorList(departmentPageFragment, department, doctorList);

    renderTarget.append(departmentPageFragment);
};

export const departmentView = {
    renderDepartmentPage,
}