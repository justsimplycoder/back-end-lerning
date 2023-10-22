<?php
echo '<pre>';

// Генерация JSON
class O1 {
	public int $a = 1;
	public int $b = 2;
}

class O2 extends O1 {
	private int $x;
	public string $y;
	protected bool $z;
	function __construct(int $x, string $y, bool $z)
	{
		$this->x = $x;
		$this->y = $y;
		$this->z = $z;
	}
}

$obj = new O2(10, 'text', true);

var_dump($obj);
/* ->
object(O2)#1 (5) {
  ["a"]=>
  int(1)
  ["b"]=>
  int(2)
  ["x":"O2":private]=>
  int(10)
  ["y"]=>
  string(4) "text"
  ["z":protected]=>
  bool(true)
}
*/

$jsonObj = json_encode($obj);

echo $jsonObj;
// Можно преобразовать в json только publick property
// -> {"a":1,"b":2,"y":"text"}

echo PHP_EOL;

$arr = array(
	"x" => 10,
	"y" => 'text',
	"z" => true
);

$jsonArr = json_encode($arr);
echo $jsonArr;
// -> {"x":10,"y":"text","z":true}

echo PHP_EOL;

var_dump(json_decode($jsonArr));
/* ->
При парсинге ассоциативного массива формируется объект stdClass
object(stdClass)#2 (3) {
  ["x"]=>
  int(10)
  ["y"]=>
  string(4) "text"
  ["z"]=>
  bool(true)
}
*/
var_dump((array) json_decode($jsonArr));
/* ->
Принудительно преобразование объекта stdClass к массиву
array(3) {
  ["x"]=>
  int(10)
  ["y"]=>
  string(4) "text"
  ["z"]=>
  bool(true)
}
*/

/* Особенность PHP есть константы для настройки кодирования в JSON */

$str = "<h1>text & number</h1>";
echo json_encode($str, JSON_HEX_TAG | JSON_HEX_AMP);
// -> "\u003Ch1\u003Etext \u0026 number\u003C\/h1\u003E"

echo '</pre>';
?>