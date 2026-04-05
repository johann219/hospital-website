import Department from './department.js';

const fetchDepartmentsData = async () => {
    const response = await fetch('/departmentsData.json');
    const departmentsData = await response.json();

    return departmentsData;
};

const hydrateDepartmentsData = async () => {
    const plainDepartmentsList = await fetchDepartmentsData();
    const departmentsList = plainDepartmentsList.map((plainDepartmentObject) => new Department(plainDepartmentObject));

    return departmentsList;
};

export const departmentsListModel = {
    hydrateDepartmentsData,
}