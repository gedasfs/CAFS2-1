<?php

function func0()
{
	var_dump(__FUNCTION__);
	
	throw new Exception('func0 Exception', 0);
}

function func1()
{
	func0();
	// throw new Exception('func1 Exception', 1);
	
	var_dump(__FUNCTION__);
}

function func2()
{
	// func1();

	try {
		func1();
	} catch (Exception $e) {
		echo sprintf("Catch func2 message: %s, code: %d\n", $e->getMessage(), $e->getCode());

		// throw new Exception("Error Processing Request", 500);
	}

	var_dump(__FUNCTION__);

	throw new Exception('func2 Exception', 2);
}

function func3()
{
	func2();

	var_dump(__FUNCTION__);
}

try {
	func3();
} catch (Exception $e) {
	echo sprintf('Message: %s, code: %d', $e->getMessage(), $e->getCode());
}