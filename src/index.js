import './sass/main.scss';

// const randomNum = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };

// const rundomNumberPromis = (min, max) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.3) resolve(randomNum(min, max));
//       else reject('ERROR');
//     }, randomNum(1000, 3000));
//   });
// };

// rundomNumberPromis(1, 10)
//   .then(num => {
//     console.log('');
//     console.log(num);
//     console.log('');
//   })
//   .catch(err => console.log(`Oops - ${err}`));

// rundomNumberPromis(1, 10)
//   .then(num => rundomNumberPromis(1, 10).then(num2 => num2 + num))
//   .then(num => rundomNumberPromis(1, 10).then(num2 => num2 + num))
//   .then(num => rundomNumberPromis(1, 10).then(num2 => num2 + num))
//   .then(num => console.log(num))
//   .catch(err => console.log(`Opps - ${err}`));

// const arrPromises = [];

// for (let i = 0; i < 10; i++) {
//   arrPromises.push(rundomNumberPromis(1, 10));
// }

// console.log(arrPromises);

// Promise.all(arrPromises).then(promisses =>
//   console.log(promisses.reduce((acc, item) => acc + item, 0)),
// );

const BASEURL = 'https://rickandmortyapi.com/api';

const menuRef = document.querySelector('#menu');

const getDataServer = (url = '/') => {
  return fetch(BASEURL + url).then(response => response.json());
};

getDataServer().then(data => renderMarkup(data));

const markupLink = ([text, href]) => `<a href="${href}">${text}</a>`;

const renderMarkup = obj => {
  const markup = Object.entries(obj).map(markupLink).join('');
  menuRef.innerHTML = markup;
};

document.addEventListener('click', e => {
  if (e.target.tagName !== 'A') return false;
  e.preventDefault();
  getDataServer(e.target.getAttribute('href').then(data => console.log(data)));
});

// const markupLink = ([text, href]) => `<a href="${href.slice(BASE_URL.length)}">${text}</a>`;

// const renderMarkup = obj => {
//   const markup = Object.entries(obj).map(markupLink).join('');
//   refs.menu.innerHTML = markup;
// };

// document.addEventListener('click', e => {
//   if (e.target.tagName !== 'A') return false;
//   e.preventDefault();
//   getDataServer(e.target.getAttribute('href')).then(data => console.log(data));
// });
