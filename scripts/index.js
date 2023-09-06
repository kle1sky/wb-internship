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
  seller: {
    name: 'OOO Вайлдберриз',
    ogrn: 1067746062449,
    adress: '142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1'
  },
  stock: 'Коледино WB',
  isSelected: false,
  quantity: 1,
  shipping: [{
    amount: 10,
    date: "2023-02-05"
  }]
}, {
  img: './img/item2.webp',
  name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
  feature: {
    color: "прозрачный",
    size: false,
  },
  price: 11500.235,
  sale: 10500.235,
  left: 999,
  isFavorite: false,
  seller: {
    name: 'OOO Мегапрофстиль',
    ogrn: 5167746237148,
    adress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
  },
  stock: 'Коледино WB',
  isSelected: false,
  quantity: 200,
  shipping: [{
    amount: 10,
    date: "2023-02-05"
  }]
}, {
  img: './img/item3.webp',
  name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
  feature: false,
  color: false,
  size: false,
  price: 475,
  sale: 247,
  left: 2,
  isFavorite: false,
  seller: {
    name: 'OOO Вайлдберриз',
    ogrn: 1067746062449,
    adress: '142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1'
  },
  stock: 'Коледино WB',
  isSelected: false,
  quantity: 2,
  shipping: [{
      amount: 184,
      date: "2023-02-05"
    },
    {
      amount: 16,
      date: "2023-02-07"
    }
  ]
}]

let missingArray = [{
  img: './img/missing__item.webp',
  name: 'Футболка UZcotton мужская',
  feature: {
    color: "белый",
    size: 56,
  },
  isFavorite: false,
  seller: {
    name: 'OOO Вайлдберриз',
    ogrn: 1067746062449,
    adress: '142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1'
  },
  stock: 'Коледино WB',
  isSelected: false,
}, {
  img: './img/missing__item2.webp',
  name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
  feature: {
    color: "прозрачный",
    size: false,
  },
  isFavorite: false,
  seller: {
    name: 'OOO Мегапрофстиль',
    ogrn: 5167746237148,
    adress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
  },
  stock: 'Коледино WB',
  isSelected: false,
}, {
  img: './img/missing__item3.webp',
  name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
  feature: false,
  color: false,
  size: false,
  isFavorite: false,
  seller: {
    name: 'OOO Вайлдберриз',
    ogrn: 1067746062449,
    adress: '142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1'
  },
  stock: 'Коледино WB',
  isSelected: false
}]

let shippingCourier = [{
    adress: "Бишкек, улица Табышалиева, 57",
    isPicked: true
  },
  {
    adress: "Бишкек, улица Жукеева-Пудовкина, 77/1",
    isPicked: false
  },
  {
    adress: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
    isPicked: false
  }
]

let shippingPickpoint = [{
    adress: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
    rating: "4.99",
    isPicked: true
  },
  {
    adress: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
    rating: "4.99",
    isPicked: false
  },
  {
    adress: "г. Бишкек, улица Табышалиева, д. 57",
    rating: "4.99",
    isPicked: false
  }
]

let cards = [{
  src: "./img/icons/mir.svg",
  alt: "mir-card",
  cardNumber: "1234 56•• •••• 1234",
  isPicked: true
}, {
  src: "./img/icons/visa.svg",
  alt: "visa-card",
  cardNumber: "1234 56•• •••• 1234",
  isPicked: false
}, {
  src: "./img/icons/mastercard.svg",
  alt: "master-card",
  cardNumber: "1234 56•• •••• 1234",
  isPicked: false
}, {
  src: "./img/icons/maestro.svg",
  alt: "maestro-card",
  cardNumber: "1234 56•• •••• 1234",
  isPicked: false
}]

let pickpointOpen = true;

const checkboxForAll = document.querySelector('#checkForAll');
const ul = document.querySelector('.unordered-list_cart');
const list = document.querySelector('.list');
const missing = document.querySelector('.missing');
const arrow = list.querySelector('.list__icon');
const arrowMissing = missing.querySelector('.list__icon');
const paymentCheckbox = document.querySelector('#paymentCheckbox');
const button = document.querySelector('.confirm__button');
const buttonShipping = document.querySelectorAll('.shipping__button');
const modalShipping = document.querySelector('.modal-shipping');
const modalShippingList = document.querySelector('.modal-shipping__list');
const tabs = modalShipping.querySelectorAll('.modal-shipping__tab');
const shippingAdress = document.querySelectorAll('.shipping__title');
const shippingMethod = document.querySelector('.shipping__pick');
const modalCard = document.querySelector('.modal-card');
const buttonCard = document.querySelectorAll('.payment__button');
const cardEdit = document.querySelectorAll('.payment__card');
const free = document.querySelectorAll('.green');

const templateTask = (item) => {
  const li = document.createElement('li');
  item.isEmpty === true ? li.classList.add("unordered-list__item", "unordered-list__item_missing") : li.classList.add('unordered-list__item');
  li.innerHTML = `
                <label class="checkbox">
                  <input ${item.isSelected ? 'checked' : ''} type="checkbox" />
                  <span></span>
                  <img
                  src="${item.img}"
                  alt="item-image"
                  class="unordered-list__image"
                  />
                </label>
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
                    >${item.seller.name}
                    <img src="./img/icons/info.svg" alt="info-icon" class="info-icon" />
                  </span>
                  <div class="description__info">
                    <span class="description__text-name">${item.seller.name.toUpperCase()}</span>
                    <span class="description__text-ogr">ОГРН: ${item.seller.ogrn}</span>
                    <span class="description__text-adress">${item.seller.adress}</span>
                  </div>
                  </div>
                </div>

                  <div class="quantity">
                    <div class="quantity__wrapper">
                      <button ${item.quantity <= 1 ? "disabled" : ""} class="quantity__button-minus">−</button>
                      <span class="quantity__value">${item.quantity}</span>
                      <button ${item.quantity === item.left ? "disabled" : ""} class="quantity__button-plus">+</button>
                    </div>
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
                  <span class="${item.sale.toString().length > 6 ? "price__sale smaller" : "price__sale"}">${numberWithSpaces(Math.ceil(item.sale * item.quantity))} <p>сом</p></span>
                  <span class="price__text">${numberWithSpaces(Math.ceil(item.price * item.quantity))} сом </span>
                  
                  <div class="price__hover">

                  <div class="price__hover-row">
                  <span class="price__hover-sale">${"Скидка " + Math.ceil(100 - (item.sale*100/item.price)) + "%"}</span>
                  <span class="price__hover-price">${numberWithSpaces((item.price - item.sale)*item.quantity) + " сом"}</span>
                  </div>

                  <div class="price__hover-row">
                  <span class="price__hover-sale">Скидка покупателя 10%</span>
                  <span class="price__hover-price">${numberWithSpaces(Math.ceil(item.price*item.quantity/100*10)) + " сом"}</span>
                  </div>
                  </div>
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
  const info = li.querySelector(".description__info");
  const infoIcon = li.querySelector(".info-icon");
  const priceSale = li.querySelector(".price__text");
  const priceHover = li.querySelector(".price__hover");

  //Добавление в избранное
  favorite.addEventListener('click', () => {
    cartArray[index].isFavorite = !cartArray[index].isFavorite;
    renderTasks();
  })

  //Удаление из корзины
  trash.addEventListener('click', () => {
    cartArray.splice(index, 1);
    if (cartArray.length === 0) {
      list.remove();
    }
    renderTasks();
  })

  //Наведение на цену
  priceSale.addEventListener('mouseover', () => {
    priceHover.classList.add('active');
  })

  priceSale.addEventListener('mouseout', () => {
    priceHover.classList.remove('active');
  })

  //Наведение на информацию
  infoIcon.addEventListener('mouseover', () => {
    info.classList.add('active');
  })

  infoIcon.addEventListener('mouseout', () => {
    info.classList.remove('active');
  })

  //Отмечаем выбранный товар
  if (checkbox) {
    checkbox.addEventListener('click', () => {
      cartArray[index].isSelected = !cartArray[index].isSelected;
      checkAll() ? checkboxForAll.checked = true : checkboxForAll.checked = false;
      renderTasks();
      renderShipping()
    })
  }

  //Функции счетчика товара
  if (quantity) {
    minus.addEventListener('click', () => {
      if (cartArray[index].quantity <= 0) {
        return;
      }
      cartArray[index].quantity -= 1;
      renderTasks();
    })

    plus.addEventListener('click', () => {
      if (cartArray[index].left === 0) {
        return;
      }
      cartArray[index].quantity += 1;

      renderTasks();
    })
  }

  return li;
}

//Функция по изменение цены
const numberWithSpaces = (num) => {
  const string = num.toString();
  if (string.length <= 4) {
    return string
  }
  return string.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
};

//Функция проверки все ли товары выбраны
const checkAll = () => {
  return cartArray.every(item => item.isSelected);
}

//Функция рендера корзины
const renderTasks = () => {
  ul.innerHTML = '';
  cartArray.forEach(item => {
    ul.append(templateTask(item));
  });
  totalSum()
  itemsAmmount();
}

//Функция чтобы отметить все товары
const markAll = () => {
  cartArray.forEach(item => {
    checkboxForAll.checked ? item.isSelected = true : item.isSelected = false
  });
  renderTasks();
  renderShipping()
}

//Функция по подсчету итоговой суммы
const totalPrice = () => {
  let sum = 0;
  cartArray.forEach(item => {
    if (item.isSelected) {
      sum += item.price * item.quantity
    }
  })
  return sum;
}

//Функция по подсчету итоговой скидки
const totalSale = () => {
  let sum = 0;
  cartArray.forEach(item => {
    if (item.isSelected) {
      sum += item.sale * item.quantity
    }
  })
  return sum;
}

//Функция по подсчету количества товаров
const totalQuantity = () => {
  let quantity = 0;
  cartArray.forEach(item => {
    if (item.isSelected) {
      quantity += item.quantity
    }
  })
  return quantity;
}

//Функция по изменению окончания у слова товар
const pluralize = (count) => {
  let word = 'товар';
  if (count % 10 === 1 && count % 100 !== 11) {
    return word;
  } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
    return word + 'а';
  } else {
    return word + 'ов';
  }
}

checkboxForAll.addEventListener('click', markAll);

//Скрытие-раскрытие списка
arrow.addEventListener('click', () => {
  list.classList.toggle('list__close');
  const listTitle = list.querySelector('.list__title');
  listTitle.innerHTML = '';
  listTitle.innerHTML = `${totalQuantity()} ${pluralize(totalQuantity())} · ${numberWithSpaces(totalPrice())} сом`;
})

arrowMissing.addEventListener('click', () => {
  missing.classList.toggle('list__close');
})

//Функция для изменения в итоговой стоимости
const totalSum = () => {
  const sale = document.querySelector('.total__sale');
  const sum = document.querySelector('.total__sum');
  const price = document.querySelector('.total__price');
  const quantity = document.querySelector('.total__quantity');

  price.innerHTML = numberWithSpaces(totalPrice()) + ` сом`;
  quantity.innerHTML = totalQuantity() + ' ' + pluralize(totalQuantity());
  sum.innerHTML = numberWithSpaces(totalSale()) + `<p> сом</p>`;
  sale.innerHTML = numberWithSpaces(totalSale() - totalPrice()) + ` сом`;
}

//Фукнция для изменения кнопки "Заказать"
paymentCheckbox.addEventListener('change', () => {
  paymentCheckbox.checked ? button.innerHTML = 'Оплатить ' + numberWithSpaces(totalSale()) + ' сом' : button.innerHTML = 'Заказать'
});

//Функции для модального окна
const pickpointCheck = (item) => {
  if (item.rating) {
    return `
    <div class="radio-button__text">
      <img src="./img/icons/star.svg" alt="star">
      <span>${item.rating}</span>
      <p>Пункт выдачи</p>
    </div>
    `
  } else {
    return ``
  }
}

const itemUnpicked = (array) => {
  array.forEach(flag => {
    flag.isPicked = false
  })
}

//Template для модального окна
const templateModal = (item) => {
  const li = document.createElement('li');
  li.classList.add('modal-shipping__item');
  li.innerHTML = `
  <label class="radio-button">
    <input ${item.isPicked ? 'checked' : ''} name="pickpoint" type='radio'>
    <span class="radio-button__custom">${item.adress}</span>
    ${pickpointCheck(item)}
  </label>
  <svg class="trash-bin" width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="icon-20">
    <g id="Vector">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="none"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="none"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="none"/>
    </g>
    </g>
  </svg>
  `
  const button = li.querySelector('.trash-bin');
  const input = li.querySelector('input');

  if (item.rating) {
    const index = shippingPickpoint.indexOf(item);
    button.addEventListener('click', () => {
      shippingPickpoint.splice(index, 1)
      renderModal(shippingPickpoint)
    })
    input.addEventListener('change', () => {
      itemUnpicked(shippingPickpoint)
      item.isPicked = !item.isPicked
    })

  } else {
    const index = shippingCourier.indexOf(item);
    button.addEventListener('click', () => {
      shippingCourier.splice(index, 1)
      renderModal(shippingCourier)
    })
    input.addEventListener('change', () => {
      itemUnpicked(shippingCourier)
      item.isPicked = !item.isPicked
    })
  }
  return li
}

//Функция рендера контента модального окна
const renderModal = (array) => {
  modalShippingList.innerHTML = '';
  array.forEach(item => {
    modalShippingList.append(templateModal(item));
  })
}

//Функция переключение табов
const changeTab = (tab) => {
  tabs.forEach(tab => {
    tab.classList.remove('active')
  })
  tab.classList.add('active')
  tab.classList.contains('modal-shipping__tab_pickpoint') ? pickpointOpen = true : pickpointOpen = false;
}

tabs.forEach(item => {
  item.addEventListener("click", () => {
    changeTab(item)
    item.classList.contains('modal-shipping__tab_pickpoint') ? renderModal(shippingPickpoint) : renderModal(shippingCourier);
  })
})

//Открытие модального окна
buttonShipping.forEach(button => {
  button.addEventListener('click', () => {
    const closeModal = modalShipping.querySelector('.modal-shipping__icon');
    const confirmModal = modalShipping.querySelector('.modal-shipping__button');

    modalShipping.classList.remove('hide');
    pickpointOpen ? renderModal(shippingPickpoint) : renderModal(shippingCourier);

    closeModal.addEventListener('click', () => {
      modalShipping.classList.add('hide');
    })

    confirmModal.addEventListener('click', () => {
      if (pickpointOpen) {
        const itemPicked = shippingPickpoint.filter(item => item.isPicked)[0];
        shippingAdress.forEach(item => {
          item.innerHTML = itemPicked.adress
        })
        shippingMethod.innerHTML = "Доставка в пункт выдачи"
      } else {
        const itemPicked = shippingCourier.filter(item => item.isPicked)[0];
        shippingAdress.forEach(item => {
          item.innerHTML = itemPicked.adress
        })
        shippingMethod.innerHTML = "Доставка курьером"
      }
      modalShipping.classList.add('hide');
    })
  })
})

//Функция для закрытия модального окна
modalShipping.addEventListener("click", (e) => {
  if (e.target === modalShipping && !modalShipping.classList.contains('hide')) {
    modalShipping.classList.add('hide');
  }
})

//Функция для открытия модального окна с картами
const templateCards = (item) => {
  const li = document.createElement('li');
  li.classList.add('modal-card__item');
  li.innerHTML = `
    <label class="radio-button modal-card__label">
      <input ${item.isPicked ? 'checked' : ''} type="radio" name="radio" />
      <div class="radio-button__custom">
        <img src="${item.src}" alt="${item.alt}" class="modal-card__image">
        <span>${item.cardNumber}</span>
      </div>
    </label>
  `

  const input = li.querySelector('input');
  input.addEventListener('change', () => {
    itemUnpicked(cards)
    item.isPicked = !item.isPicked
  })

  return li
}

buttonCard.forEach(button => {
  button.addEventListener('click', () => {
    modalCard.classList.remove('hide');

    const closeModal = modalCard.querySelector('.modal-card__icon');
    const modalList = modalCard.querySelector('.modal-card__list');
    const confirmButton = modalCard.querySelector('.modal-shipping__button');

    modalList.innerHTML = '';
    cards.forEach(card => {
      modalList.append(templateCards(card));
    })

    closeModal.addEventListener('click', () => {
      modalCard.classList.add('hide');
    })

    confirmButton.addEventListener('click', () => {
      modalCard.classList.add('hide');
      const itemPicked = cards.filter(item => item.isPicked)[0];
      cardEdit.forEach(item => {
        item.classList.contains('payment__card-expire') ? item.innerHTML = cardEditTemplate(itemPicked) + `<span class="payment__expire">01/30</span>` : item.innerHTML = cardEditTemplate(itemPicked)
      })
    })
  })
})

//Функция по замене текста при выборе соответствующего пункта
const cardEditTemplate = (item) => {
  const template = `
  <img src="${item.src}" alt="${item.alt}">
  <span>${item.cardNumber}</span>
  `
  return template
}

modalCard.addEventListener("click", (e) => {
  if (e.target === modalCard && !modalCard.classList.contains('hide')) {
    modalCard.classList.add('hide');
  }
})

//Функция по наведению на "бесплатно"
free.forEach(item => {
  if (item.classList.contains('return__green')) {
    const hoverText = document.querySelector('.return__hover');
    item.addEventListener('mouseover', () => {
      hoverText.classList.add('active')
    })
    item.addEventListener('mouseout', () => {
      hoverText.classList.remove('active')
    })
  } else {
    const hoverText = document.querySelector('.shipping__hover');
    item.addEventListener('mouseover', () => {
      hoverText.classList.add('active')
    })
    item.addEventListener('mouseout', () => {
      hoverText.classList.remove('active')
    })
  }
})

//Функции для списка отствующих товаров
const templateMissing = (item) => {
  const li = document.createElement('li');
  li.classList.add('unordered-list__item');
  li.classList.add('unordered-list__item_missing');
  li.innerHTML = `
  <img
  src="${item.img}"
  alt="item-image"
  class="unordered-list__image"
/>
<div class="description">
  <h4 class="description__heading">
    ${item.name}
  </h4>
<div class="${item.feature === false ? 'feature feature__none' : 'feature'}">
  <span class="${item.feature.color ? "feature__color" : "feature__color feature__none"}">Цвет: ${item.feature.color && item.feature.color}</span>
  <span class="${item.feature.size ? "feature__size" : "feature__color feature__none"}">Размер: ${item.feature.size && item.feature.size} </span>
</div>
</div>

  <div class="quantity">
    <div class="quantity__icons">
      <svg class="favorite"" width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </div>
  `
  const trashbin = li.querySelector('.trash-bin')
  const favorite = li.querySelector('.favorite');
  const index = missingArray.indexOf(item);

  trashbin.addEventListener('click', () => {
    missingArray.splice(index, 1)
    li.remove()
  })

  favorite.addEventListener('click', () => {
    item.isFavorite = !item.isFavorite
    favorite.classList.toggle('active')
  })

  return li
}

const renderMissing = () => {
  const ul = document.querySelector('.unordered-list-missing');
  ul.innerHTML = '';
  missingArray.forEach(item => {
    ul.append(templateMissing(item));
  })
}

const itemsAmmount = () => {
  const cartIconHeader = document.querySelector('.icon_cart');
  const span = cartIconHeader.querySelector('span');
  const ammount = cartArray.length <= 0 ? "" : cartArray.length;
  span.innerHTML = ammount;
}

const cartShippingTemplate = (item) => {
  if (item.isSelected) {

  }
}

const cartShipping = () => {

}

const renderShipping = () => {
  const rowShipping = document.querySelector('.row-date');

  const dateArrays = Object.values(cartArray.reduce((acc, item) => {
    const {
      shipping
    } = item;
    shipping.forEach(({
      date,
      amount
    }) => {
      if (item.isSelected) {
        acc[date] = acc[date] || [];
        acc[date].push({
          img: item.img,
          quantity: item.quantity,
          amount: amount,
          date: new Date(date)
        });
      }
    });
    return acc;
  }, {}));

  const row = () => {
    const divArray = dateArrays.map(item => {
      const date = item[0].date.getDate();
      const div = document.createElement('div');
      div.classList.add('row');

      const template = `
        <div class="row__title">
          <span>${date} — ${date + 1} февраля</span>
        </div>
        <div class="row__info">
          <div class="row__photos">
          </div>
        </div>
      `;

      div.innerHTML = template;

      const rowPhotos = div.querySelector('.row__photos');
      item.forEach(el => {
        const rowPhotoDiv = document.createElement('div');
        rowPhotoDiv.classList.add('row__photo');
        const infoTemplate = (item) => `
          <div class="row__photo">
            <img class="row__photo" src="${item.img}" alt="item" />
            <span class="row__quantity row__quantity-last">${item.quantity > 1 ? item.quantity : ''}</span>
          </div>
        `;
        rowPhotoDiv.innerHTML = infoTemplate(el);
        rowPhotos.append(rowPhotoDiv);
      });

      return div;
    });

    return divArray;
  };

  const resultDivArray = row();

  rowShipping.innerHTML = '';

  resultDivArray.forEach(resultDiv => {
    rowShipping.append(resultDiv);
  });
};

//Валидация формы
button.addEventListener('click', () => {
  formValidation();
})

//Функция валидации формы
const formValidation = () => {
  const form = document.querySelector('.form');
  const name = form.querySelector('.form__input-name');
  const surname = form.querySelector('.form__input-surname');
  const phone = form.querySelector('.form__input-phone');
  const email = form.querySelector('.form__input-mail');
  const inn = form.querySelector('.form__input-inn');
  const formGroup = form.querySelectorAll('.form__group');

  formGroup.forEach(item => {
    item.classList.remove('error');
  })

  const nameRegex = /^[А-Яа-я\s]+$/;
  const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (!nameRegex.test(name.value) || name.value === "") {
    incorrectForm(name)
  }

  if (!nameRegex.test(surname.value) || surname.value === "") {
    incorrectForm(surname)
  }

  if (phone.value === "" || phone.value.length < 12) {
    incorrectForm(phone)
  }

  if (email.value === "" || !emailRegex.test(email.value)) {
    incorrectForm(email)
  }

  if (inn.value === "" || inn.value.length !== 10) {
    incorrectForm(inn)
  }
}

const incorrectForm = (item) => {
  const div = item.closest('.form__group')
  div.classList.add('error');
  item.scrollIntoView({
    behavior: "smooth"
  })
}

function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return "+" + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4] + '-' + match[5];
  }
  return phoneNumber;
}

renderShipping();
renderMissing();
renderTasks();