let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите ваше число');
  if (input !== null) {
    numbers.push(input);
  }
} while (input !== null);

for (let number of numbers) {
  total += Number(number);
}

if (numbers.length !== 0) {
  console.log(`Общая сумма чисел равна ${total}`);
}
