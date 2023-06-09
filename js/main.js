new Swiper('.slider')
new Swiper('.reviews-slider')

// Получаем ссылки навигации
const navLinks = document.querySelectorAll('.nav__item__link-active');

// Проходимся по ссылкам и назначаем обработчик событий на клик
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Отменяем стандартное действие ссылки
    event.preventDefault();
    
    // Удаляем класс active у всех ссылок
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Добавляем класс active только выбранной ссылке
    link.classList.add('active');
  });
});





// Получаем текущую дату и время
var now = new Date();

// Получаем все элементы datetime-local на странице
var dateInputs = document.querySelectorAll('input[type="date"]');

// Проходимся по всем элементам и устанавливаем значение текущей даты и времени
dateInputs.forEach(function(input) {
  input.value = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate());
});

// Функция для добавления ведущего нуля к числам, если они меньше 10
function pad(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }

}


const elements = document.querySelectorAll('.slider');
const links = document.querySelectorAll('.our-facilities__link');

let activeElement = document.querySelector('.slider-active');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.currentTarget.dataset.target;
    activeElement.classList.remove('slider-active');
    document.querySelector(`#${target}`).classList.add('slider-active');
    activeElement = document.querySelector('.slider-active');
  });
});


document.querySelector('.burger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.nav__list').classList.toggle('open');
})

