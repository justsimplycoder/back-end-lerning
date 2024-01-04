const os = require('node:os');

// Перенос строки в Windows и POSIX
const str_eol = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." + os.EOL + " Aenean commodo ligula eget dolor.";

console.log(str_eol);
