<?php
/* Полностью перезаписывает фаил */
$fd = fopen("hello.txt", 'w') or die("не удалось создать файл");
$str = "Привет мир".PHP_EOL;
fwrite($fd, $str);
// or
$str = "Привет мир!!!!!!!!";
fputs($fd, $str);
fclose($fd);
?>