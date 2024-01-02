const date = new Date();

// Возвращает количество секунд с 1-го января 1970г. в формате timestamp
console.log(Date.now());
console.log(new Date().getTime());
// new Date(year, month, date, hours, minutes, seconds, ms)
// Возвращает разницу в секундах между 1970 годом и 31.12.2025, 12:59:59:
console.log(new Date(Date.UTC(2025, 11, 31, 12, 59, 59)).getTime());
// Возвращает дату в заданном формате
// (UTC+4) Samara
const d = new Date();
const formatter = (val) => val < 10 ? '0' + val : val;
const hours = formatter(d.getHours());
const minutes = formatter(d.getMinutes());
const seconds = formatter(d.getSeconds());
const day = formatter(d.getDate());
const month = formatter(d.getMonth() + 1);
console.log(`${hours}:${minutes}:${seconds} ${day}.${month}.${d.getFullYear()}`);
// (UTC+0)
const hoursUTC = formatter(d.getUTCHours());
console.log(`${hoursUTC}:${minutes}:${seconds} ${day}.${month}.${d.getFullYear()}`);
// Парсинг даты
console.log(Date.parse('2023-12-31'));
// Разница дат
const date1 = new Date('2025-12-31');
const date2 = new Date('2026-01-05');
const diff = Math.floor((date2-date1)/(24*3600*1000));
console.log(`${diff} дней`);