const total = 100;
const ordered = prompt('Укажите количество товар');
let message;

if (total == ordered || total > ordered) {
  message = 'Заказ оформлен, с вами свяжется менеджер';
} else {
  message = 'На складе недостаточно твоаров!';
}

console.log(message);
