<!DOCTYPE html>
<html>
<head>
<title>Комплексная форма. </title>
<meta charset="utf-8" />
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST["firstname"]) &&
       isset($_POST["eduform"]) &&
       isset($_POST["courses"])
    ) {
        $name = $_POST["firstname"];
        $eduform = $_POST["eduform"];
        $hostel = "нет";
        if(isset($_POST["hostel"])) $hostel = "да";
        $courses = $_POST["courses"];
        $output ="
        <h2>Данные сохранены</h2>
        <p>Вас зовут: $name<br />
        Форма обучения: $eduform<br />
        Требуется общежитие: $hostel<br /></p>
        <p>Выбранные курсы:</p>
        <ul>";
        foreach($courses as $item)
            $output.="<li>" . $item . "</li>";
        $output.="</ul>";
        if($_POST['comment']) {
            $comment = $_POST['comment'];
            $output .= "<p>Дополнительные комментарии: $comment</p>";
        }
        echo $output;
    } else {
        echo "Введенные данные некорректны";
    }
}
?>
<h1>Пример формы</h1>
<h2>Анкета</h2>
<form  method="POST">
<p>Введите имя:<br>
<input type="text" name="firstname" /></p>
<p>Форма обучения: <br>
<input type="radio" name="eduform" value="очно" checked />очно <br>
<input type="radio" name="eduform" value="заочно" />заочно </p>
<p>Требуется общежитие:<br>
<input type="checkbox" name="hostel" />Да</p>
<p>Выберите курсы: <br>
<select name="courses[]" size="5" multiple="multiple">
    <option value="ASP.NET">ASP.NET</option>
    <option value="PHP">PHP</option>
    <option value="Ruby">RUBY</option>
    <option value="Python">Python</option>
    <option value="Java">Java</option>
</select></p>
<p>Краткий комментарий: <br>
<textarea name="comment" maxlength="200"></textarea></p>
<input type="submit" value="Отправить">
</form>
</body>
</html>