let stockElements = [
  {
    img: "./src/img/pancake-item.png",
    price: "44,50 ",
    description: "Г/Ц Блинчики с мясом вес, Россия",
  },
  {
    img: "./src/img/milk-item.png",
    price: "44,50",
    description: `Молоко ПРОСТОКВАШИНО <span> паст. питьевое цельное отборное...</span>`,
  },
  {
    img: "./src/img/image.png",
    price: "44,50",
    description: `Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ`,
  },
  {
    img: "./src/img/kzs-sausage-item.png",
    price: "44,50",
    description: `Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...`,
  },
];

let newElements = [
  {
    img: "./src/img/sausage-item.png",
    price: "599,99",
    description: `Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»`,
  },
  {
    img: "./src/img/image.png",
    price: "44,50",
    description: "Колбаса сырокопченая",
  },
  {
    img: "./src/img/kzs-sausage-item.png",
    price: "159,99",
    description: `Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»`,
  },
  {
    img: "./src/img/milk-item.png",
    price: "49,39",
    description: `Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»`,
  },
];

let famousElements = [
  {
    img: "./src/img/smoked-sausage-item.png",
    price: "77,99",
    description: `Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»`,
  },
  {
    img: "./src/img/kzs-sausage-item.png",
    price: "159,99",
    description: "Колбаса сырокопченая",
  },
  {
    img: "./src/img/sausage-item.png",
    price: "599,99",
    description: `Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»`,
  },
  {
    img: "./src/img/milk-item.png",
    price: "49,39",
    description: `Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»`,
  },
];

let iframes = [
  `
  <iframe
              src="https://yandex.uz/map-widget/v1/?ll=50.835894%2C61.669228&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA2NBIr0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQmtC-0LzQuCIKDZ8oW0IVPUCAQg%2C%2C&z=16.47"
              class="shelyur"
            ></iframe>
  `,
  `
  <iframe
              src="https://yandex.uz/map-widget/v1/?ll=53.204326%2C65.301197&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4MhLGAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINC00LXRgNC10LLQvdGPINCS0LXRgNGC0LXQvyIKDevQVEIVCZmCQg%2C%2C&z=14.19"
              class="vertep"
            ></iframe>
  `,
  `
  <iframe
              src="https://yandex.uz/map-widget/v1/?ll=53.279475%2C65.294748&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4NBLGAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINGB0LXQu9C-INCa0YDQsNGB0L3QvtCx0L7RgCIKDRokVUIV_ZaCQg%2C%2C&z=14.17"
              class="krasnobor"
            ></iframe>
  `,
  `
  <iframe src="https://yandex.uz/map-widget/v1/?ll=53.357525%2C65.276844&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4NRLCAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINC00LXRgNC10LLQvdGPINCU0LjRjtGAIgoNiHBVQhUjjoJC&z=14.42" class="dyur"></iframe>
  `,
];

let articles = [
  {
    img: "./src/img/article/article-1.jpg",
    date: "05.03.2021",
    title: "Режим использования масок и перчаток на территории магазинов",
    description: `Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.`,
  },
  {
    img: "./src/img/article/article-2.jpg",
    date: "05.03.2021",
    title: "Весеннее настроение для каждой",
    description: `8 Марта - это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
  },
  {
    img: "./src/img/article/article-3.jpg",
    date: "22.02.2020",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    description: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!`,
  },
];

let stockContainer = document.querySelector(".stock-items");

stockElements.forEach((item) => {
  const { img, price, description } = item;

  stockContainer.innerHTML += `
            <div class="item">
              <div class="item-image">
                <img src="${img}" alt="image" />
                <button class="favourite">
                  <img src="./src/img/icons/favorite.svg" alt="favorite" />
                </button>
                <div class="discount">
                  <h2>-50%</h2>
                </div>
              </div>
              <div class="item-description">
                <div class="currency">
                  <div>
                    <h2>${price}<span>₽</span></h2>
                    <p>С картой</p>
                  </div>
                  <div>
                    <h2>50,50 <span>₽</span></h2>
                    <p>Обычная</p>
                  </div>
                </div>
                <p class="description-title">
                  ${description}
                </p>
                <div class="rate"></div>
                <button class="add-basket_btn">В корзину</button>
              </div>
            </div>
  `;
});

let newContainer = document.querySelector(".new-items");
let famousContainer = document.querySelector(".famous-items");

function showItems(item, section) {
  item.forEach((item) => {
    const { img, price, description } = item;

    section.innerHTML += `
     <div class="item">
      <div class="item-image">
        <img src="${img}" alt="image" />
        <button class="favourite">
          <img src="./src/img/icons/favorite.svg" alt="favorite" />
        </button>
      </div>
      <div class="item-description">
        <div class="currency">
          <div>
            <h2>${price} <span>₽</span></h2>
          </div>
        </div>
        <p class="description-title">
          ${description}
        </p>
        <div class="rate"></div>
        <button class="add-basket_btn">В корзину</button>
      </div>
    </div>`;
  });
}
showItems(newElements, newContainer);
showItems(famousElements, famousContainer);

let mapBtns = document.querySelectorAll(".btn");

function addClassMapBtns(e) {
  mapBtns.forEach((item, index) => {
    item.classList.remove("btn-clicked");
    e.currentTarget.classList.add("btn-clicked");
    document.querySelector(".maps").innerHTML = iframes[e.target.value];
  });
}

mapBtns.forEach((item) => {
  item.addEventListener("click", addClassMapBtns);
});

articles.forEach((item) => {
  const { img, date, title, description } = item;
  document.querySelector(".article-items").innerHTML += `
    <div class="item">
      <div class="item-image">
        <img src="${img}" alt="artice img" />
      </div>
      <div class="item-description">
         <p class="date">${date}</p>
          <h2>${title}</h2>
          <p class='description'>${description}</p>
          <button>Подробнее</button>
      </div>
    </div>
  `;
});

let rateDiv = document.querySelectorAll(".rate");
let starSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class='star'>
  <path d="M7.10326 1.81698C7.47008 1.07374 8.52992 1.07374 8.89674 1.81699L10.1185 4.29249C10.2641 4.58763 10.5457 4.7922 10.8714 4.83953L13.6033 5.2365C14.4235 5.35568 14.751 6.36365 14.1575 6.94219L12.1807 8.8691C11.945 9.09884 11.8375 9.42984 11.8931 9.75423L12.3598 12.4751C12.4999 13.292 11.6424 13.9149 10.9088 13.5293L8.46534 12.2446C8.17402 12.0915 7.82598 12.0915 7.53466 12.2446L5.09119 13.5293C4.35756 13.9149 3.50013 13.292 3.64024 12.4751L4.1069 9.75423C4.16254 9.42984 4.05499 9.09884 3.81931 8.8691L1.8425 6.94219C1.24898 6.36365 1.57649 5.35568 2.39671 5.2365L5.12859 4.83953C5.4543 4.7922 5.73587 4.58763 5.88153 4.29249L7.10326 1.81698Z" fill="#BFBFBF"/>
</svg>`;

let rateCount = 0;

rateDiv.forEach((item) => {
  for (let i = 0; i < 5; i++) {
    item.innerHTML += starSvg;
  }
  let svg = item.querySelectorAll("svg");
  svg.forEach((itemSvg, indexSvg) => {
    itemSvg.addEventListener("click", () => {
      svg.forEach((item, indexClicedSvg) => {
        rateCount = indexSvg + 1;
        for (let i = 0; i < rateCount; i++) {
          if (indexSvg < indexClicedSvg) {
            item.classList.remove("rated");
          } else {
            item.classList.add("rated");
          }
        }
      });
    });
  });
});

let likeBtn = document.querySelectorAll(".favourite");
let likeSpan = document.querySelectorAll(".likes-count", ".likes-count-mob");
let likeCount = 0;

likeBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("fav-true");
    if (item.classList.contains("fav-true")) {
      likeCount++;
    } else {
      likeCount--;
    }
    likeSpan.forEach((item) => {
      item.style = likeCount == 0 ? "display:none;" : "display:block;";
      item.innerHTML = likeCount > 0 ? likeCount : "";
    });
  });
});

let addBasketBtn = document.querySelectorAll(".add-basket_btn");
let addBasketSpan = document.querySelectorAll(
  ".basket-span",
  ".basket-span-mob"
);
let addBasketCount = 0;

addBasketBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("add-true");
    if (item.classList.contains("add-true")) {
      addBasketCount++;
    } else {
      addBasketCount--;
    }
    addBasketSpan.forEach((item) => {
      item.style = addBasketCount == 0 ? "display:none;" : "display:block;";
      item.innerHTML = addBasketCount > 0 ? addBasketCount : "";
    });
  });
});

let modalContainer = document.querySelector(".modal-container");
let userDiv = document.querySelector(".user");
let body = document.querySelector("body");
let closeModalBtn = document.querySelector(".modal-close_btn");
let form = modalContainer.querySelector("form");
let validate = true;

userDiv.addEventListener("click", () => {
  modalContainer.classList.add("modal-true");
  body.classList.add("body-modal");
});

modalContainer.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    modalContainer.classList.remove("modal-true");
    body.classList.remove("body-modal");
  }
});

closeModalBtn.addEventListener("click", () => {
  modalContainer.classList.remove("modal-true");
  body.classList.remove("body-modal");
});

window.addEventListener("keydown", (e) => {
  e.code == "Escape"
    ? (modalContainer.classList.remove("modal-true"),
      body.classList.remove("body-modal"))
    : "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form[0].value.length !== 19) {
    form[0].nextElementSibling.textContent = "Must be valid";
    validate = false;
  } else {
    form[0].nextElementSibling.textContent = "";
    validate = true;
  }
  validate
    ? (modalContainer.classList.remove("modal-true"),
      body.classList.remove("body-modal"))
    : "";
});

// IMask(document.getElementById("phone"), {
//   mask: "+{998} (00)-000-00-00",
// });
