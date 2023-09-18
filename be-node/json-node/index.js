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
const obj = {
	x: 10,
	y: 'text'
};

const jsonObj = JSON.stringify(obj);
console.log(jsonObj);
// -> `{"x":10,"y":"text"}`
console.log(JSON.parse(jsonObj));
// -> { x: 10, y: 'text' }