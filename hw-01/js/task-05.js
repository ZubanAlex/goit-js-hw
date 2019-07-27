let cost;
let name;
const invalidContry = prompt('Веедите страну доставки');

let message;

switch (invalidContry.toLocaleLowerCase()) {
  case 'китай':
    cost = 100;
    name = 'Китай';
    break;

  case 'чили':
    cost = 250;
    name = 'Чили';
    break;

  case 'австралия':
    cost = 170;
    name = 'Австралия';
    break;

  case 'индия':
    cost = 80;
    name = 'Индия';
    break;

  case 'ямайка':
    cost = 120;
    name = 'Ямайка';
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

if (invalidContry === null) {
  message = 'Отменено пользователем!';
} else if (name != undefined) {
  message = `Доставка в ${name} будет стоить ${cost} кредитов`;
} else {
  message = '';
}

console.log(message);
