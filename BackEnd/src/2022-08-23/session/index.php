<?php

// session_save_path(__DIR__ . '/data');

session_start();

// $_SESSION['user'] = [
// 	'HTTP_USER_AGENT' => $_SERVER['HTTP_USER_AGENT']
// ];
// 
$sessArr = [];

var_dump([
	'cookie' => $_COOKIE,
	'session' => $_SESSION
]);

// $_SESSION['foo'] = 'bar';

// sleep(10);

