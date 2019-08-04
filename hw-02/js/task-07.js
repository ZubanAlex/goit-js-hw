let input;
const numbers = [];
let total = 0;

function sum(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    total += Number(numbers[i]);
  }
  return total;
}

do {
  input = prompt('Введите ваше число');
  numbers.push(input);
} while (input !== null);

if (sum(numbers) !== 0) {
  console.log(`Общая сумма чисел равна ${total}`);
}
