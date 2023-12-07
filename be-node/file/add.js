/*
Добавление строки в начало файла
Операционная система не может добавить сроку в начало файла. Фаил сначало надо скопировать целиком, потом скеить с добавляемой строкой, далее перезаписать фаил.
*/
const fs = require("node:fs");
const os = require("node:os");

const file = './add.txt';

// Если файла нет создать его
fs.access(file, function(error){
  if (error) {
    console.log('фаил не найден');
    fs.writeFileSync(file, "");
  }

  fs.readFile(file, function(error,data){
    if(error) {  // если возникла ошибка
      return console.log(error);
    }

    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const text = `Строка создана - ${hour}:${minutes}:${seconds}` + os.EOL;

    fs.writeFileSync(file, text + data);
    console.log('к файлу добавлена строка');
  });
});

