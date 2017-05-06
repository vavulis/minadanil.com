<? 

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['subject1'])) {$subject1 = $_POST['subject1'];}
if (isset($_POST['text_message'])) {$text_message = $_POST['text_message'];}


$name = stripslashes($name);

$subject1 = stripslashes($subject1);

$adres = stripslashes($adres);

$tel = stripslashes($tel);

$subject4 = stripslashes($subject4);



$name = htmlspecialchars($name);

$subject1 = htmlspecialchars($subject1);

$adres = htmlspecialchars($adres);

$tel = htmlspecialchars($tel);

$subject4 = htmlspecialchars($subject4);


$email = stripslashes($email);

$text_message = stripslashes($text_message);


$email = htmlspecialchars($email);

$text_message = htmlspecialchars($text_message);






$address = "gg.style@mail.ru"; // ЗДЕСЬ ВВОДИТЕ СВОЙ EMAIL

$message = "Имя: ".$name."\nМой контактный e-mail: ".$email."\nТема: ".$subject1."\nСообщение: ".$text_message."";

$verify = mail($address,$subject,$message,"Content-type:text/plain; Charset=utf-8\r\n");


if ($verify == 'true')
{
echo "
 <div>Ваша заявка принята. Наши менеджеры свяжутся с Вами в ближайшее время.</div>
";
}
else 
{
echo "
 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
";
}
?>