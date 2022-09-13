<?php

class Bmw implements CarTemplate, VehicleTemplate
{
	public function getBrand() : string
	{
		return $this->brand;
	}

	public function setBrand(string $brand) : void
	{
		$this->brand = $brand;
	}

	public function getModel() : string
	{
		return $this->model;
	}

	public function setModel(string $model) : void
	{
		$this->model = $model;
	}

	public function getFuelType() : int
	{
		return rand(1, 3);
	}
}