const fs = require("node:fs");
const { open } = require('node:fs/promises');

function escape(htmlStr) {
   return htmlStr.replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#39;");

}

console.log("Синхронное чтение файлов");
const data = fs.readFileSync("test.html");
console.log(data.toString());   // выводим считанные данные

/* Асинхронное чтение файла */

// Сначало отработает async, только после этот код
// Чтение файла по частям, по умолчанию 64 * 1024 ( 64 KiB)
const readableStream = fs.createReadStream("test.html");

readableStream.on("data", function(chunk){
    console.log(chunk.toString() + '!!!!!!!!!!!');
});

// Сначала отработает async и stream, только после этот код
fs.readFile("test.html", function(error,data){
    if(error) {  // если возникла ошибка
        return console.log(error);
    }
    console.log(escape(data.toString()));   // выводим считанные данные
});

// Сначало отработает этот код, только потом callback
(async () => {
  const file = await open('./test.html');

  for await (let line of file.readLines()) {
    console.log(line);
  }
})();

console.log("Асинхронное чтение файлов");
