<?php
print_r(array_slice(['a', 'b', 'c', 'd', 'e'], 2));
/* ->
Array
(
    [0] => c
    [1] => d
    [2] => e
)
*/
print_r(array_slice(['a', 'b', 'c', 'd', 'e'], 1, 2));
/* ->
Array
(
    [0] => b
    [1] => c
)
*/
print_r(array_slice(['a', 'b', 'c', 'd', 'e'], -2, 1));
/* ->
Array
(
    [0] => d
)
*/
?>