const credits = 23580;
const pricePerDroid = 3000;
let inQuantity = prompt(
  'На вашем счету 23580 кредитов. Стоимость одного дроида 3000 кредитов. Введите количество дроидов которое желаете купить',
);

if (inQuantity === null) {
  console.log('Отменено пользователем!');
}

let totalPrice = pricePerDroid * inQuantity;

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (inQuantity !== null) {
  console.log(
    `Вы купили ${inQuantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
