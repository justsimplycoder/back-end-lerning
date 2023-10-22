const data = require('./data.json');
const fs = require('node:fs');

console.log(data);
/* ->
{
	name: 'Jon',
	age: 12
}
*/

// Дописать информацию и записать в новый фаил
data.city = 'New York';
fs.writeFileSync('data-add.json', JSON.stringify(data), {encoding: "utf8", flag: "w"});

// Генерация JSON
class O1 {
	a = 1;
	b = 2;
}

class O2 extends O1 {
	x = 10;
	_y = true; // protected property
	#z = 'text'; // privete property
}

const obj = new O2;

console.log(obj);
// -> O2 { a: 1, b: 2, x: 10, _y: true }

const jsonObj = JSON.stringify(obj);
console.log(jsonObj);
// -> {"a":1,"b":2,"x":10,"_y":true}

console.log(JSON.parse(jsonObj));
// -> { a: 1, b: 2, x: 10, _y: true }

