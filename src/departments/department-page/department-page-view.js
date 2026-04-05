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

const renderDoctorList = (departmentPageFragment, department, doctorList) => {
    const newFragment = new DocumentFragment();

    const departmentRoster = department.staffRoster;

    departmentRoster.forEach ((departmentDoctorId) => {
        const departmentDoctor = doctorList.find((doctor) => doctor.id === departmentDoctorId);
        const departmentDoctorCardElement = createDoctorCardElement(departmentDoctor);

        newFragment.append(departmentDoctorCardElement);
    });

    departmentPageFragment.querySelector('.main-content').append(newFragment);
};
    
const createDepartmentName = (departmentPageFragment, department) => {
    const departmentName = departmentPageFragment.querySelector(DEPT_SELECTOR.DEPT_NAME);
    departmentName.textContent = department.name;
};

const createDepartmentDescription = (departmentPageFragment, department) => {
    const newFragment = new DocumentFragment();

    department.description.forEach((descriptionPara) => {
        const newDescriptionPara = document.createElement('p');
        newDescriptionPara.textContent = descriptionPara;
        newFragment.append(newDescriptionPara);
    });

    departmentPageFragment.querySelector(DEPT_SELECTOR.DEPT_DESC).append(newFragment);
};

const renderDepartmentHead = (departmentPageFragment, department, doctorList) => {
    const departmentHead = doctorList.find((doctor) => doctor.id === department.head);

    const departmentHeadCard = createDoctorCardElement(departmentHead);
    departmentHeadCard.firstElementChild.classList.add('department-head-card');

    departmentPageFragment.querySelector(DEPT_SELECTOR.DEPT_HEAD_WRAP).append(departmentHeadCard);
};

const renderDepartmentPage = (renderTarget, department, doctorList) => {
    renderTarget.replaceChildren();
    
    console.log(renderTarget);

    const departmentPageFragment = departmentPageTemplate.cloneNode(true);

    createDepartmentName(departmentPageFragment, department);
    createDepartmentDescription(departmentPageFragment, department);
    renderDepartmentHead(departmentPageFragment, department, doctorList);
    renderDoctorList(departmentPageFragment, department, doctorList);

    renderTarget.append(departmentPageFragment);
};

export const departmentView = {
    renderDepartmentPage,
}