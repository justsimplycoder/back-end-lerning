<?php
/* Добавление данных в фаил */
$fd = fopen("append.txt", 'w+') or die("не удалось открыть файл");
fwrite($fd, "Вторая строка".PHP_EOL); // запишем строку
// Перезапишем первую строку
fseek($fd, 0); // поместим указатель файла в начало
fwrite($fd, "Первая строка".PHP_EOL); // запишем в начало строку
fseek($fd, 0, SEEK_END); // поместим указатель в конец
fwrite($fd, "Третья строка"); // запишем в конце еще одну строку
fclose($fd);
 ?>