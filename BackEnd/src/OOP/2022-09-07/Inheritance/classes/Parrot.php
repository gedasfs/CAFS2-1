<?php

class Parrot extends Animal
{
	protected const LIFE_TIME = 50;

	function __construct(string $name, ?string $sound = null)
	{
		parent::__construct($name, $sound);
	}

	public function getSound(): string
	{
		// return parent::getSound();

        return 'Parrot: ' . $this->sound;
    }

 //    public function getLifeTime()
	// {
	// 	return $this->createdAt + 50;
	// }
}