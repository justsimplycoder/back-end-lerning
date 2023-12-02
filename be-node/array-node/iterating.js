const users = ["Tom", "Sam", "Bob", "Alice"];
for(let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
/* ->
Tom
Sam
Bob
Alice
*/
for (let value of users) {
    console.log(value);
}
/* ->
Tom
Sam
Bob
Alice
*/
const worker = {'job': 'programmer', 'skills': 'php', 'experience': 3};

for (let prop in worker) {
    if (worker.hasOwnProperty(prop)) {
        console.log(`${prop}: ${worker[prop]}`);
    }
}
/* ->
job: programmer
skills: php
experience: 3
*/