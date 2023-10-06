/* открытие всплывающего меню */

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

/* закрытие меню при нажатии на ссылку */
/* 
const z = $('.menu__list').children('ul').children('li').children('a');
const z1 = Array.from(z);

z1.forEach(function(a) {
  $(a).on('click', function() {
    $('.hamburger').addClass('nonactive');
  })
});
 */
/* установка длины линии по значению % в html */


const numbers = document.querySelectorAll('.progress__number'),
  lines = document.querySelectorAll('.progress__line span');

numbers.forEach( (item, i) => {
  lines[i].style.width = item.innerHTML;
});