<?php

require_once 'classes/Person.php';
require_once 'classes/Student.php';
require_once 'classes/Worker.php';
require_once 'classes/Driver.php';

// Sukurkite klasę User su viešai neprienamom savybėm: name, age ir viešai prieinamais metodas: setName, getName, setAge, getAge.
	
// Sukurkite klasę Worker, kuri paveldės User klasę ir įneš papildomą viešai neprienamą savybę salary ir viešai prieinamus metodus getSalary ir setSalary.
	
// Sukurkite klasę Student, kuri paveldės User klasę ir įneš papildomas viešais neprienamas savybes stipendija, kursas bei jiems reikalingus metodus
	
// Sukurkite klasę Driver, kuri paveldėtų Worker klasę ir įneštų papildomas savybes: vairavimo patirtis, vairavimo kategorija (A, B, C).


$student = new Student('Kir', 32, 2, 300);

var_dump($student);
var_dump($student->getName());
var_dump($student->getAge());

$driver = new Driver('Tom', 30, 10, ['A', 'B']);

var_dump($driver);
var_dump($driver->getName());
var_dump($driver->getAge());
var_dump($driver->getSalary());