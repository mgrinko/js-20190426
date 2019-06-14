

export const getById = (phoneId) => {
  fetch(`https://mgrinko.github.io/js-20190426/api/phones/${phoneId}.json`)
    .then((data) => {
      console.log(data);
    });
};

export const getAll = () => {
  return fetch('https://mgrinko.github.io/js-20190426/api/phones.json')
    .then((res) => res.json());
};
