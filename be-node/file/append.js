const fs = require("node:fs");
const os = require("node:os");

// синхронное добавление
fs.appendFileSync("append.txt", "Первая строка" + os.EOL);

// асинхронное добавление
fs.appendFile("append.txt", "Вторая строка" + os.EOL, function(error){
    if(error) return console.log(error); // если возникла ошибка
});

fs.writeFile("append.txt", "Третья строка" + os.EOL, {flag:"a"},  function(error){
    if(error) return console.log(error); // если возникла ошибка
    console.log("Запись файла завершена");
});