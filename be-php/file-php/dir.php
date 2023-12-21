<?php
$dir = getcwd(); // получаем текущий каталог

function read_directory($dir)
{
    if (is_dir($dir)) // является ли путь каталогом
    {
        if ($dh = opendir($dir)) // открываем каталог
        {
            // считываем по одному файл или подкаталогу
            // пока не дойдем до конца
            while (($file = readdir($dh)) !== false)
            {
                // пропускаем символы .. и .
                if($file=='.' || $file=='..') continue;
                // если каталог или файл
                if(is_dir($file)) echo "каталог: $file" . PHP_EOL;
                else echo "файл: $file" . PHP_EOL;
            }
            closedir($dh); // закрываем каталог
        }
    }
}

if(mkdir("newdir"))
    echo "Каталог создан";
else
    echo "Ошибка при создании каталога";

read_directory($dir);

if(rmdir("newdir"))
    echo "Каталог удален";
else
    echo "Ошибка при удалении каталога";

read_directory($dir);
?>