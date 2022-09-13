<?php

class Academy
{
	private $students = [];

	// public function add(Person|Chimpanzee|Cat $a) : void
	public function add(Teachable $a) : void
	{
		array_push($this->students, $a);
	}

	public function getAll() : array
	{
		return $this->students;
	}
	
}