<?php

abstract class Vehicle
{
	abstract public function getDistancePrice(int $kilometers): float;
	abstract public function getPriceForOneKm(): float;
}