<?php

class Car extends Vehicle
{
	function __construct(
		private float $weight,
		private int $passangers,
		private string $fuelType,
	)
	{
		parent::__construct('c');
	}

	public function getPriceForOneKm(): float
	{
		return 0.3;
	}

	public function getDistancePrice(int $kilometers): float
	{
		return ($this->weight / $this->passangers) * $kilometers * $this->getPriceForOneKm();
	}
}