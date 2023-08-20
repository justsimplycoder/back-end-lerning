<?php

$urlSite = 'http://myusername:mypassword@myhostname:9090/path?arg=value#anchor';

// Разбирает URL и возвращает его компоненты
$myURL = parse_url($urlSite);
var_dump($myURL);
/* ->
array(8) {
  ["scheme"]=>
  string(4) "http"
  ["host"]=>
  string(8) "myhostname"
  ["port"]=>
  int(9090)
  ["user"]=>
  string(8) "myusername"
  ["pass"]=>
  string(8) "mypassword"
  ["path"]=>
  string(5) "/path"
  ["query"]=>
  string(9) "arg=value"
  ["fragment"]=>
  string(6) "anchor"
}
*/

// Получает протольную часть URL
echo parse_url($urlSite, PHP_URL_SCHEME).PHP_EOL;
// -> http

// Получает имя
echo parse_url($urlSite, PHP_URL_USER).PHP_EOL;
// -> myusername

// Получить пароль
echo parse_url($urlSite, PHP_URL_PASS).PHP_EOL;
// -> mypassword

// Получить hostname
echo parse_url($urlSite, PHP_URL_HOST).PHP_EOL;
// -> myhostname

// port URL
echo parse_url($urlSite, PHP_URL_PORT).PHP_EOL;
// -> 9090

// Получить hostname
echo parse_url($urlSite, PHP_URL_PATH).PHP_EOL;
// -> /path

// Получить сериализованный запрос части URL
echo parse_url($urlSite, PHP_URL_QUERY).PHP_EOL;
// -> arg=value

// Получить якорь
echo parse_url($urlSite, PHP_URL_FRAGMENT).PHP_EOL;
// -> anchor

/*
Работа с GET-параметрами
 */

parse_str($myURL['query'], $parseQuery);
var_dump($parseQuery);
/* ->
array(1) {
  ["arg"]=>
  string(5) "value"
}
*/
$parseQuery['abc'] = 'xyz';
var_dump($parseQuery);
/* ->
array(2) {
  ["arg"]=>
  string(5) "value"
  ["abc"]=>
  string(3) "xyz"
}
*/
echo http_build_query($parseQuery).PHP_EOL;
// -> arg=value&abc=xyz

/*
Конструирование URL
 */
function reverse_parse_url(array $parts)
{
  $url = '';
  if (!empty($parts['scheme'])) {
    $url .= $parts['scheme'] . ':';
  }
  if (!empty($parts['user']) || !empty($parts['host'])) {
    $url .= '//';
  }
  if (!empty($parts['user'])) {
    $url .= $parts['user'];
  }
  if (!empty($parts['pass'])) {
    $url .= ':' . $parts['pass'];
  }
  if (!empty($parts['user'])) {
    $url .= '@';
  }
  if (!empty($parts['host'])) {
    $url .= $parts['host'];
  }
  if (!empty($parts['port'])) {
    $url .= ':' . $parts['port'];
  }
  if (!empty($parts['path'])) {
    $url .= $parts['path'];
  }
  if (!empty($parts['query'])) {
    if (is_array($parts['query'])) {
      $url .= '?' . http_build_query($parts['query']);
    } else {
      $url .= '?' . $parts['query'];
    }
  }
  if (!empty($parts['fragment'])) {
    $url .= '#' . $parts['fragment'];
  }

  return $url;
}

echo reverse_parse_url([
  "scheme" => "https",
  "host" => "example.org/",
  "path" => "/path",
  "query" => "arg=value",
  "fragment" => "anchor"
]);
// -> https://example.org//path?arg=value#anchor


?>