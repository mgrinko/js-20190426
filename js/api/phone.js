'use strict';

export const getAll = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/v1/phones', false);
    xhr.send();
    return JSON.parse(xhr.responseText);
};

export const getById = (phoneId) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/v1/phone/${phoneId}`, false);
    xhr.send();
    return JSON.parse(xhr.responseText);
};
