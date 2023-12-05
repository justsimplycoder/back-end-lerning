const fs = require("node:fs");
const {writeFile} = require('node:fs/promises');
const os = require("node:os");

// Данные методы полностью перезаписывают фаил

const data = "Привет мир!!!!!" + os.EOL;

// callback запись файла
fs.writeFile("hello.txt", data, function(error){
    if(error){  // если ошибка
        return console.log(error);
    }
    console.log("Файл успешно записан");
});

// async запись файла
// (async function main() {
//     try {
//         await writeFile(
//                 "hello.txt", data)
//         console.log("Запись файла.");
//         console.log(fs.readFileSync("./hello.txt").toString());
//     } catch (err) {
//         console.error(err);
//     }
// })();

// Синхронная запись файла
fs.writeFileSync("hello.txt", "Привет мир." + os.EOL);

// stream запись файла
const writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("---Привет мир!---\n");
writeableStream.write("Продолжение записи\n");
writeableStream.end("Завершение записи\n");

