<?php

require_once 'interfaces/Teachable.php';

require_once 'classes/Academy.php';
require_once 'classes/Person.php';
require_once 'classes/persons/Student.php';
require_once 'classes/persons/Worker.php';
require_once 'classes/animals/Cat.php';
require_once 'classes/animals/Chimpanzee.php';

$academy = new Academy();

// $academy->add([
// 	'name' => 'K',
// 	'age' => 30
// ]);

// $academy->add([
// 	'name' => 'A',
// 	// 'age' => 29
// ]);

// $academy->add([
// 	// 'name' => 'B',
// 	'age' => 37
// ]);

$s = new Student('K', 30, 1);
$w = new Worker('K', 30, 1);
$c = new Cat();
$ch = new Chimpanzee();

$academy->add($s);
$academy->add($w);
// $academy->add($c);
$academy->add($ch);

var_dump($academy->getAll());