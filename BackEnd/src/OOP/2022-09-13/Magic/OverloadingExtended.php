<?php

// https://www.php.net/manual/en/language.oop5.magic.php
// https://www.php.net/manual/en/language.oop5.overloading.php
 
class Overloading {
	public $a;

	function __construct()
	{
		$this->foo = 'foo';
	}

	public function __set(string $name, mixed $value): void
	{
		echo sprintf("__set Overloading, name: \"%s\", value: \"%s\" <br>\n", $name, $value);

		// throw new RuntimeException("Prop not defined");
	}

	public function __get($name)
	{
		echo sprintf("__get, name: \"%s\", <br>\n", $name);

		// return '__get';

		// switch ($name) {
		// 	case 'abc':
		// 		return 123;
		// 		break;
			
		// 	case 'def':
		// 		return 456;
		// 		break;

		// 	default:
		// 		return null;
		// 		break;
		// }
	}

	public function __call(string $name, array $arguments): void
	{
		echo sprintf("__call, name: \"%s\", arguments: \"%s\" <br>\n", $name, json_encode($arguments)); 
	}

	public static function __callStatic(string $name, array $arguments): void
	{
		echo sprintf("__callStatic, name: \"%s\", arguments: \"%s\" <br>\n", $name, json_encode($arguments)); 
	}
}

class OverloadingExtended extends Overloading {
	public function __set(string $name, mixed $value): void
	{
		echo sprintf("__set OverloadingExtended, name: \"%s\", value: \"%s\" <br>\n", $name, $value);

		// throw new RuntimeException("Prop not defined");
	}
}

$obj = new OverloadingExtended();

$obj->a = 1;
$obj->b = 1;

// var_dump($obj);
var_dump($obj->abc);
var_dump($obj->def);
var_dump($obj->asdfasfd);
var_dump($obj->wertasdfa);

$obj->methodA();
$obj->methodB(123);
$obj->methodC([123, 'a' => 1, 'b']);

Overloading::run('static');