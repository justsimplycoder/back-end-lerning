<?php
$str = "Text, текст";
echo strlen($str); // -> 16 неверн
echo PHP_EOL;
echo mb_strlen($str); // -> 11
 ?>