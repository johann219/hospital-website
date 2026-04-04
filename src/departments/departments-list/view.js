import { Utils } from '../../../utils.js';
import { DEPT_TYPE_SELECTOR, DEPT_ITEM_SELECTOR } from './const.js';
import departmentsListPageMarkup from './departments-list-page.html';
import departmentsListItemMarkup from './departments-list-item.html'

const departmentsListPageTemplate = Utils.parseHTML(departmentsListPageMarkup);
const departmentsListItemTemplate = Utils.parseHTML(departmentsListItemMarkup);

const renderDepartmentsList = (renderTarget, departmentsList) => {
    const departmentsListPage = departmentsListPageTemplate.cloneNode(true);

    departmentsList.forEach((departmentObject) => {
        const departmentsListItem = departmentsListItemTemplate.cloneNode(true);
        const deptLink = departmentsListItem.querySelector('.dept-link');
        
        deptLink.textContent = departmentObject.name;
        deptLink.setAttribute('data-dept-id', departmentObject.id);
        deptLink.setAttribute('href', `/departments/${departmentObject.id}`);
        
        const targetList = departmentsListPage.querySelector(`[data-depttype="${departmentObject.type}"]`)

        if (targetList) {
            targetList.append(departmentsListItem);
        } else {
            console.warn(`Could not find a list for department type: ${departmentObject.type}`);
        }
    });

    renderTarget.append(departmentsListPage);
};

export const departmentsListView = {
    renderDepartmentsList,
};