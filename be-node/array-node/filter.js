const arr = [6, 7, 8, 9, 10, 11, 12];

console.log(
    arr.filter(el => el % 2 != 0)
);
// -> [ 7, 9, 11 ]
console.log(
    arr.filter(el => el % 2 == 0)
);
// -> [ 6, 8, 10, 12 ]