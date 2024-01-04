<?php
$date = date_create();
echo date_format($date, 'd.m.Y');
echo PHP_EOL;
date_modify($date, '1 day');
echo date_format($date, 'd.m.Y');
 ?>