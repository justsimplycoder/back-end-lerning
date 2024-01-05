<?php
$str_en = "Hello world!";
echo strpos($str_en, "world"); // -> 6
echo PHP_EOL;
$str_ru = "Привет, мир!";
echo mb_strpos($str_ru, "мир"); // -> 8
echo PHP_EOL;

// Проверка вхождения строки в подстроку только с оператором эквивалентность (строгое сравнение)
if (strpos($str_en, "Bye") !== false) {
	echo "true";
} else {
	echo "false";
}
// -> false