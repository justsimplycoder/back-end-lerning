arr = [1, 2, 3, 4, 5, 6];

console.log(
	arr.reduce((carry, item) => carry += item)
);
// -> 21