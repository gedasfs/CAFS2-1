<?php

namespace App\Classes\Base;

class User
{
	protected $name;
	private $age;

	function __construct(string $name, int $age)
	{
		// $this->name = $name;
		// $this->age  = $age;

		$this->setName($name);
		$this->setAge($age);
	}

	public function setName(string $name): void
	{
		$this->name = ucfirst($name);
	}

	public function setAge(int $age): void
	{
		$this->age = $age;
	}

	public function getName(): string
	{
		return $this->name;
	}

	public function getAge(): int
	{
		return $this->age;
	}
}