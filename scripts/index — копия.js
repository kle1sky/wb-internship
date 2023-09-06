// Если ширина экрана 688 пикселей убрать класс smaller в итеме

let cartArray = [{
  img: './img/item.webp',
  name: 'Футболка UZcotton мужская',
  feature: {
    color: "белый",
    size: 56,
  },
  price: 1051,
  sale: 522,
  left: 2,
  isFavorite: false,
  seller: 'OOO Вайлдберриз',
  stock: 'Коледино WB',
  isSelected: false,
  quantity: 1,
  isEmpty: false
}, {
  img: './img/item2.webp',
  name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
  feature: {
    color: "прозрачный",
    size: false,
  },
  price: 1150000,
  sale: 1050000,
  left: 999,
  isFavorite: false,
  seller: 'OOO Мегапрофстиль',
  stock: 'Коледино WB',
  isSelected: false,
  quantity: 1,
  isEmpty: false
}, {
  img: './img/item3.webp',
  name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
  feature: false,
  color: false,
  size: false,
  price: 9500,
  sale: 4940,
  left: 100,
  isFavorite: false,
  seller: 'OOO Вайлдберриз',
  stock: 'Коледино WB',
  isSelected: false,
  quantity: 3,
  isEmpty: false
}]

let outStockArray = [{
    img: './img/missing__item.webp',
    name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    feature: false,
    color: false,
    size: false,
    price: 9500,
    sale: 4940,
    left: 100,
    isFavorite: false,
    seller: '',
    stock: '',
    isSelected: false,
    quantity: 3,
    isEmpty: true
  }, {
    img: './img/missing__item2.webp',
    name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    feature: false,
    color: false,
    size: false,
    price: 9500,
    sale: 4940,
    left: 100,
    isFavorite: false,
    seller: '',
    stock: '',
    isSelected: false,
    quantity: 3,
    isEmpty: true
  },
  {
    img: './img/missing__item3.webp',
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    feature: false,
    color: false,
    size: false,
    price: 9500,
    sale: 4940,
    left: 100,
    isFavorite: false,
    seller: '',
    stock: '',
    isSelected: false,
    quantity: 3,
    isEmpty: true
  }
]

const checkboxForAll = document.querySelector('#checkForAll');

const templateTask = (item) => {
  function numberWithSpaces(num) {
    const string = num.toString();
    if (string.length <= 4) {
      return string
    }
    return string.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  };

  //Проверка на ценник
  function priceNeeded(item) {
    if (item.isEmpty === false) {
      return `<span class="${item.sale.toString().length > 6 ? "price__sale smaller" : "price__sale"}">${numberWithSpaces(item.sale * item.quantity)} <p>сом</p></span>
              <span class="price__text">${numberWithSpaces(item.price * item.quantity)} сом </span>`
    } else {
      return ``
    }
  };

  //Проверка на счетчик
  function quantityNeeded(item) {
    if (item.isEmpty === false) {
      return `
    <div class="quantity__wrapper">
      <button ${item.quantity <= 0 ? "disabled" : ""} class="quantity__button-minus">−</button>
      <span class="quantity__value">${item.quantity}</span>
      <button ${item.left <= 0 ? "disabled" : ""} class="quantity__button-plus">+</button>
    </div>
    `
    } else {
      return ``
    }
  }

  //Проверка на чекбокс
  function addCheckbox(item) {
    if (item.isEmpty === true) {
      return `
            <img src="${item.img}" alt="item-image" class="unordered-list__image">
            `
    } else {
      return `
        <label class="checkbox">
              <input ${item.isSelected ? 'checked' : ''} type="checkbox" />
              <span></span>
              <img
              src="${item.img}"
              alt="item-image"
              class="unordered-list__image"
            />
            </label>
        `
    }
  };

  const li = document.createElement('li');
  item.isEmpty === true ? li.classList.add("unordered-list__item", "unordered-list__item_missing") : li.classList.add('unordered-list__item');
  li.innerHTML = `
                ${addCheckbox(item)}
                <div class="description">
                  <h4 class="description__heading">
                    ${item.name}
                  </h4>
                  <div class="${item.feature === false ? 'feature feature__none' : 'feature'}">
                    <span class="${item.feature.color ? "feature__color" : "feature__color feature__none"}">Цвет: ${item.feature.color && item.feature.color}</span>
                    <span class="${item.feature.size ? "feature__size" : "feature__color feature__none"}">Размер: ${item.feature.size && item.feature.size} </span>
                  </div>
                  <div class="credits">
                    <span class="description__text-stock">${item.stock}</span>
                  <span class="description__text-seller"
                    >${item.seller}
                    <img src="./img/icons/info.svg" alt="info-icon" />
                  </span>
                  </div>
                </div>

                  <div class="quantity">
                    ${quantityNeeded(item)}
                    <span class="${item.left < 4 ? "quantity__last" : "quantity__last quantity__none"}">Осталось ${item.left} шт.</span>
                    <div class="quantity__icons">
                      <svg class="${item.isFavorite ? "favorite active" : "favorite"}" width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="icon-20">
                        <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34543 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/>
                        </g>
                      </svg>
                      
                        <svg class="trash-bin" width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="icon-20">
                          <g id="Vector">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="none"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="none"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="none"/>
                          </g>
                          </g>
                        </svg>
                    </div>
                  </div>

                  <div class="price">
                    ${priceNeeded(item)}
                  </div>
                  <div class="list__separator"></div>
    `;
  const index = cartArray.indexOf(item);
  const favorite = li.querySelector('.favorite');
  const trash = li.querySelector('.trash-bin');
  const checkbox = li.querySelector("input");
  const quantity = li.querySelector(".quantity__wrapper");
  const minus = quantity.querySelector(".quantity__button-minus");
  const plus = quantity.querySelector(".quantity__button-plus");

  //Добавление в избранное
  favorite.addEventListener('click', () => {
    cartArray[index].isFavorite = !cartArray[index].isFavorite;
    renderItems();
  })

  //Удаление из корзины
  trash.addEventListener('click', () => {
    cartArray.splice(index, 1);
    renderItems();
  })

  //Отмечаем выбранный товар
  if (checkbox) {
    checkbox.addEventListener('click', () => {
      cartArray[index].isSelected = !cartArray[index].isSelected;
      checkAll() ? checkboxForAll.checked = true : checkboxForAll.checked = false;
      renderItems();
    })
  }

  //Функции счетчика товара
  if (quantity) {
    minus.addEventListener('click', () => {
      if (cartArray[index].quantity <= 0) {
        return;
      }
      cartArray[index].quantity -= 1;
      cartArray[index].left += 1;
      renderItems();
    })

    plus.addEventListener('click', () => {
      if (cartArray[index].left === 0) {
        return;
      }
      cartArray[index].quantity += 1;
      cartArray[index].left -= 1;

      renderItems();
    })
  }

  return li;
}

//Функция проверки все ли товары выбраны
const checkAll = () => {
  return cartArray.every(item => item.isSelected);
}

//Функция рендера корзины
const renderItems = () => {
  const ul = document.querySelector('.unordered-list_cart');
  const emptyUl = document.querySelector('.unordered-list-missing');

  ul.innerHTML = '';
  emptyUl.innerHTML = '';

  cartArray.forEach(item => {
    ul.append(templateTask(item));
  });

  outStockArray.forEach(item => {
    emptyUl.append(templateTask(item));
  })
}

//Функция чтобы отметить все товары
const markAll = () => {
  cartArray.forEach(item => {
    checkboxForAll.checked ? item.isSelected = true : item.isSelected = false
  });
  renderItems();
}

checkboxForAll.addEventListener('click', markAll);



renderItems();