<?php
$str = "	 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 		";
echo strlen($str) . PHP_EOL; // 62
echo strlen(trim($str)) . PHP_EOL; // 57
// Функции для работы с многобайтовыми строками
$str_ru = " Просто текст набранный кириллицей.  ";
echo mb_strlen($str_ru) . PHP_EOL; // 37
echo mb_strlen(trim($str_ru)); // 34
 ?>