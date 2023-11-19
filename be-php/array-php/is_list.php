<?php
var_export(array_is_list([]));
// -> true
echo PHP_EOL;

var_export(array_is_list([1, 2, 3]));
// -> true
echo PHP_EOL;

var_export(array_is_list(['orange' => 1, 'apple' => 2]));
// -> false
?>