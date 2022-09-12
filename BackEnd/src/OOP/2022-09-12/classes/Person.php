<?php


class Person
{
	function __construct(private string $name, private string $age)
	{
	}

    public function getAge() : int
    {
        return $this->age;
    }

    public function setAge(int $age)
    {
        $this->age = $age;
    }

    public function getName() : string
    {
        return $this->name;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }
}