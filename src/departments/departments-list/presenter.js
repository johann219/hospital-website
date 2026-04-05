import { departmentsListModel } from './model.js';
import { departmentsListView } from './view.js';
import { departmentPresenter } from '../department-page/presenter.js';

const handleDeptClick = (renderTarget, departmentsList, deptId) => {
    const departmentClicked = departmentsList.find((dept) => dept.id === deptId);
    renderTarget.replaceChildren();
    console.log(departmentClicked);
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