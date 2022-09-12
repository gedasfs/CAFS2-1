<?php

class Driver extends Worker
{
	function __construct(
		string $name,
        int $age,

		private int $experience,
		private array $categories
	)
	{
		parent::__construct($name, $age, $experience * count($categories));
	}

	public function getExperience(): int
	{
		return $this->experience;
	}

	public function setExpirience(int $experience): void
	{
		$this->experience = $experience;
	}

	public function getCategories(): array
	{
		return $this->categories;
	}

	public function setCategories(array $categories): void
	{
		$this->categories = $categories;
	}
}