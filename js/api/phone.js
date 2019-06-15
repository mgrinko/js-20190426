export const getById = (phoneId) => {
  return fetch(`https://mgrinko.github.io/js-20190426/api/phones/${phoneId}.json`)
  .then(response => response.json());
};

export const getAll = () => {
  return fetch('https://mgrinko.github.io/js-20190426/api/phones.json')
  .then(response => response.json());

};
