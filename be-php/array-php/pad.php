<?php
$input = array(12, 10, 9);

print_r(array_pad($input, 5, 0));
/* ->
Array
(
    [0] => 12
    [1] => 10
    [2] => 9
    [3] => 0
    [4] => 0
)
*/

print_r(array_pad($input, -5, 0));
/* ->
Array
(
    [0] => 0
    [1] => 0
    [2] => 12
    [3] => 10
    [4] => 9
)
*/
?>