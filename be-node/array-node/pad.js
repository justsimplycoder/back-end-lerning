const arr = [12, 10, 9];
console.log([...arr, ...Array(2).fill(0)]);
// -> [ 12, 10, 9, 0, 0 ]
console.log([...Array(2).fill(0), ...arr]);
// -> [ 0, 0, 12, 10, 9 ]
