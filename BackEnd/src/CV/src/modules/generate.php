<?php

$ALLOWED_EXTENSION = env('FILE_UPLOAD_ALLOWED_EXTENSIONS', 'png,jpg,jpeg');
$ALLOWED_EXTENSION = explode(',', $ALLOWED_EXTENSION);

$REQUIRED_FIELDS = ['name', 'surname', 'lang'];

$errors = [];

foreach ($REQUIRED_FIELDS as $field) {
	if (empty($_POST[$field])) {
		$errors[$field] = 'Filed muts not be empty';
	}
}

if (!isset($_FILES['photo'])) {
	$errors['photo'] = 'Photo required';
} else {
	$photo = $_FILES['photo'];

	$ext = pathinfo($photo['name'], PATHINFO_EXTENSION);
	$ext = strtolower($ext);

	if (!in_array($ext, $ALLOWED_EXTENSION)) {
		$errors['photo'] = 'File not alllowed';
	}
}

if (count($errors)) {
	ajaxResponse($errors, FALSE, 'Validation problems', 422);
}

if ($ext == 'jpg' || $ext == 'jpeg') {
	$photoResource = imagecreatefromjpeg($photo['tmp_name']);
} else {
	$photoResource = imagecreatefrompng($photo['tmp_name']);
}

$background = imagecreate(env('BACKGROUND_WIDTH', 500), env('BACKGROUND_HEIGHT', 500));

// Set the margins for the stamp and get the height/width of the stamp image
$margeRight = env('MARGE_RIGHT', 10);
$margeBottom = env('MARGE_BOTTOM', 10);

$sx = imagesx($photoResource);
$sy = imagesy($photoResource);

$white = imagecolorallocate($background, 255, 255, 255);
$red = imagecolorallocate($background, 255, 0, 0);

imagecopy(
	$background, $photoResource, 
	imagesx($background) - $sx - $margeRight, imagesy($background) - $sy - $margeBottom, 
	0, 0, 
	imagesx($photoResource), imagesy($photoResource)
);

// Set Path to Font File
$fontPath = ROOT_PATH . env('FONT');

$y = 25;

foreach ($REQUIRED_FIELDS as $field) {
	$text = $field . ': ' . (is_array($_POST[$field]) ? implode(',', $_POST[$field]) : $_POST[$field]);

	imagettftext($background, 10, 0, 25, $y, $red, $fontPath, $text);

	$y += 25;
}

$name = generateRandomString(16);

$date = date('Y/m/d');

$path = ROOT_PATH . '/profiles/' . $date;

if (!is_dir($path)) {
	mkdir($path, 0777, TRUE);
}

$path = sprintf('%s/%s.%s', $path, $name, $ext);

imagepng($background, $path);
imagedestroy($background);

$path = str_replace(ROOT_PATH, '', $path);

ajaxResponse([
	'php' => sprintf('http://%s/?module=load&name=%s.%s&date=%s', env('APP_URL', 'localhost'), $name, $ext, str_replace('/', '-', $date)),

	// https://en.wikipedia.org/wiki/Symbolic_link
	// ln -s /var/www/CV/profiles /var/www/CV/profiles
	'nginx' => sprintf('http://%s%s', env('APP_URL', 'localhost'), $path),
]);