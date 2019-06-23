// const API_URL = 'https://mgrinko.github.io/js-20190426/api'
const API_URL = 'http://127.0.0.1:3000/api'

export const getById = async (phoneId) => {
  let response = await fetch(`${API_URL}/phones/${phoneId}.json`);
  return response.json()
};

export const getAll = async (params) => {
  let response = await fetch(`${API_URL}/phones.json?query=${params.query}&sortField=${params.sortField}`);
  let phones = await response.json();
  let normalizeQuery = params.query.toLowerCase();
  let key = params.sortField;

  return phones
    .filter(
      phone => phone.name.toLowerCase().includes(normalizeQuery)
    )
    .sort((phoneA, phoneB) => {
      return phoneA[key] > phoneB[key] ? 1 : -1;
    });
};
