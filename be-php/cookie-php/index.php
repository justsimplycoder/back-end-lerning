<?php
$name = "Tom";
$age = 36;
setcookie("name", $name);

setcookie("age", $age, time() + 5);  // срок действия - 5 секунд

setcookie("lang[1]", "PHP");
setcookie("lang[2]", "C#");
setcookie("lang[3]", "Java");

echo "Куки установлены" . "<br>";
?>