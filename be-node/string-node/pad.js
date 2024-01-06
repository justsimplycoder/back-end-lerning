let str = "JavaScript";
console.log(str.padEnd(13)); // -> JavaScript...
console.log(str.padStart(13, "-=")); // -> -=-JavaScript

function pad(str, len, padStr) {
	let pad = len - str.length;
	if(len <= str) return str;
	let leftPad = Math.floor(pad / 2);
	let rightPad = len - leftPad - str.length;
	return padStr.repeat(leftPad) + str + padStr.repeat(rightPad);
}
console.log(pad(str, 17, "_")); // -> ___JavaScript____
