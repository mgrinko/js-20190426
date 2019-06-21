const API_URL = `https://mgrinko.github.io/js-20190426/api`;
// const API_URL = `http://127.0.0.1:3000/api`;

export const getById = async (phoneId) => {
  const response = await fetch(`${API_URL}/phones/${phoneId}.json`);

  return response.json();
};

export const getAll = (params) => {
  return fetch(`${API_URL}/phones.json?query=${params.query}&sortField=${params.sortField}`)
    .then(res => res.json())
    .then(phones => {
      const normalizedQuery = params.query.toLowerCase();
      const key = params.sortField;

      return phones
        .filter(
          phone => phone.name.toLowerCase().includes(normalizedQuery)
        )
        .sort((phoneA, phoneB) => {
          return phoneA[key] > phoneB[key] ? 1 : -1;
        });
    })
};
