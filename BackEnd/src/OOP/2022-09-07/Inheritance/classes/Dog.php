<?php

class Dog extends Animal
{
	protected const LIFE_TIME = 12;

	function __construct(string $name, string $sound)
	{
		parent::__construct($name, $sound);
	}

	// public function getLifeTime()
	// {
	// 	return $this->createdAt + 12;
	// }
}