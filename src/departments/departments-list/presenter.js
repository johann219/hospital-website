import { departmentsListModel } from './model.js';
import { departmentsListView } from './view.js';

const initDepartmentsList = async (renderTarget) => {
    const departmentsList = await departmentsListModel.hydrateDepartmentsData();

    departmentsListView.renderDepartmentsList(renderTarget, departmentsList);
};

export const departmentsListPresenter = {
    initDepartmentsList,
}