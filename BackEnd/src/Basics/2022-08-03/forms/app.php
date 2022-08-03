<?php

// // https://www.php.net/manual/en/reserved.variables.server.php
// var_dump($_SERVER);
var_dump($_SERVER['HTTP_USER_AGENT']);
// https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.coalesce
var_dump($_SERVER['HTTP_X_REQUESTED_WITH'] ?? null);

// // https://www.php.net/manual/en/reserved.variables.request.php
// var_dump($_REQUEST);
// var_dump($_REQUEST['name']);
// var_dump($_REQUEST['age']);

// https://www.php.net/manual/en/reserved.variables.get.php
var_dump(['_GET' => $_GET]);

// https://www.php.net/manual/en/reserved.variables.post.php
var_dump(['_POST' => $_POST]);

if (isset($_POST['name'])) {
	var_dump($_POST['name']);
}

// var_dump($_POST['test']);

if (isset($_POST['test'])) {
	var_dump($_POST['test']);
}

var_dump($_SERVER['REQUEST_METHOD']);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// var_dump($_SERVER['CONTENT_TYPE']);
	
	if ($_SERVER['CONTENT_TYPE'] == 'application/json') {
		$foo = file_get_contents('php://input');

		var_dump(json_decode($foo, true));
	}
}