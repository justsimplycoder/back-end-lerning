<?php
$colors = ['красный', 'зелёный', 'синий'];

list($red, $green, $blue) = $colors;

echo "Цвета RGB: $red, $green, $blue!".PHP_EOL;
// -> Цвета RGB: красный, зелёный, синий!

// Пропуск элемента
list(, , $siniy) = $colors;
echo "Цвет $siniy";
// -> Цвет синий
?>