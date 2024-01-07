const arr = "ананас, яблоко, вишня, персик".split(', ');
console.log(arr);
// -> [ 'ананас', 'яблоко', 'вишня', 'персик' ]
const str = arr.join('|');
console.log(str);
// -> ананас|яблоко|вишня|персик