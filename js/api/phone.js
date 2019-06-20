
const BASE_URL = 'https://mgrinko.github.io/js-20190221/api';

export const getById = (phoneId) => {
  return fetch(`${BASE_URL}/phones/${phoneId}.json`)
    .then(response => response.json())
    .catch(() => 0)
};

export const getAll = () => {
  return fetch(`${BASE_URL}/phones.json`)
    .then(response => response.json())
};
