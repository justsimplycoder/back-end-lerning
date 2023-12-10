<?php
if (copy("hello.txt", "hello_copy.txt"))
    echo "Копия файла создана";
else echo "Ошибка копирования файла";
?>