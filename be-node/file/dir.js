const fs = require("node:fs/promises");

const dir = __dirname;

async function readDirectory(dir) {
    try {
        const files = await fs.readdir(dir);
        for (const file of files) {
            const stat = await fs.stat(file);
            if(stat.isFile()) console.log(`фаил: ${file}`);
            else console.log(`каталог: ${file}`);
        }
    } catch (err) {
        console.error(err);
    }
}

(async () => {
    try {
        await fs.mkdir('newdir');
        console.log("Каталог создан");
    } catch (error) {
        console.log('Ошибка при создании каталога: ' + error);
    }

    await readDirectory(dir);

    try {
        await fs.rmdir('newdir');
        console.log("Каталог удален");
    } catch (error) {
        console.log('Ошибка при удалении каталога: ' + error);
    }

    await readDirectory(dir);
})();