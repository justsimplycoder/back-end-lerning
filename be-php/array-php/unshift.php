<?php
$fruits = [
    "orange",
    "banana"
];

array_unshift($fruits, "apple", "raspberry");
print_r($fruits);
/* ->
Array
(
    [0] => apple
    [1] => raspberry
    [2] => orange
    [3] => banana
)
*/
?>