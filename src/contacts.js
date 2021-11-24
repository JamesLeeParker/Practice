const BASE_URL = 'http://localhost:3000/contacts';

const ulRef = document.querySelector('#contacts');
const formRef = document.querySelector('form');

async function init() {
  // const res = (await reqServer());
  renderContacts(await reqServer());

  formRef.addEventListener('submit', onCreateData);
  ulRef.addEventListener('click', deleteCard);
}

const reqServer = async (url = '/', method = 'GET', data = {}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  if (method !== 'GET' && data) options.body = JSON.stringify(data);
  const res = await fetch(BASE_URL + url, options);
  return res.json(res);
};

const createMarkup = ({ name, lname, email, phone, age, id }) => {
  return `<li data-id="${id}"> 
    <p>Name: ${name}</p>
    <p>Last name: ${lname}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Age: ${age}</p>
    <button type="button" data-action='edit'>Edit</button>
    <button type="button" data-action='del'>Delete</button>
    </li>
    `;
};

const renderContacts = contacts => {
  ulRef.innerHTML = contacts.map(createMarkup).join('');
};

async function onCreateData(e) {
  e.preventDefault();
  const { name, lname, email, phone, age } = e.currentTarget.elements;

  const obj = {
    name: name.value,
    lname: lname.value,
    email: email.value,
    phone: phone.value,
    age: age.value,
  };

  if (!formRef.elements.id.value) {
    const data = await reqServer('/', 'POST', obj);
    ulRef.insertAdjacentHTML('beforeend', createMarkup(data));
  } else {
    const data = await reqServer(`/${formRef.elements.id.value}`, 'PATCH', obj);
    ulRef.querySelector(`[data-id="${data.id}"]`).outerHTML = createMarkup(data);
  }

  // reqServer('/', 'POST', obj).then(data => {
  //   ulRef.insertAdjacentHTML('beforeend', createMarkup(data));
  // });
}

async function deleteCard(e) {
  if (e.target.tagName !== 'BUTTON') return;
  const liRef = e.target.closest('li');
  const id = Number(liRef.dataset.id);

  if (e.target.dataset.action === 'del') {
    await reqServer(`/${id}`, 'DELETE');

    liRef.remove();
  } else if (e.target.dataset.action === 'edit') {
    const data = await reqServer(`/${id}`);
    Object.entries(data).forEach(([key, value]) => {
      formRef.elements[key].value = value;
    });
  }
}

init();

//на каждый контакт добавить кнопку, по нажатию авто зап формы и по сабмиту происходит обновление, без перезагрузки и перерендериваем
