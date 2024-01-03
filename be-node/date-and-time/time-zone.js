const date = new Date();
// Изменение timezone
let formatterUTC = new Intl.DateTimeFormat('en-US', {
	timeZone: "UTC",
	timeZoneName: 'long',
	hour: 'numeric',
	hour12: false
});
console.log(formatterUTC.format(date));

let formatterSamara = new Intl.DateTimeFormat('en-US', {
	timeZone: "Europe/Samara",
	timeZoneName: 'long',
	hour: 'numeric',
	hour12: false
});
console.log(formatterSamara.format(date));
// Смещение часового пояса относительно UTC+0
console.log(`Смещение: ${date.getTimezoneOffset() / 60}`);
