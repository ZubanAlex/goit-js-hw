const credits = 23580;
const pricePerDroid = 3000;
let inQuantity = prompt(
  'На вашем счету 23580 кредитов. Стоимость одного дроида 3000 кредитов. Введите количество дроидов которое желаете купить',
);
let totalPrice = pricePerDroid * inQuantity;
let balance = credits - totalPrice;
let message;

if (inQuantity === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${inQuantity} дроидов, на счету осталось ${balance} кредитов.`;
}

console.log(message);
