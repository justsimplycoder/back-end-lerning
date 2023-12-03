const colors = ['красный', 'зелёный', 'синий'];

const [red, green, blue] = colors;

console.log(`Цвета RGB: ${red}, ${green}, ${blue}!`);
// -> Цвета RGB: красный, зелёный, синий!

const [,,siniy] = colors;
console.log(`Цвет ${siniy}`);
// -> Цвет синий