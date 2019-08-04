function formatString(string) {
  let counterSymbol = 0;
  string = Array.from(string);
  for (let i = 0; i < string.length; i += 1) {
    counterSymbol += 1;
  }

  if (counterSymbol >= 40) {
    string.splice(40, string.length, '...');
  }
  string = string.join('');
  return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
