<?php
$fh = fopen('unlink.html', 'a');
fwrite($fh, '<h1>Привет, мир!</h1>');
fclose($fh);

// задержка, чтобы увидеть удаление файла
sleep(2);

unlink('unlink.html');
?>