const array1 = new Array('яблоко', 'апельсин', 'виноград');

console.log(array1);
// -> [ 'яблоко', 'апельсин', 'виноград' ]

const array2 = new Array();

array2[array2.length] = 'яблоко';
array2[array2.length] = 'апельсин';
array2[array2.length] = 'виноград';

console.log(array2);
// -> [ 'яблоко', 'апельсин', 'виноград' ]

const array3 = ['яблоко', 'апельсин', 'виноград'];

console.log(array3);
// -> [ 'яблоко', 'апельсин', 'виноград' ]

// Индекс не с нуля
const numbers = new Array();
numbers[4] = 16;
numbers.push(25, 36, 49, 64);
console.log(numbers);
console.log(`length: ${numbers.length}`);
// -> [ <4 empty items>, 16, 25, 36, 49, 64 ]
// -> length: 9
