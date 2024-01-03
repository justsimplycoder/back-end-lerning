<?php
// Изменение timezone
echo 'Timezone ' . date_default_timezone_get() . ' - часы: ' . date('H');
echo PHP_EOL;
date_default_timezone_set('Europe/Samara');
echo 'Timezone ' . date_default_timezone_get() . ' - часы: ' . date('H');
echo PHP_EOL;
// Смещение часового пояса относительно UTC+0
$date = date_create();
echo 'Смещение: ' . date_offset_get($date) / 60 / 60;
?>