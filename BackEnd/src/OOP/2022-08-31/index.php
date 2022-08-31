<?php

require_once __DIR__ . '/classes/User.php';

$userAnonym = new User('a');
$user = new User('K', 'Ch');

var_dump($userAnonym);
var_dump($user);

$user->useConstants();

var_dump(User::CONSTANT);
var_dump(User::CONSTANT_ONE);
var_dump(User::CONSTANT_ARR);

echo "Hello World 1\n";
echo "Hello World 2\n";

unset($userAnonym);

echo "Hello World 3\n";
echo "Hello World 4\n";
echo "Hello World 5\n";
unset($user);
echo "Hello World 6\n";