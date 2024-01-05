<?php
$str_en = "Text";
$str_ru = "Текст";

$str_en = strtoupper($str_en); // -> TEXT
$str_ru = mb_strtoupper($str_ru); // -> ТЕКСТ

echo $str_en;
echo PHP_EOL;
echo $str_ru;
echo PHP_EOL;

$str_en = strtolower($str_en); // -> text
$str_ru = mb_strtolower($str_ru); // -> текст

echo $str_en;
echo PHP_EOL;
echo $str_ru;
 ?>