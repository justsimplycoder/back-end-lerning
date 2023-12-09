const fs = require('node:fs');
const { execSync } = require("child_process");

const sleep = (millis) => {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + millis) {}
};

fs.open('unlink.html', 'w', (err) => {
    if(err) throw err;

    // Задержка на 2 секунды
    sleep(2000);

    fs.unlink('unlink.html', (err) => {
        if (err) throw err;
    });
});
