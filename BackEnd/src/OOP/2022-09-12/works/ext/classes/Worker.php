<?php


class Worker extends Person
{
    function __construct(
        string $name,
        int $age,

        private float $salary
    )
    {
        parent::__construct($name, $age);
    }

    // public function setSalary(float $salary): void
    // {
    //     $this->salary = $salary;
    // }

    public function getSalary(): float
    {
        return $this->salary;
    }
}