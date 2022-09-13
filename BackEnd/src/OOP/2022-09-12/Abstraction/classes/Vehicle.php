<?php

abstract class Vehicle
{
	abstract public function getDistancePrice(int $kilometers): float;
	abstract public function getPriceForOneKm(): float;

	function __construct($char = null)
	{
		if ($char) {
			var_dump($char);
		}
	}

	public function getClassName() {
		return static::class;
	}
}