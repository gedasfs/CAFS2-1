<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$input = [];

	// REQUEST HANDLE
	if ($_SERVER['CONTENT_TYPE'] == 'application/json') {
		$inputJSON = file_get_contents('php://input');

		$input = json_decode($inputJSON, TRUE);
	} else if (strpos($_SERVER['CONTENT_TYPE'], 'multipart/form-data') !== FALSE) {
		$input = $_POST;

		require_once 'upload.php';

		if (isset($downloadFilePath)) {
			$input['photo'] = $downloadFilePath;
		}
	}

	// RESPONSE HANDLE
	http_response_code(200);

	echo json_encode(['message' => 'User saved seccesfully', 'data' => $input]);

	exit;
}

require_once 'views/index.phtml';