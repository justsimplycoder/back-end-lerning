function combine(arrProp, arrValue) {
	let result = {};
	arrProp.forEach((prop, index) => {
		result[prop] = arrValue[index];
	});
	return result;
}

const a = ['green', 'red', 'yellow'];
const b = ['avocado', 'apple', 'banana'];

console.log(combine(a, b));
/* ->
{
	green: 'avocado',
	red: 'apple',
	yellow: 'banana'
}
*/