import './styles/styles.css';
import { GLOBAL_SELECTOR, ROUTE } from './const.js';
import { departmentsListPresenter } from './departments/departments-list/presenter.js';
// import { homePresenter } from './home/presenter.js';
// import { educationPresenter } from './education/presenter.js';
// import { newsPresenter } from './news/presenter.js';

const routerView = document.querySelector(GLOBAL_SELECTOR.ROUTER_VIEW);
const siteNav = document.querySelector(GLOBAL_SELECTOR.SITE_NAV);

const clearRouterView = () => {
    routerView.replaceChildren();
};

siteNav.addEventListener('click', (evt) => {
    const navLink = evt.target.closest(GLOBAL_SELECTOR.NAV_LINK);

    if (!navLink) {
        return;
    }
    
    evt.preventDefault();
    clearRouterView();

    const route = evt.target.dataset.route;
    
    switch(route) {
        case ROUTE.HOME:
            //homePresenter.init();
            console.log('Clicked Home navigation link');
            break;
        case ROUTE.DEPT:
            departmentsListPresenter.initDepartmentsList(routerView);
            console.log('Clicked Departments navigation link');
            break;
        case ROUTE.EDU:
            //educationPresenter.init();
            console.log('Clicked Education navigation link');
            break;
        case ROUTE.NEWS:
            //homePresenter.init();
            console.log('Clicked News navigation link');
            break;
    }
});

//homePresenter.init();
console.log('App booted: Defaulting to Home');