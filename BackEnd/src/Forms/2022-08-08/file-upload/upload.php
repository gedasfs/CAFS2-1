<?php

// var_dump($_FILES);

define('UPLOAD_DIR', dirname(__FILE__) . '/uploads');
define('ALLOWED_EXTENSIONS', ['png', 'jpg', 'jpeg']);

// move_uploaded_file($_FILES['some-file-name']['tmp_name'], UPLOAD_DIR . '/' . $_FILES['some-file-name']['name']);

// https://stackoverflow.com/questions/4356289/php-random-string-generator
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}

if (isset($_FILES['some-file-name'])) {
	$file = $_FILES['some-file-name'];

	if ($file['error'] == UPLOAD_ERR_OK) {
		$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
		$ext = strtolower($ext);

		if (!in_array($ext, ALLOWED_EXTENSIONS)) {
			echo 'File ext not allowed';

			exit;
		}

		$path = UPLOAD_DIR . '/' . date('Y/m/d');

		if (!is_dir($path)) {
			mkdir($path, 0777, TRUE);
		}

		do {
			$name = generateRandomString(16);

			$path = sprintf('%s/%s.%s', $path, $name, $ext);
		} while (file_exists($path));

		move_uploaded_file($file['tmp_name'], $path);
	}
}