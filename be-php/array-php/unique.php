<?php
$arr = [1, 1, 1, 2, 2, 3];
var_dump(array_unique($arr));
/* ->
array(3) {
  [0]=>
  int(1)
  [3]=>
  int(2)
  [5]=>
  int(3)
}
 */
?>
