/* Переименовывание/перемещение файла */
const fs = require('node:fs');

fs.rename('hello.txt', 'subdir/hello.txt', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("\nFile Renamed\n");
  }
});