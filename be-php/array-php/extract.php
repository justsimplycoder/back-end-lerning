<?php
$var_array = [
  "color" => "blue",
  "size"  => "medium",
  "shape" => "sphere"
];
extract($var_array);
echo "$color, $size, $shape";
// -> blue, medium, sphere
?>