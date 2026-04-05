import { departmentsListModel } from './departments-list-model.js';
import { departmentsListView } from './departments-list-view.js';
import { departmentPresenter } from '../department-page/department-page-presenter.js';

const handleDeptClick = (renderTarget, departmentsList, deptId) => {
    const departmentClicked = departmentsList.find((dept) => dept.id === deptId);
    departmentPresenter.initDepartmentPage(renderTarget, departmentClicked);
};

const initDepartmentsList = async (renderTarget) => {
    const departmentsList = await departmentsListModel.hydrateDepartmentsData();

    departmentsListView.renderDeptsList(renderTarget, departmentsList);

    departmentsListView.bindDeptClick(renderTarget, (id) => {
        handleDeptClick(renderTarget, departmentsList, id)
    });
};

export const departmentsListPresenter = {
    initDepartmentsList,
}