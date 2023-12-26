const express = require("express");

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function (_, response) {
    response.sendFile(__dirname + "/index.html");
});
app.post("/welcome", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`<h1>Привет ${request.body.lastname} ${request.body.firstname}!</h1>`);
});

app.listen(8000, ()=>console.log("Сервер запущен..."));