const express = require("express");

const app = express();

const urlencodedParser = express.urlencoded({extended: false});

app.set("view engine", "ejs");

app.get("/complex", function(request, response){
    if(!request.body) return response.render("complex", {
        requestMethod: "GET",
    });
});
app.post("/complex", urlencodedParser, function(request, response){
    response.render("complex", {
        requestMethod: "POST",
        firstname: request.body.firstname,
        eduform: request.body.eduform || 'очно',
        hostel: request.body.hostel === 'on' ? 'да' : 'нет',
        courses: request.body.courses,
        comment: request.body.comment
    });
});
app.get("/", function(request, response){
    response.send("Главная страница");
});
app.listen(8000);