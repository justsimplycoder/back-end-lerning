<?php
echo "<h1>Cookies</h1>";
if(isset($_COOKIE["name"])) {
	echo "cookie name: " . $_COOKIE["name"] . "<br>";
}
if (isset($_COOKIE["age"])) {
	echo "cookie age: " . $_COOKIE["age"] . "<br>";
}
if (isset($_COOKIE["lang"])) {
  foreach ($_COOKIE["lang"] as $name => $value) {
     $name = htmlspecialchars($name);
     $value = htmlspecialchars($value);
     echo "$name. $value <br />";
  }
}
 ?>