<?php

$image = imagecreatefromjpeg('background.jpeg');
$watermarkImage = imagecreatefrompng('watermark.png');

$margeRight = 10;
$margeBottom = 10;

$watermarkImageWidth = imagesx($watermarkImage);
$watermarkImageHeight = imagesy($watermarkImage);

imagecopy(
	$image,
	$watermarkImage,
	
	imagesx($image) - $watermarkImageWidth - $margeRight,
	imagesy($image) - $watermarkImageHeight - $margeBottom,

	0,
	0,

	imagesx($watermarkImage),
	imagesy($watermarkImage)
);

$fontPath = './open-sans/OpenSans-ExtraBoldItalic.ttf';

$text = 'This is rabbit!';
$colorRed = imagecolorallocate($image, 255, 0, 0);

imagettftext($image, 25, 50, 25, 170, $colorRed, $fontPath, $text);

header('Content-type: image/png');
imagepng($image);

imagedestroy($image);
imagedestroy($watermarkImage);