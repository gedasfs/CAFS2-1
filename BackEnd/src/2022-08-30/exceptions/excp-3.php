<?php

// https://www.php.net/manual/en/spl.exceptions.php

function func1()
{
	throw new Exception('func1 Exception', 1);
}

function func2()
{
	throw new RuntimeException('func2 Exception', 2);
}

function getWorkerSalaryRange($work, $price)
{
	if ($price > 1000) {
		throw new RangeException;
		// throw new RangeException('Shop Too overpriced');
	}
}

try {
	func1();
	func2();

	getWorkerSalaryRange('make shop', 10000);
}

catch (RangeException $e) {
	// echo "RangeException: Too overpriced";
	echo sprintf('RangeException: %s, code: %d', $e->getMessage(), $e->getCode());
}

// catch (RuntimeException $e) {
// 	echo sprintf('RuntimeException: %s, code: %d', $e->getMessage(), $e->getCode());
// } 

// catch (Exception $e) {
// 	echo sprintf('Exception: %s, code: %d', $e->getMessage(), $e->getCode());
// }

echo 'hello world';