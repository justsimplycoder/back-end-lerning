const fs = require("node:fs");

// Первый способ
fs.access("lol.txt", function(error){
    if (error) {
        console.log("Файл не найден");
    } else {
        console.log("Файл найден");
    }
});

// Второй способ
fs.stat("lol.txt", function(err, stats) {
    if (err) {
        console.log("Файл не найден");
    } else {
        console.log("Файл найден");
    }
});
