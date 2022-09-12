<?php

class Plane extends Vehicle
{
	function __construct(
		private float $weight,
		private int $engines,
		private string $fuelType,
	)
	{
		parent::__construct('p');
	}

	public function getPriceForOneKm(): float
	{
		return 0.5;
	}

	public function getDistancePrice(int $kilometers): float
	{
		return ($this->weight / $this->engines) * $kilometers * $this->getPriceForOneKm();
	}

}