const { copyFile } = require('node:fs/promises');

(async() => {
    try {
        await copyFile('hello.txt', 'hello_copy.txt');
        console.log('Копия файла создана');
    } catch {
        console.error('Файл не удалось скопировать');
    }
})();