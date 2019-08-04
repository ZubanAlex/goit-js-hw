function calculateEngravingPrice(message, pricePerWord) {
  message = message.split(' ');

  let counterWord = 0;

  for (let i = 0; i < message.length; i += 1) {
    counterWord += 1;
  }

  return counterWord * pricePerWord;
}

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));
