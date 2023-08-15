const path = require('node:path');

// console.log(process.env.PATH.replaceAll(';', ';\n')); // переменные окружения

// Возвращает последнюю часть пути (после последнего '/')
console.log(path.basename('/home/doc/index.html'));
// -> index.html
console.log(path.basename('/home/doc/index.html', '.html'));
// -> index

// Bозвращает имя каталога пути
console.log(path.dirname('/home/doc/index.html'));
// -> /home/doc

// Возвращает расширение файла
console.log(path.extname('index.html'));
// -> .html

// Возвращает true, если путь является абсолютным путем, иначе false
console.log(path.isAbsolute('/home/doc/index.html'));
// -> true
console.log(path.isAbsolute('../doc/index.html'));
// -> false

// Предоставляет специфический для платформы разделитель путей
console.log(path.delimiter);
// -> ';' Разделитель в Windows

// Возвращает объект со свойствами: root, dir, base, ext, name
console.log(path.parse('/home/doc/index.html'));
/* ->
{
  root: '/',
  dir: '/home/doc',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}
*/

// Метод path.format() возвращает строку пути из объекта
const pathfile1 = path.format({
  root: '/',
  dir: '/home/doc',
  base: 'index.html',
  ext: '.html',
  name: 'index'
});
console.log(pathfile1);
// -> /home/doc\index.html в Windows так

const pathfile2 = path.format({
  root: '/',
  dir: '\\home\\doc',
  base: 'index.html',
  ext: '.html',
  name: 'index'
});
console.log(pathfile2);
// -> \home\doc\index.html

// Объединяет все заданные сегменты пути
console.log(path.join('/home', 'doc', 'index.html'));
// -> \home\doc\index.html

// Преобразует последовательность путей или сегментов путей в абсолютный путь
console.log(path.resolve('/home', 'doc', 'index.html'));
// -> c:\home\doc\index.html

// Предоставляет специфический для платформы разделитель сегментов пути:
// Windows - '\', POSIX - '/'
console.log('foo\\bar\\baz'.split(path.sep));
// -> ['foo', 'bar', 'baz']

// Абсолютный путь до папки из которой вызван скрипт
console.log(__dirname);
// -> C:\folder\folder\

// Абсолютный путь до вызванного скрипта
console.log(__filename);
// -> C:\folder\folder\index.js