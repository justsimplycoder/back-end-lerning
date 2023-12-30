const express = require("express");
const multer  = require("multer");

const app = express();

app.use(express.static(__dirname));

app.get("/", function (_, response) {
    response.sendFile(__dirname + "/upload.html");
});

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "upload");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

app.post("/upload", multer({storage: storageConfig}).single("filename"), function (req, res, next) {
    let filename = req.file;
    console.log(filename);
    if(!filename)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Сервер запущен на порту: ${port}`)
});