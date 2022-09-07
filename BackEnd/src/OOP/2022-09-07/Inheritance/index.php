<?php

require_once __DIR__ . '/classes/Animal.php';
require_once __DIR__ . '/classes/Rabbit.php';
require_once __DIR__ . '/classes/Cat.php';
require_once __DIR__ . '/classes/Dog.php';
require_once __DIR__ . '/classes/Parrot.php';

var_dump(Parrot::class);

$animals = [
	new Rabbit('White Rabbit', 'tttttt'),
	new Cat('Pukis'),
    new Dog('Brisius', 'auauauaua'),
    new Dog('Reksas', 'AUAUAUAUA'),
    new Parrot('Kiesha', 'tttttt'),
    new Parrot('Kiesha', 'Miau'),
    new Parrot('Kiesha', 'auauauaua'),
    new Parrot('Kiesha', 'AUAUAUAUA'),
    new Parrot('Kiesha'),
];

foreach ($animals as $animal) {
	// var_dump($animal, $animal->getSound());

	// $animal->createdAt = $animal->createdAt + 100*700;

	// var_dump($animal->getSound(), date('Y-m-d H:i:s', $animal->getCreatedTime()));
	var_dump($animal->getLifeTime());


}