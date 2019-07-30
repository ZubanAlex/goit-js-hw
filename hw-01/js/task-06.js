let input;
let total = 0;

do {
  input = prompt('Введите ваше число');

  if (input !== null) {
    total += Number(input);
  }
} while (input !== null);

alert(`Общая сумма чисел равна: ${total}`);
