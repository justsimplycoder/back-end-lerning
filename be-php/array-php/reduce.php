<?php
$arr = [1, 2, 3, 4, 5, 6];

print_r(array_reduce($arr, fn($carry, $item) => $carry += $item));
// -> 21
?>