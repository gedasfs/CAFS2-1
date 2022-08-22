<?php

$data = file_get_contents('https://randomuser.me/api/?results=5');
$data = json_decode($data, TRUE);

// var_dump($data);

$fp = fopen(__DIR__ . '/data/converted-straight.csv', 'w');

fputcsv($fp, array_keys($data['results'][0]));

foreach ($data['results'] as $userData) {
	$userDataParsed = array_map(function($value) {
		return is_array($value) ? json_encode($value) : $value;
	}, $userData);

	// var_dump($userData, $userDataParsed);

    fputcsv($fp, $userDataParsed);
}

fclose($fp);