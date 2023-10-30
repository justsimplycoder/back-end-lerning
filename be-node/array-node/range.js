const range = (start, stop, step = 1) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

console.log(range(1, 5));
// -> [ 1, 2, 3, 4, 5 ]
console.log(range(1, 10, 2));
// -> [ 1, 3, 5, 7, 9 ]