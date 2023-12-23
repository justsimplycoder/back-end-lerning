<?php
/* Работа с XML файлами */

$writer = new XMLWriter();
// $writer->openUri($filePath);
$writer->openMemory();
$writer->setIndent(1);
$writer->setIndentString('    ');
$writer->startDocument('1.0', 'UTF-8');
$writer->startElement('Lines');
    $writer->startElement('Line');
    $writer->writeAttribute('Id', '1');
    $writer->text('one');
    $writer->endElement();

    $writer->startElement('Line');
    $writer->writeAttribute('Id', '2');
    $writer->text('two');
    $writer->endElement();
$writer->endElement();
$writer->endDocument();

$text_XML = $writer->outputMemory();
echo $text_XML;
/* ->
<?xml version="1.0" encoding="UTF-8"?>
<Lines>
    <Line Id="1">one</Line>
    <Line Id="2">two</Line>
</Lines>
*/

$file_patch = getcwd() . '/data.xml';

$file_XML = fopen($file_patch, "w") or die("не удалось создать файл");
fwrite($file_XML, $text_XML);
fclose($file_XML);

$xmlObj = simplexml_load_file($file_patch);

foreach ($xmlObj->Line as $line) {
	echo "value: $line[0], ";
	echo "id: " . $line->attributes()["Id"] . PHP_EOL;
}
/* ->
value: one, id: 1
value: two, id: 2
*/
 ?>