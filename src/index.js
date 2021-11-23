// import './sass/main.scss';

// const refs = {
//   menu: document.querySelector('#menu'),
//   characterList: document.querySelector('#character-list'),
//   pagination: document.querySelector('#pagination'),
// };

// const BASE_URL = 'https://rickandmortyapi.com/api';

// const getDataServer = (url = '/') => {
//   return fetch(BASE_URL + url).then(response => response.json());
// };

// document.addEventListener('click', e => {
//   if (e.target.tagName !== 'A') return false;
//   const link = e.target;
//   e.preventDefault();
//   if (link.dataset.info === 'characters') {
//     getDataServer(e.target.getAttribute('href')).then(({ results, info }) => {
//       renderPagination(info);
//       renderMarkupCharacter(results);
//     });
//   }
//   getDataServer(e.target.getAttribute('href')).then(data => console.log(data));
// });

// getDataServer().then(data => renderMarkup(data));

// const markupLink = ([text, href]) =>
//   `<a data-info="${text}" href="${href.slice(BASE_URL.length)}">${text}</a>`;

// const renderMarkup = obj => {
//   const markup = Object.entries(obj).map(markupLink).join('');
//   refs.menu.innerHTML = markup;
// };

// const markupCharacter = ({
//   id,
//   name,
//   status,
//   species,
//   gender,
//   location,
//   image,
//   created,
//   episode,
// }) => `<li class="item-base-info" data-id="${id}">
//   <div class="wrapper-img"><img src="${image}" alt="${name}" /></div>
//   <div class="wrapper-text">
//     <h3>Name: ${name}</h3>
//     <p>Species: ${species}</p>
//     <p>Location: ${location.name}</p>
//     <p>Gender: ${gender}</p>
//     <p>Status: ${status}</p>
//     <p>Created: ${createDate(created)}</p>
//     <p>Episodes: ${episode.length}</p>
//   </div>
// </li>`;

// const renderMarkupCharacter = array => {
//   const markup = array.map(markupCharacter).join('');
//   refs.characterList.innerHTML = markup;
// };

// const createDate = dateInfo => {
//   const date = new Date(dateInfo);

//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDate().toString().padStart(2, '0');
//   const hours = date.getHours().toString().padStart(2, '0');
//   const minuts = date.getMinutes().toString().padStart(2, '0');
//   const seconds = date.getSeconds().toString().padStart(2, '0');
//   return `${day}.${month}.${year}  ${hours}:${minuts}:${seconds}`;
// };

// const renderPagination = info => {
//   let markup = '';
//   let currentPage = 1;
//   if (info.prev) {
//     currentPage = Number(info.prev.slice(info.prev.indexOf('=') + 1)) + 1;
//     console.log('✈️ ~ currentPage', currentPage);
//     markup += `<a data-info="characters" href="${info.prev.slice(BASE_URL.length)}"><-</a>`;
//   }
//   for (let i = 0; i <= info.pages; i++) {
//     markup += `<a class="${
//       currentPage === i ? 'active' : ''
//     }" data-info="characters" href="/character?page=${i}"> ${i} </a>`;
//   }
//   if (info.next)
//     markup += `<a data-info="characters" href="${info.next.slice(BASE_URL.length)}">-></a>`;
//   refs.pagination.innerHTML = markup;
// };
