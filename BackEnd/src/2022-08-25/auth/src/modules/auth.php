<?php

if (isset($_SESSION['user'])) {
	redirectTo('/?module=profile');
}

if (empty($_POST['username']) || empty($_POST['password'])) {
	throw new Exception('Fill all fileds', 422);
}

$filePath = ROOT_PATH . '/' . env('USERS_FILE');

if (!is_file($filePath)) {
	throw new Exception('File not found', 500);
}

$users = file_get_contents($filePath);
$users = json_decode($users, TRUE);

foreach ($users['users'] as $user) {
	if (
		($user['username'] == $_POST['username'] || $user['email'] == $_POST['username'])
		&&
		$user['password'] === md5($_POST['password'])
	) {
		$_SESSION['user'] = $user;
		$_SESSION['time'] = time();

		redirectTo('/?module=profile');
	}
}

throw new Exception('Credentials not found', 401);
