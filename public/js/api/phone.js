// const API_URL = `https://mgrinko.github.io/js-20190426/api`;
const API_URL = `http://127.0.0.1:3000/api`;

export const getById = async (phoneId) => {
  const response = await fetch(`${API_URL}/phones/${phoneId}.json`);

  return response.json();
};

export const getAll = () => {
  return fetch(`${API_URL}/phones.json`)
    .then(res => res.json());
};
