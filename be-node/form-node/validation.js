const express = require("express");
const { check, validationResult, matchedData } = require('express-validator');
const bodyparser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: false }));

app.get("/validation", function(request, response){
    response.render("validation");
});

const validationRules = [
    check('name').trim().notEmpty().withMessage('Поле name обязательно')
        .matches(/^[a-zA-Z-' ]*$/).withMessage('Имя должно содержать только английские буквы и пробелы'),
    check('email').trim().notEmpty().withMessage('Поле email обязательно')
        .normalizeEmail().isEmail().withMessage('Некорректный email'),
    check('website').isURL().withMessage('Некорректный URL'),
    check('comment').trim(),
    check('gender').notEmpty().withMessage('Нужно выбрать пол'),
];

app.post("/validation", validationRules, function(request, response){
    const errors = validationResult(request);
    const inputData = matchedData(request);
    if (!errors.isEmpty()) {
        console.log(errors.mapped());
        console.log(inputData);
        response.render("validation", { errors: errors.mapped(), inputData });
    } else {
        console.log(inputData);
        response.render("validation", { inputData });
    }
});

app.listen(8000, () => console.log('Сервер запущен!'));