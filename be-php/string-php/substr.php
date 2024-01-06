<?php
$str = 'Привет!';
echo substr($str, -1); // -> !
echo PHP_EOL;
echo substr($str, 0, -1); // -> Привет
echo PHP_EOL;
echo substr($str, 1, 3); // -> р
 ?>