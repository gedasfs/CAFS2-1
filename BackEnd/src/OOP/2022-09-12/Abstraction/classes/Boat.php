<?php

class Boat extends Vehicle {

	function __construct(
		private float $weight,
		private int $sails,
		private string $fuelType,
	)
	{
		parent::__construct('b');
	}

	public function getPriceForOneKm(): float
	{
		return 0;
	}

	public function getDistancePrice(int $kilometers): float
	{
		return ($this->weight / $this->sails) * $kilometers * $this->getPriceForOneKm();
	}
}