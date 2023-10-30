let arr = [1, 2, 3, 4, 5];
function chunk(array, size = 1) {
	let index = 0;
	return array.reduce((acc, cur) => {
		if(index < size) {
			acc[acc.length - 1].push(cur);
			index++;
		} else {
			acc.push([cur]);
			index = 1;
		}
		return acc;
	}, [[]]);
}
console.log(chunk([1, 2, 3, 4, 5], 2));
// -> [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]