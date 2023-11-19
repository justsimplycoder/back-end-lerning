const input = {
	"a": 1,
	"b": 1,
	"c": 2
};

function flip(obj) {
	const result = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			result[obj[prop]] = prop;
		}
	}
	return result;
}

console.log(flip(input));
// -> { '1': 'b', '2': 'c' }