const costChina = 100;
const costChili = 250;
const costAustralia = 170;
const costIndia = 80;
const costJamaica = 120;

const inputContry = prompt('Веедите страну доставки');

if (inputContry === null) {
  console.log('Отменено пользователем!');
} else {
  switch (inputContry.toLowerCase()) {
    case 'китай':
      console.log(`Доставка в Китай будет стоить ${costChina} кредитов`);
      break;

    case 'чили':
      console.log(`Доставка в Чили будет стоить ${costChili} кредитов`);
      break;

    case 'австралия':
      console.log(
        `Доставка в Австралия будет стоить ${costAustralia} кредитов`,
      );
      break;

    case 'индия':
      console.log(`Доставка в Индия будет стоить ${costIndia} кредитов`);
      break;

    case 'ямайка':
      console.log(`Доставка в Ямайка будет стоить ${costJamaica} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}
