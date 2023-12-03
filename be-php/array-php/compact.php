<?php
$city  = "San Francisco";
$state = "CA";
$event = "SIGGRAPH";

$result = compact("city", "state", 'event');
print_r($result);
/* ->
Array
(
    [city] => San Francisco
    [state] => CA
    [event] => SIGGRAPH
)
*/
?>