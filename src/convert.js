import autoasia from './autoasia.json'

const fileUpload = document.querySelector("#fileUploader");
const list = document.querySelector(".list");
const model = document.querySelector('#model');
const btn = document.querySelector('.filterbtn');
const katname = document.querySelector('#name');
const btnName = document.querySelector(".filterbtnname");
const nextBtn = document.querySelector('.nexbtn');
const filterBrand = document.querySelector('.brand');
const filterModel = document.querySelector('.model');

let value = '';
let XL_row_object = [];
let jsonXls = [];

// fileUpload.addEventListener('change', changFile);
// model.addEventListener('input', filterList);
btn.addEventListener('click', w);
// btnName.addEventListener('click', bomba);
// nextBtn.addEventListener('click', writeApi);
filterBrand.addEventListener('change', rty);
// filterModel.addEventListener('change', rty);

let brandFilter = [];
let modelFilter = [];
const curs = 45;

// function wer(e) {
//   console.log(e.currentTarget.value);
//   console.log(e.target);
//   const brand = e.target.value;
//   brandFilter = autoasia.filter(({ Brend }) => Brend === brand);
//   console.log(brandFilter);
// }

function rty(e) {
  console.log(e.currentTarget.value);
  console.log(e.target);
  const model = e.target.value;
  modelFilter = autoasia.filter(({ Model }) => Model === model);
  console.log(modelFilter);
}

function w() {

  list.innerHTML = '';
  let f = model.value.toLowerCase();

  const filterValue = modelFilter.filter(({ Name, Articul }) => Name.toLowerCase().includes(f) || Articul.toLowerCase().includes(f));

  console.log(filterValue);

  // let i = 0;
  // const avto = [];
  // for (let value of filterValue) {
  //   i += 1;
  //   if (i < 20) {
  //     avto.push(value);
  //   }
  // }
  const priceList = filterValue.map(autopartsList).join(' ');
  console.log(priceList);
  list.insertAdjacentHTML('beforeend', priceList);
}

const autopartsList = ({ Brend, Model, Articul, Name, Manufacturer, country, Price, Quantity, Img }) => {
  const totalPrice = Math.round(Price * curs);
  const src = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=%D0%A4%D0%BE%D1%82%D0%BE+%D0%BE%D1%87%D1%96%D0%BA%D1%83%D1%94%D1%82%D1%8C%D1%81%D1%8F";
  return `
<div class="item">
<img src=${Img || src} alt = "" style="width: 100%;  height: 260px;  object-fit: cover">
  <p>Бренд: ${Brend}</p>
  <p>Модель: ${Model}</p>
  <p>Артикул: ${Articul}</p>
  <p>Назва: ${Name}</p>
  <p>Виробництво: ${Manufacturer}</p>
  <p>Ціна: ${totalPrice}грн </p>
  <p>Наявність: ${Quantity}</p>
  </div>
  `
}
