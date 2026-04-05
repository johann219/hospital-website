import { Utils } from '../../../utils.js';
import departmentsListPageMarkup from './departments-list-page.html';
import departmentsListItemMarkup from './departments-list-item.html'

const deptsListPageTemplate = Utils.parseHTML(departmentsListPageMarkup);
const deptsListItemTemplate = Utils.parseHTML(departmentsListItemMarkup);

const bindDeptClick = (renderTarget, callback) => {
    renderTarget.addEventListener('click', (evt) => {
        const deptLink = evt.target.closest('.dept-link');

        evt.preventDefault();

        if (!deptLink) return;

        callback(deptLink.dataset.deptId);
    });
};

const renderDeptsList = (renderTarget, deptsList) => {
    const deptsListPage = deptsListPageTemplate.cloneNode(true);

    deptsList.forEach((deptObject) => {
        const deptsListItem = deptsListItemTemplate.cloneNode(true);
        const deptLink = deptsListItem.querySelector('.dept-link');
        
        deptLink.textContent = deptObject.name;
        deptLink.setAttribute('data-dept-id', deptObject.id);
        deptLink.setAttribute('href', `/depts/${deptObject.id}`);

        const targetList = deptsListPage.querySelector(`[data-depttype="${deptObject.type}"]`)

        if (targetList) {
            targetList.append(deptsListItem);
        } else {
            console.warn(`Could not find a list for dept type: ${deptObject.type}`);
        }
    });

    renderTarget.append(deptsListPage);
};

export const departmentsListView = {
    renderDeptsList,
    bindDeptClick,
};