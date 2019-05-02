<?php
$fp = fopen('text.txt', 'w');
fwrite($fp, $_POST['message']);
fclose($fp);