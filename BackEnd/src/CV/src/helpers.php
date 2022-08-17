<?php

if (!function_exists('env')) {
	function env($key, $default = NULL)
	{
		if (array_key_exists($key, ENV)) {
			return ENV[$key];
		}

		return $default;
	}
} else {
	throw new Exception('"env" alerdy exists');
	
}

if (!function_exists('dd')) {
	function dd() {
		array_map(function($x) {
			var_dump($x);
		}, func_get_args());

		die(0);
	}
}

if (!function_exists('asset')) {
	function asset($asset) {
		$manifestPath = ROOT_PATH . '/public/mix-manifest.json';

		if (!is_file($manifestPath)) {
			throw new Exception('Manifest file not found', 500);
		}

		$manifest = file_get_contents($manifestPath);
		$manifest = json_decode($manifest, TRUE);

		if (is_array($manifest) && array_key_exists($asset, $manifest)) {
			return $manifest[$asset];
		}

		throw new Exception('Asset in manifest file not found', 500);
	}
}

if (!function_exists('generateRandomString')) {
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
}

if (!function_exists('ajaxResponse')) {
	function ajaxResponse($data = NULL, bool $status = TRUE, string $message = NULL, int $httpResponseCode = 200)
	{
		$data = [
			'data'    => $data,

			'status'  => $status,
			'message' => $message,
		];

		header('Content-type: application/json');

		http_response_code($httpResponseCode);

		echo json_encode($data);

		exit;
	}
}