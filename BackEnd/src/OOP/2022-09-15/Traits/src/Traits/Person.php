<?php

namespace App\Traits;

trait Person
{
	public function greetings()
	{
		if (property_exists($this, 'name')) {
			$className = get_class($this);
			$className = explode('\\', $className);
			$className = array_pop($className);

			return "Hello, {$this->name}. Are you realy \"{$className}\" ?";
		}

		return 'Sorry, I dont know you';
	}

	public function ask()
	{
		return 'Any questions?';
	}
}