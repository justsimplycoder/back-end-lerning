const date = new Date();

const formatter = (val) => val < 10 ? '0' + val : val;
let day = formatter(date.getDate());
const month = formatter(date.getMonth() + 1);
console.log(`${day}.${month}.${date.getFullYear()}`);
date.setDate(date.getDate() + 1);
day = formatter(date.getDate());
console.log(`${day}.${month}.${date.getFullYear()}`);
