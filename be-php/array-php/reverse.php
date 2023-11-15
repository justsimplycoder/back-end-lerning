<?php
$arr = ['orange', 'yellow', 'black', 'white'];

$reversedArr = array_reverse($arr);

print_r($arr);
/* ->
Array
(
    [0] => orange
    [1] => yellow
    [2] => black
    [3] => white
)
*/
print_r($reversedArr);
/* ->
Array
(
    [0] => white
    [1] => black
    [2] => yellow
    [3] => orange
)
*/
?>