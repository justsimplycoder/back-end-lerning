const url = require('node:url');

const urlSite = 'http://myusername:mypassword@myhostname:9090/path?arg=value#anchor';

// Разбирает URL
const myURL = new URL(urlSite);
/* ->
URL {
  href: 'http://myusername:mypassword@myhostname:9090/path?arg=value#anchor',
  origin: 'http://myhostname:9090',
  protocol: 'http:',
  username: 'myusername',
  password: 'mypassword',
  host: 'myhostname:9090',
  hostname: 'myhostname',
  port: '9090',
  pathname: '/path',
  search: '?arg=value',
  searchParams: URLSearchParams { 'arg' => 'value' },
  hash: '#anchor'
}
*/

console.log(myURL);

// Получает и устанавливает протокольную часть URL
console.log(myURL.protocol);
// -> http:

// Получить имя
console.log(myURL.username);
// -> myusername

// Получить пароль
console.log(myURL.password);
// -> mypassword

// Получить хост и порт
console.log(myURL.host);
// -> myhostname:9090

// Получить хост
console.log(myURL.hostname);
// -> myhostname

// port URL
console.log(myURL.port);
// -> 9090

// Получить пароль
console.log(myURL.pathname);
// -> /path

// Получить сериализованный запрос части URL
console.log(myURL.search);
// -> ?arg=value

/*
Работа с GET-параметрами
 */
console.log(myURL.searchParams.get('arg'));
// -> value
myURL.searchParams.set('abc', 'xyz');
console.log(myURL.href);
// -> http://myusername:mypassword@myhostname:9090/path?arg=value&abc=xyz#anchor
myURL.searchParams.delete('abc');
console.log(myURL.toString());
// ->http://myusername:mypassword@myhostname:9090/path?arg=value#anchor

// Получить якорь
console.log(myURL.hash);
// -> #anchor

/*
Конструирование URL
 */
const myConstructURL1 = new URL('https://example.org');
myConstructURL1.pathname = '/path';
myConstructURL1.search = '?arg=value';
myConstructURL1.hash = '#anchor';
console.log(myConstructURL1.href);
// -> https://example.org/path?arg=value#anchor

// или
const pathname = '/path';
const search = '?arg=value';
const hash = '#anchor';
const myConstructURL2 = new URL(`https://example.org${pathname}${search}${hash}`);
console.log(myConstructURL2.href);
// -> https://example.org/path?arg=value#anchor
