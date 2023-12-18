<?php
/* Переименовывание/перемещение файла */
if (!rename("hello.txt", "subdir/hello.txt"))
    echo "Ошибка перемещения файла";
else echo "Файл перемещен";
 ?>