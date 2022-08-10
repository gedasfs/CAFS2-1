<?php

$text = $_GET['text'] ?? 'Hello World';
 
$image = imageCreate(300,75);

$color = imageColorAllocate($image, 200,200,200);
$colorBlue = imageColorAllocate($image, 0,0,255);

imageString($image, 2, 10, 30, $text, $colorBlue);

header('Content-type: image/jpeg');
imageJpeg($image);

imageDestroy($image);