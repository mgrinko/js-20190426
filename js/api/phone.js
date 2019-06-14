

export const getById = (phoneId) => {
  return fetch(`https://mgrinko.github.io/js-20190426/api/phones/${phoneId}.json`)
    .then(res => res.json());
};

export const getAll = () => {
  return fetch('https://mgrinko.github.io/js-20190426/api/phones.json')
    .then(res => res.json());
};
