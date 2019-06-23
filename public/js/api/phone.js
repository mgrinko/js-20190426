const API_URL = 'https://mgrinko.github.io/js-20190426/api'

export const getById = async (phoneId) => {
  let response = await fetch(`${API_URL}/phones/${phoneId}.json`);
  return response.json()
};

export const getAll = async () => {
  let response = await fetch(`${API_URL}/phones.json`);
  return response.json()
};
