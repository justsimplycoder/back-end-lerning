const fs = require("node:fs");

const dir = __dirname;

function readDirectory(dir, cb, newdir) {
    cb(newdir);

    // in directory
    const filenames = fs.readdirSync(dir);

    filenames.forEach((file) => {
        if(fs.statSync(file).isFile()) console.log(`фаил: ${file}`);
        else console.log(`каталог: ${file}`);
    });
}

const mk = (newdir) => {
    try {
        fs.mkdirSync(newdir);
        console.log("Каталог создан");
    } catch (error) {
        console.log('Ошибка при создании каталога: ' + error);
    }
}

readDirectory(dir, mk, 'newdir');

const rm = (newdir) => {
    try {
        fs.rmdirSync(newdir);
        console.log("Каталог удален");
    } catch (error) {
        console.log('Ошибка при удалении каталога: ' + error);
    }
}

readDirectory(dir, rm, 'newdir');
