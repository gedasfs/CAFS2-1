<?php

class Student extends Person
{
	
	function __construct(
		string $name,
		int $age,
		
		private int $course,
		private float $scholarship
	)
	{
		parent::__construct($name, $age);
	}

    public function getCourse(): int
    {
        return $this->course;
    }

    public function setCourse(int $course): void
    {
        $this->course = $course;
    }

    public function getScholarship(): float
    {
    	return $this->scholarship;
    }

    public function setScholarship(float $scholarship): void
    {
    	$this->scholarship = $scholarship;
    }
}