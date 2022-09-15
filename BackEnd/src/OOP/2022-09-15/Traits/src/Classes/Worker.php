<?php

namespace App\Classes;

use App\Classes\Base\User;

abstract class Worker extends User
{
	public abstract function countSalary(): float;

	protected $salary;

	function __construct(
		string $name,
		int $age,
		float $salary
	)
	{
		// parent::__construct($name, $age);
		
		$this->setName($name);
		$this->setAge($age);

		$this->setSalary($salary);
	}

	public function setSalary(float $salary): void
	{
		$this->salary = $salary;
	}

	public function getSalary(): float
	{
		return $this->salary;
	}
}