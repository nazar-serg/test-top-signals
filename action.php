<?php
if(isset($_POST['submit'])){

    $create_date = date_create();
    $get_date = "Дата: " . date_format($create_date, 'd-m-Y H:i:s');

    $name = "Имя: ".$_POST['name'];
    $email = "Email: ".$_POST['email'];
    $phone = "Телефон: ".$_POST['phone'];
    $file=fopen("leads.txt", "a");

    fwrite($file, $get_date ."\n");
    fwrite($file, $name ."\n");
    fwrite($file, $email ."\n");
    fwrite($file, $phone ."\n");
    fwrite($file, "\n");
    fclose($file);
    
    echo 'Отправлено успешно';

}