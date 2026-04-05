import './styles/styles.css';
import { GLOBAL_SELECTOR, ROUTE } from './const.js';
import { departmentsListPresenter } from './departments/departments-list/departments-list-presenter.js';
// import { homePresenter } from './home/presenter.js';
// import { educationPresenter } from './education/presenter.js';
// import { newsPresenter } from './news/presenter.js';

const routerView = document.querySelector(GLOBAL_SELECTOR.ROUTER_VIEW);
const siteNav = document.querySelector(GLOBAL_SELECTOR.SITE_NAV);

const clearRouterView = () => {
    routerView.replaceChildren();
};

siteNav.addEventListener('click', (evt) => {
    evt.preventDefault();
    const navLink = evt.target.closest(GLOBAL_SELECTOR.NAV_LINK);

    if (!navLink) return;
    
    clearRouterView();

    const route = evt.target.dataset.route;
    history.pushState({ route: route }, '', `/${route}`);

    switch(route) {
        case ROUTE.HOME:
            //homePresenter.init();
            //console.log('Clicked Home navigation link');
            break;
        case ROUTE.DEPT:
            departmentsListPresenter.initDepartmentsList(routerView);
            //console.log('Clicked Departments navigation link');
            break;
        case ROUTE.EDU:
            //educationPresenter.init();
            //console.log('Clicked Education navigation link');
            break;
        case ROUTE.NEWS:
            //homePresenter.init();
            //console.log('Clicked News navigation link');
            break;
    }
});

window.addEventListener('popstate', (evt) => {
    const state = evt.state;

    clearRouterView();
    
    if (!state) {
        //homePresenter.init();
        return;
    }

    if (state.route === 'departments') {
        departmentsListPresenter.initDepartmentsList(routerView);
    } else if (state.route === 'single-dept') {
        console.log(`User clicked back to department: ${state.id}`);
    } else if (state.route === 'home') {
        //homePresenter.init();
    }
});

//homePresenter.init();
console.log('App booted: Defaulting to Home');