<?php

class Student extends Person implements Teachable
{
	function __construct(
		private string $name,
		private int $age,
		private int $course
	)
	{
		// code...
	}
}