let cost;
let name;
const inputContry = prompt('Веедите страну доставки');

switch (inputContry.toLocaleLowerCase()) {
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

if (inputContry === null) {
  console.log('Отменено пользователем!');
}
if (name != undefined) {
  console.log(`Доставка в ${name} будет стоить ${cost} кредитов`);
}
