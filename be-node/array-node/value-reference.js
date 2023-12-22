/* В JavaScript массивы передаются по ссылке */

const arr = [1, 2];

const arrCopy = [...arr];
const arrRef = arr;

arrCopy[0] = 111;
arrRef[1] = 222;

console.log(arr);
// -> [ 1, 222 ]