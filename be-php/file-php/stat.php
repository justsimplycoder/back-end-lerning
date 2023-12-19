<?php
/* Иформация о файле */
$path = getcwd();
$file_path = $path . '/hello.txt';

$stat = stat($file_path);

var_export($stat);

echo PHP_EOL;

echo 'file size:' . PHP_EOL;
echo $stat['size'] . PHP_EOL;
echo filesize($file_path) . PHP_EOL;

echo 'file creation time:' . PHP_EOL;
echo date('F d Y H:i:s', $stat['ctime']) . PHP_EOL;
echo date('F d Y H:i:s', filectime($file_path)) . PHP_EOL;

echo 'is readable file:' . PHP_EOL;
echo is_readable($file_path) ? 'true' : 'false';
echo PHP_EOL;

echo 'is writable file:' . PHP_EOL;
echo is_writable($file_path) ? 'true' : 'false';
echo PHP_EOL;

$info = pathinfo($file_path);

echo 'file extension: ' . PHP_EOL;
echo $info['extension'] . PHP_EOL;
echo (new SplFileInfo($file_path))->getExtension();
echo PHP_EOL;

echo 'file name: ' . PHP_EOL;
echo $info['basename'] . PHP_EOL;
echo basename($file_path) . PHP_EOL;

echo 'file directory:' . PHP_EOL;
echo $info['dirname'] . PHP_EOL;
echo dirname($file_path) . PHP_EOL;
 ?>