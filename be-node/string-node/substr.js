const str = 'Привет!';
console.log(str.at(-1)); // -> !
console.log(str.substring(str.length - 1)); // -> !
console.log(str.substring(0, str.length - 1)); // -> Привет
console.log(str.substring(1, 2)); // -> р
