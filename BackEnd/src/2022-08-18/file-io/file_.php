<?php

$data = file_get_contents('./data/posts.json');
$data = json_decode($data, TRUE);

// var_dump($data);

// ----------------- //

$user = [
	'name' => 'K',
	'surname' => 'C',
	'age' => 31
];

file_put_contents(__DIR__ . '/data/user.json', json_encode($user));

// ------------------ //

$data = file_get_contents('https://jsonplaceholder.typicode.com/users');
$data = json_decode($data, TRUE);

// var_dump($data);

file_put_contents(__DIR__ . '/data/users', serialize($data));
