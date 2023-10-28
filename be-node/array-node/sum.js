console.log(
	[2, 4, 5, 6].reduce((sum, cur) => sum + cur, 0)
);
// -> 17
let obj = {
	a: 1.2,
	b: 2.3,
	c: 3.4
};
let sumObj = 0;
for (let prop in obj) {
	if (obj.hasOwnProperty(prop)) {
		sumObj += obj[prop];
	}
}
console.log(sumObj);
// -> 6.9
