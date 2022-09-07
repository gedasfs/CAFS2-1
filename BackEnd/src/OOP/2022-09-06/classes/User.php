<?php

class User
{
	public $name = 'NO_NAME';

	public static $age = 30;

	public const PROFESSION = 'dev';

	public function setName(string $name) : void
	{
		$this->name = $name;
	}

	public static function setAge(int $age) : void
	{
		self::$age = $age;
	}

	public function getGreetings() : string
	{
		return sprintf("Hello. My name is %s. I'm %d years old", $this->name, self::$age);
	}
}