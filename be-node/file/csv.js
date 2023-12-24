const fs = require("fs");
const csvParser = require("csv-parser");

// Запись CSV файла
const data = `id;name;age
1;Johny;45
2;Mary;20`;

let writer = fs.createWriteStream('file.csv', { encoding: "utf-8" });
writer.write(data);
writer.end();

writer.on("close", function() {
    console.log('...Done');
  })
  .on("error", function(err) {
    console.log(err);
  });

// Чтение CSV файла
const result = [];

const parser = csvParser({
  separator: ';'
});

fs.createReadStream("file.csv", { encoding: "utf-8" })
  .pipe(parser)
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", (err) => {
    if (err) console.log("An error has occurred");
    else console.log(result);
  })
  .on("error", (error) => {
    console.log(error);
  });