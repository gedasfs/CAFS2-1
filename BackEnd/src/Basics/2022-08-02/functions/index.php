<?php

$name = 'Kiril';

// function FunctionName()
// {
// 	var_dump($name);
// }

// FunctionName();

// https://www.php.net/manual/en/functions.anonymous.php
$varFunction = function($name)
{
	var_dump($name);
};

$varFunction($name);

function getBonus()
{
	return 30;
}

$workers = [
	[
		'name' => 'a',
		'salary' => 410
	],
	[
		'name' => 'b',
		'salary' => 420
	],
	[
		'name' => 'c',
		'salary' => 430
	]
];

$bonus = getBonus();

// https://www.php.net/manual/en/functions.anonymous.php#example-184
$workersWithBonus = array_map(function($worker) use($bonus)
{
	$worker['salary'] += $bonus;

	return $worker;
}, $workers);

var_dump($workersWithBonus);

// https://www.php.net/manual/en/functions.arrow.php
$workersWithBonusArrow = array_map(fn($worker) => $worker['salary'] += $bonus, $workers);

var_dump($workersWithBonusArrow);

// https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments
function createUser($name, $surname = null, $address = null, $city = null, $email = null, $phone = null)
{
	// https://www.php.net/manual/en/function.compact.php
	return compact('name', 'surname', 'address', 'city', 'email', 'phone');
}

var_dump(createUser('Kiril', null, null, null, 'hello@nonamez.name'));
var_dump(createUser('Kiril', 'hello@nonamez.name'));
var_dump(createUser('Kiril', email:'hello@nonamez.name'));
var_dump(createUser('Kiril', phone:'+370612345678'));