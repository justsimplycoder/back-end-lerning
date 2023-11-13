arr = ['white', 'black', 'green', 'orange', 'yellow'];

arr.forEach((item, key) => console.log(`${key}: ${item}`));
/* ->
0: white
1: black
2: green
3: orange
4: yellow
*/

// Изменение оригинальног массива
arr.forEach((item, key, array) => {
	array[key] = 'fruit: ' + item;
});

console.log(arr);
/* ->
[
  'fruit: white',
  'fruit: black',
  'fruit: green',
  'fruit: orange',
  'fruit: yellow'
]
*/