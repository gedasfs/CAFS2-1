<?php

$hello = 'hello';

$arr = [1, 2, 3, 4, 'a', 'b', $hello];

// echo $arr; // Warning

var_dump($arr);
// print_r($arr);

$arr[7] = 123;

var_dump($arr);

$arr = [
	0 => 2,
	2 => 'a',
	5 => 123
];

var_dump($arr);
var_dump($arr[1] ?? 'not found');

$user = [
	'name' => 'Kiril',
	'surname' => 'Clk',
	'age' => 31
];

var_dump($user);
var_dump($user['name']);