<?php

class Cat extends Animal
{
	protected const LIFE_TIME = 15;
	
	function __construct(string $name)
	{
		parent::__construct($name, 'Miau');
	}

	// public function getLifeTime()
	// {
	// 	return $this->createdAt + 15;
	// }
}