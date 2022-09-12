<?php

require_once 'classes/Vehicle.php';

require_once 'classes/Boat.php';
require_once 'classes/Car.php';
require_once 'classes/Plane.php';


$plane = new Plane(1000, 3, 'diesel');
$car   = new Car(1000, 4, 'electrical');
$boat  = new Boat(1000, 2, 'wind');

// Vilnius - Kaunas 200km
var_dump(
	$plane->getDistancePrice(200),
	$car->getDistancePrice(200),
	$boat->getDistancePrice(200),
);

// new Vehicle;