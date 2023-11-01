const records = [
    {
        'id': 2135,
        'first_name': 'John',
        'last_name': 'Doe',
    },
    {
        'id': 3245,
        'first_name': 'Sally',
        'last_name': 'Smith',
    },
    {
        'id': 5342,
        'first_name': 'Jane',
        'last_name': 'Jones',
    },
    {
        'id': 5623,
        'first_name': 'Peter',
        'last_name': 'Doe',
    }
];

console.log(
    records.map(el => el.first_name)
);
// -> [ 'John', 'Sally', 'Jane', 'Peter' ]
console.log(
    records.map(el => ({[el.id]: el.last_name}))
);
/* ->
[
  { '2135': 'Doe' },
  { '3245': 'Smith' },
  { '5342': 'Jones' },
  { '5623': 'Doe' }
]
*/