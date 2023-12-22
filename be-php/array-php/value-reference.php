<?php
/* В PHP массивы передаются по значению */
$arr = [1, 2];

$arrCopy = $arr;
$arrRef = &$arr;

$arrCopy[0] = 111;
$arrRef[1] = 222;

var_dump($arr);
/* ->
array(2) {
  [0]=>
  int(1)
  [1]=>
  int(222)
}
*/
 ?>