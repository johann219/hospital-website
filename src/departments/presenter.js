import { SELECTOR } from '../const.js';
import { departmentModel } from './model.js';
import { departmentView } from './view.js';

const doctorListElement = document.querySelector(SELECTOR.DOCTOR_LIST);
const doctorCardTemplateElement = document.querySelector(SELECTOR.DOCTOR_CARD_TEMPLATE);



const initDoctorRegistry = async () => {
    departmentView.init(doctorCardTemplateElement, doctorListElement);
    
    const doctorRegistry = await departmentModel.hydrateDoctorsData();

    departmentView.renderDoctorList(doctorRegistry);
};

export const departmentPresenter = {
    initDoctorRegistry,
}