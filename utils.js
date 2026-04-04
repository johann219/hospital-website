const capitalizeFirstLetter = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
};

const parseHTML = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const fragment = document.createDocumentFragment();

    while (doc.body.firstChild) {
        fragment.append(doc.body.firstChild);
    }

    return fragment;
};

export const Utils = {
    capitalizeFirstLetter,
    parseHTML,
}