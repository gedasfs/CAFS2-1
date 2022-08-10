<?php

$text = $_GET['text'] ?? 'Hello World';
 
$image = imagecreate(300,75);

$color = imagecolorallocate($image, 200,200,200);
$colorBlue = imagecolorallocate($image, 0,0,255);

imagestring($image, 2, 10, 30, $text, $colorBlue);

header('Content-type: image/jpeg');
imageJpeg($image);

imagedestroy($image);