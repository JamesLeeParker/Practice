const BASE_URL = 'http://localhost:3000/contacts';

const ulRef = document.querySelector('#contacts');
const formRef = document.querySelector('form');

const reqServer = (url = '/', method = 'GET', data = {}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  if (method !== 'GET' && data) options.body = JSON.stringify(data);
  return fetch(BASE_URL + url, options).then(res => {
    return res.json();
  });
};

const createMarkup = ({ name, lname, email, phone, age, id }) => {
  return `<li data-id="${id}"> 
    <p>Name: ${name}</p>
    <p>Last name: ${lname}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Age: ${age}</p>
    </li>
    `;
};

const renderContacts = contacts => {
  ulRef.innerHTML = contacts.map(createMarkup).join('');
};

reqServer().then(res => renderContacts(res));

function onCreateData(e) {
  e.preventDefault();
  const { name, lname, email, phone, age } = e.currentTarget.elements;

  const obj = {
    name: name.value,
    lname: lname.value,
    email: email.value,
    phone: phone.value,
    age: age.value,
  };

  reqServer('/', 'POST', obj).then(data => {
    ulRef.insertAdjacentHTML('beforeend', createMarkup(data));
  });
}

formRef.addEventListener('submit', onCreateData);

// на каждій контакт добафить кнопку и при каждом сабмите добавить
