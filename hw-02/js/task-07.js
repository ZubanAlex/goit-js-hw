let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите ваше число');
  if (Number(input) !== Number(input)) {
    alert('Было введено не число, попробуйте еще раз');
  }
  if (input !== null && Number(input) === Number(input)) {
    numbers.push(input);
    console.log(numbers);
  }
} while (input !== null);

for (let number of numbers) {
  total += Number(number);
}

if (numbers.length !== 0) {
  console.log(`Общая сумма чисел равна ${total}`);
}
