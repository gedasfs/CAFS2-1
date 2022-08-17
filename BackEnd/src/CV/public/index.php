<?php

define('ROOT_PATH', dirname(__DIR__));

ini_set('error_reporting', E_ALL);

ini_set('log_errors', 1);
ini_set('error_log', sprintf('%s/logs/error-%s.log', ROOT_PATH, date('Y-m-d')));

ob_start();

try {
	$envFilePath = ROOT_PATH . '/.env';

	if (file_exists($envFilePath)) {
		define('ENV', parse_ini_file($envFilePath));
	} else {
		throw new Exception('Env file not found');
	}

	require_once ROOT_PATH . '/src/helpers.php';

	if (env('APP_DEBUG', FALSE)) {
		ini_set('display_errors', 1);
		ini_set('log_errors', 0);
	} else {
		ini_set('display_errors', 0);
	}
	
	require_once ROOT_PATH . '/src/router.php';

	ob_end_flush();
} catch (Exception $e) {
	ob_end_clean();

	$code = $e->getCode();
	$message = $e->getMessage();

	$isXMLHttpRequest = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';

	if ($code == 404) {
		if ($isXMLHttpRequest) {
			ajaxResponse([], FALSE, $e->getMessage(), 404);
		} else {
			http_response_code(404);
		}
	} else {
		if ($isXMLHttpRequest) {
			ajaxResponse(status: FALSE, message: $e->getMessage(), httpResponseCode: 500);
		} else {
			http_response_code(500);
			echo "Error: {$e->getMessage()}";
		}
	}

	exit;
}