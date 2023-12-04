<?php
// Чтение файла построчно
$fd = fopen('test.html', 'r') or die('не удалось открыть фаил!');
while(!feof($fd)) {
	$str = htmlentities(fgetc($fd));
	echo $str;
}
fclose($fd);

echo PHP_EOL;

// Чтение файли целиком
$str = html_entity_decode(file_get_contents("test.html"));
echo $str;

echo PHP_EOL;

// Поблочное чтение файла
$fd = fopen("test.html", 'r') or die("не удалось открыть файл");
while(!feof($fd))
{
    // 600 байт
    $str = htmlentities(fread($fd, 600));
    echo $str;
}
fclose($fd);
 ?>