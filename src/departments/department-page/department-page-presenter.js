import { departmentModel } from './department-page-model.js';
import { departmentView } from './department-page-view.js';

const initDepartmentPage = async (renderTarget, department) => {
    const doctorList = await departmentModel.hydrateDoctorsData();

    departmentView.renderDepartmentPage(renderTarget, department, doctorList);
};

export const departmentPresenter = {
    initDepartmentPage,
}