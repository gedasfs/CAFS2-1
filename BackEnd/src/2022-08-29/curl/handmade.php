<?php

// $data = file_get_contents('https://www.15min.lt');

// file_put_contents(__DIR__ . '/data/15min.html', $data);

// echo $data;

// https://www.php.net/manual/en/function.curl-init.php

$url = 'https://api.meteo.lt/v1/places/vilnius/forecasts/long-term';

// create a new cURL resource
$ch = curl_init($url);

// set URL and other appropriate options
// curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER	, true);

// grab URL and pass it to the browser
$response = curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);

var_dump($response);
exit;

// list($headers, $body) = explode("\r\n\r\n", $response);
[$headers, $body] = explode("\r\n\r\n", $response);

// var_dump($headers, $body);

$data = json_decode($body, true);

// var_dump($data);

$headers = explode("\n", $headers);

array_shift($headers);

$headers = array_map(function($h) {
	return explode(':', $h);
}, $headers);

var_dump($headers);
