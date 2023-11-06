<?php
print_r(array_map(fn($value): int => $value * 2, range(1, 5)));
/* ->
Array
(
    [0] => 2
    [1] => 4
    [2] => 6
    [3] => 8
    [4] => 10
)
*/
?>