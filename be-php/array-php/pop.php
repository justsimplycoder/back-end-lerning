<?php
$fruits = array("orange", "banana", "apple", "raspberry");
$fruit = array_pop($fruits);
echo $fruit.PHP_EOL;
// -> raspberry
print_r($fruits);
/* ->
Array
(
    [0] => orange
    [1] => banana
    [2] => apple
)
*/
?>