<?php

namespace App\Classes\Workable;

use App\Classes\Worker;

use App\Traits\Person as PersonTrait;

class Pilot extends Worker
{    
    use PersonTrait;
    
    public function countSalary(): float
    {
        return $this->getSalary() * 5;
    }
}