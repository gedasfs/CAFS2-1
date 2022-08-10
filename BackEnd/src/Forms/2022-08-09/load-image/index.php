<?php

define('UPLOAD_DIR', dirname(__FILE__) . '/uploads');

// http://localhost/Forms/2022-08-09/photo-upload/uploads/2022/08/09/tnYRYBONgSm7eNr3.jpg
// http://localhost/Forms/2022-08-09/load-image/index.php?name=GWpJ1DSMcJVnWiqN.jpg

if (isset($_GET['name'])) {
	$date = isset($_GET['date']) ? $_GET['date'] : date('Y-m-d');
	$date = str_replace('-', '/', $date);

	$filePath = sprintf('%s/%s/%s', UPLOAD_DIR, $date, $_GET['name']);

	if (is_file($filePath)) {
		header('Content-Type: ' . mime_content_type($filePath));
		header('Content-Length: ' . filesize($filePath));

		readfile($filePath);
	} else {
		http_response_code(404);
	}

	exit;
}