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







