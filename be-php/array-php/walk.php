<?php

$arr = ['white', 'black', 'green', 'orange', 'yellow'];

array_walk($arr, function($val, $key) {
	echo "$key: $val".PHP_EOL;
});
/* ->
0: white
1: black
2: green
3: orange
4: yellow
*/

// Изменение оригинального массива
function changeFruits(&$fruit, $key) {
	$fruit = "fruit: $fruit";
}

array_walk($arr, 'changeFruits');
print_r($arr);
/* ->
Array
(
    [0] => fruit: white
    [1] => fruit: black
    [2] => fruit: green
    [3] => fruit: orange
    [4] => fruit: yellow
)
*/

?>