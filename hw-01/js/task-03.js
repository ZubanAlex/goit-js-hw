const ADMIN_PASSWORD = 'jqueryismyjam';
const inPassword = prompt('Введите пароль администратора');
let message;

if (inPassword === null) {
  message = 'Отменено пользователем!';
} else if (inPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
