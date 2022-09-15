<?php

namespace App\Classes;

use App\Traits;

class Student extends Base\User
{
	use Traits\Person;

	private $scholarship;
	private $course;

	function __construct(
		string $name, 
		int $age,
		?int $scholarship = NULL, 
		?int $course = NULL
	)
	{
		parent::__construct($name, $age);

		// $this->setName($name);
		// $this->setAge($age);

		if ($scholarship) {
			$this->setScholarship($scholarship);
		}
		
		if ($course) {
			$this->setCourse($course);
		}
	}

    public function getScholarship() : ?int
    {
        return $this->scholarship;
    }

    public function setScholarship(?int $scholarship): void
    {
        $this->scholarship = $scholarship;
    }

    public function getCourse(): ?int
    {
        return $this->course;
    }

    public function setCourse(?int $course): void
    {
        $this->course = $course;
    }
}