<?php
$fruits = array("orange", "banana", "apple", "raspberry");
$fruit = array_shift($fruits);
echo $fruit.PHP_EOL;
// -> orange
print_r($fruits);
/* ->
Array
(
    [0] => banana
    [1] => apple
    [2] => raspberry
)
*/
?>