<?php
	// Возвращает последнюю часть пути (после последнего '/')
	echo basename("/home/doc/index.html").PHP_EOL;
	// -> index.html
	echo basename("/home/doc/index.html", ".html").PHP_EOL;
	// -> index

	// Bозвращает имя каталога пути
	echo dirname('/home/doc/index.html').PHP_EOL;
	// -> /home/doc

	// Возвращает расширение файла
	echo pathinfo('/home/doc/index.html', PATHINFO_EXTENSION).PHP_EOL;
	// -> .html

	var_dump(pathinfo('path/file.png')).PHP_EOL;
	/* ->
	array(4) {
	  ["dirname"]=>
	  string(4) "path"
	  ["basename"]=>
	  string(8) "file.png"
	  ["extension"]=>
	  string(3) "png"
	  ["filename"]=>
	  string(4) "file"
	}
	*/

	// Абсолютный путь до папки из которой вызван скрипт
	echo __DIR__.PHP_EOL;
	// -> C:\folder\folder\

	// Абсолютный путь до вызванного скрипта
	echo __FILE__.PHP_EOL;
	// -> C:\folder\folder\index.php
?>