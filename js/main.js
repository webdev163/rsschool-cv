//hamburger

const hamburger = document.querySelector('.hamburger');
const headerWrapper = document.querySelector('.header-wrapper');
const overlay = document.querySelector('#overlay');
const elArr = [hamburger, headerWrapper, overlay];
const mainMenu = document.querySelector('.main-menu');
let active = false;

function toggleActive() {
  elArr.forEach(el => el.classList.toggle('active'));
  active === false ? active = true : active = false;
}

hamburger.addEventListener('click', toggleActive);
overlay.addEventListener('click', toggleActive);
mainMenu.addEventListener('click', () => {
  if (active) toggleActive();
});

//animation

let elements;
let windowHeight;

function init() {
  elements = document.querySelectorAll('.hidden');
  windowHeight = window.innerHeight;
}

function checkPosition() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= -100) {
      element.classList.add('animated');
      element.classList.remove('hidden');
    }
  }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);

init();
checkPosition();

//highlight.js

hljs.highlightAll();

//arrow-up

const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', function () {
  const pos = window.pageYOffset;
  if (pos > window.innerHeight) {
    buttonUp.classList.add('button-up-visible');
  }
  else {
    buttonUp.classList.remove('button-up-visible');
  }
})

buttonUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})


console.log('Выполненные критерии:\n\n✔ Вёрстка валидная 🠖 +10 баллов\n\n✔ Вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5 (article, figure, figcaption, footer, header, main, nav, section, time, используются заголовки h1-h3). 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов 🠖 +20 баллов\n\n✔ Для оформления СV используются css-стили 🠖 +10 баллов\n\n✔ Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы 🠖 +10 баллов\n\n✔ Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется  🠖 +10 баллов\n\n✔ Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным 🠖 +10 баллов\n\n✔ На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым)  🠖 +10 баллов\n\n✔ Контакты для связи и перечень навыков оформлены в виде списка ul > li 🠖 +10 баллов\n\n✔ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского 🠖 +10 баллов\n\n✔ CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js  🠖 +10 баллов\n\n✔ CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий 🠖 +10 баллов\n\n✔ CV выполнено на английском языке 🠖 +10 баллов\n\n✔ Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) 🠖 +10 баллов\n\n✔ Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию 🠖 +10 баллов\n\nИтого: 150 / 150\n\nЕсли Вы считаете мою работу достойной находится в списке лучших работ, заполните, пожалуйста, форму - https://forms.gle/tgC3Y3dn9y2Yu5NF6')