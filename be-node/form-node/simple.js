const http = require("node:http");
const fs = require("node:fs");
  
http.createServer(async (request, response) => {
    if(request.url == "/welcome"){
        let body = "";   // буфер для получаемых данных
        // получаем данные из запроса в буфер
        for await (const chunk of request) {
            body += chunk;
        }

        let lastname = "";
        let firstname = "";

        // разбиваем запрос на параметры по символу &
        const params = body.split("&");
        // проходим по всем параметрам и определяем их значения
        for(param of params){
            // разбиваем каждый параметр на имя и значение
            const [paramName, paramValue] = param.split("=");
            if(paramName === "lastname") lastname = paramValue;
            if(paramName === "firstname") firstname = paramValue;
        }
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
        }).end(`<h1>Привет ${lastname} ${firstname}!</h1>`);
    } else {
        fs.readFile("index.html", (_, data) => response.end(data));
    }
}).listen(8000, ()=>console.log("Сервер запущен по адресу http://localhost:8000"));