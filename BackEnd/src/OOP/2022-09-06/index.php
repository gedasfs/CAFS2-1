<?php

require_once __DIR__ . '/classes/User.php';

// Non-static
$names = ['A', 'B', 'C'];

// User::setAge(122);

foreach ($names as $name) {
	$user = new User();

	// $user->name = 'Kiril';
	$user->setName($name);

	// var_dump($user->name);
	var_dump($user->getGreetings());	
}

// Static
User::setAge(32);

var_dump(User::$age);


// Const
var_dump(User::PROFESSION);
var_dump(User::CLASS);