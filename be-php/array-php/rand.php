<?php
$input = array("Neo", "Morpheus", "Trinity", "Cypher", "Tank");
$rand_keys = array_rand($input, 1);
echo $input[$rand_keys];
// -> random value
?>