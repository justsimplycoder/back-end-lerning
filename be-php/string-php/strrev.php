<?php
echo strrev("Hello world!"); // -> !dlrow olleH
echo PHP_EOL;
// Неправильно работает с кириллицей
echo strrev('Привет мир!'); // -> !Ѹм ѵвиЀџ
echo PHP_EOL;

// Своя функция
if (!function_exists('mb_strrev')) {
	function mb_strrev(string $str): string {
    return implode(array_reverse(preg_split("//u", $str, -1, PREG_SPLIT_NO_EMPTY)));
	}
}

echo mb_strrev('Привет мир!'); // -> !рим тевирП
?>