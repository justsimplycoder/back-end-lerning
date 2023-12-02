<?php

$array = array(
	'яблоко',
	'апельсин',
	'виноград'
);

reset($array);
$first = current($array);
echo $first.PHP_EOL;
// -> яблоко
$end = end($array);
echo $end;
// -> виноград
?>