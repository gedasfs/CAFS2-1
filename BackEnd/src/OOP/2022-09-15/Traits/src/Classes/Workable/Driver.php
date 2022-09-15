<?php

namespace App\Classes\Workable;

use App\Classes\Worker as WorkerBase;

use App\Traits\Person;

class Driver extends WorkerBase
{
    use Person;
    
	private $experience;
	private $category;

	const ALLOWED_CATEGORIES = ['A', 'B', 'C'];

	function __construct(
        string $name,
        int $age, 
        float $salary,
        ?int $experience = NULL, 
        ?string $category = NULL
    )
	{
		parent::__construct($name, $age, $salary);

        // $this->experience = $experience;
        // $this->category = $category;

        if ($experience) {
            $this->setExperience($experience);
        }

        if ($category) {
            $this->setCategory($category);
        }
	}

	public function getExperience(): ?int
    {
        return $this->experience;
    }

    public function setExperience(?int $experience)
    {
        $this->experience = $experience;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): void
    {
    	if (in_array($category, self::ALLOWED_CATEGORIES) == FALSE) {
    		throw new Exception('Driver category not allowed');
    	}

        $this->category = $category;
    }

    public function countSalary(): float
    {
        return $this->getSalary() * 2;
    }
}