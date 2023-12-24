<?php
// Запись CSV файла
$list = array (
	array('name', 'age', 'work'),
	array('Jon', 23, 'programmer'),
	array('Bob', 30, 'QA')
);
$fp = fopen('file.csv', 'w');
foreach ($list as $fields) {
	fputcsv($fp, $fields, ';', '"');
}
fclose($fp);

// Чтение CSV файла
$list = [];
if (($fp = fopen("file.csv", "r")) !== FALSE) {
	while (($data = fgetcsv($fp, 0, ";")) !== FALSE) {
		$list[] = $data;
	}
	fclose($fp);
	print_r($list);
}
?>