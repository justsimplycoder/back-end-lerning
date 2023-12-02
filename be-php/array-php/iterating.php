<?php
$users = ["Tom", "Sam", "Bob", "Alice"];
$num = count($users);
for($i=0; $i < $num; $i++)
{
    echo "$users[$i]".PHP_EOL;
}
/* ->
Tom
Sam
Bob
Alice
*/
foreach ($users as $value)
{
    echo "$value".PHP_EOL;
}
/* ->
Tom
Sam
Bob
Alice
*/
$worker = ['job' => 'programmer', 'skills' => 'php', 'experience' => 3];
foreach ($worker as $key => $value) {
    echo "$key: $value".PHP_EOL;
}
/* ->
job: programmer
skills: php
experience: 3
*/
?>