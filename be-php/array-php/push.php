<?php
$fruits = [
    "orange",
    "banana"
];

array_push($fruits, "apple", "raspberry");
print_r($fruits);
/* ->
Array
(
    [0] => orange
    [1] => banana
    [2] => apple
    [3] => raspberry
)
*/
?>