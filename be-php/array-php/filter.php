<?php
function odd($var)
{
    // является ли переданное число нечётным
    return $var & 1;
}

function even($var)
{
    // является ли переданное число чётным
    return !($var & 1);
}

$array = [6, 7, 8, 9, 10, 11, 12];

print_r(array_filter($array, "odd"));
/* ->
Array
(
    [1] => 7
    [3] => 9
    [5] => 11
)
*/
print_r(array_filter($array, "even"));
/* ->
Array
(
    [0] => 6
    [2] => 8
    [4] => 10
    [6] => 12
)
*/
?>