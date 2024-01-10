let express = require("express");
let cookieParser = require("cookie-parser");

let app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("name", "Tom");
  res.cookie("age", 36, { maxAge: 10000 }); // время жизнки куки 10 секунд
  res.cookie("lang", ['PHP', 'C#', 'JavaScript']);
  res.send("Куки установлены!");
});

app.get("/echo-cookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/delete-cookie", (req, res) => {
	res.clearCookie("name");
	res.send("Куки name удалена");
});

app.listen(8000, (err) => {
  if (err) throw err;
  console.log("listening on port 8000");
});