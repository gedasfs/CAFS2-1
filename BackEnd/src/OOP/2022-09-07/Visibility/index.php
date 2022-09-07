<?php

// https://www.php.net/manual/en/language.oop5.visibility.php

require_once __DIR__ . '/classes/User.php';
require_once __DIR__ . '/classes/Visibility.php';


$visibility = new Visibility();

$visibility->show();

var_dump($visibility->public);
// var_dump($visibility->protected); // Fatal error: Uncaught Error: Cannot access protected property Visibility::$protected
// var_dump($visibility->private); // Fatal error: Uncaught Error: Cannot access private property

$user = new User('kiril', 'CH');

$user->setLastName('CH');

$user->firstName = 'k';

var_dump($user);