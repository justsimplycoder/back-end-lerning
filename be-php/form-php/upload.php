<!DOCTYPE html>
<html>
<head>
<title>Загрузка файла на сервер.</title>
<meta charset="utf-8" />
</head>
<body>
<?php
if ($_FILES && $_FILES["filename"]["error"] === UPLOAD_ERR_OK) {

    // Перемещение файла в папку upload
    $name = "upload/" . $_FILES["filename"]["name"];
    move_uploaded_file($_FILES["filename"]["tmp_name"], $name);

    $size = $_FILES['filename']['size'];
    $type = $_FILES['filename']['type'];
    echo "<h2>Файл загружен.</h2>";
    echo "<p>Размер файла: <strong>$size</strong>.<br>";
    echo "Тип загруженного файла: <strong>$type</strong>.</p>";
}
?>
<h1>Загрузка файла</h1>
<form method="post" enctype="multipart/form-data">
Выберите файл: <input type="file" name="filename" /><br /><br />
<input type="submit" value="Загрузить" />
</form>
</body>
</html>