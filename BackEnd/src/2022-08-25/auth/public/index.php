<?php

session_start();

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

	if (isset($_SESSION['error'])) {
		unset($_SESSION['error']);
	}

	ob_end_flush();
} catch (Exception $e) {
	ob_end_clean();

	$errorCode = $e->getCode();
	$errorMessage = $e->getMessage();

	$isXMLHttpRequest = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';

	if ($isXMLHttpRequest) {
		ajaxResponse(status: FALSE, message: $errorMessage, httpResponseCode: $errorCode);
	} else {
		if (str_starts_with($errorCode, 4)) {
			$_SESSION['error'] = $errorMessage;
			http_response_code($errorCode);
			header('Location: ' . ($_SERVER['HTTP_REFERER'] ?? '/'));
		} else {
			http_response_code($errorCode);
			echo "Error: {$e->getMessage()}";
		}

		exit;
	}
}