<?php
$str = "PHP";
echo str_pad($str, 6); // -> "PHP   "
echo PHP_EOL;
echo str_pad($str, 6, "-=", STR_PAD_LEFT); // -> "-=-PHP"
echo PHP_EOL;
echo str_pad($str, 10, "_", STR_PAD_BOTH); // -> ___PHP____
echo PHP_EOL;
 ?>