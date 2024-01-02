<?php
// Возвращает количество секунд с 1-го января 1970г. в формате timestamp
echo time();
echo PHP_EOL;
// mktime(часы, минуты, секунды, месяц, день, год);
// Возвращает разницу в секундах между 1970 годом и 31.12.2025, 12:59:59:
echo mktime(12, 59, 59, 12, 31, 2025);
echo PHP_EOL;
// Возвращает дату в заданном формате
// (UTC+4) Samara
$timezone  = +4;
echo gmdate("H:i:s d.m.Y", time() + 3600*($timezone+date("I")));
echo PHP_EOL;
// (UTC+0)
echo date('H:i:s d.m.Y');
echo PHP_EOL;
// Парсинг даты
echo strtotime('2023-12-31');
echo PHP_EOL;
// Разница дат
$date1 = date_create('2025-12-31');
$date2 = date_create('2026-01-05');
$diff = date_diff($date1, $date2);
echo $diff->format('%a дней');
?>