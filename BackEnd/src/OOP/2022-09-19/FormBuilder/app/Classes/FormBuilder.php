<?php

namespace App\Classes;

// // v1
use App\Traits;

// v2
use App\Traits\{Button, Input, Label};
 
// // v3
// use App\Traits\Button;
// use App\Traits\Input;
// use App\Traits\Label;

class FormBuilder
{
	// // v1
	// use Traits\Button;
	// use Traits\Input;
	// use Traits\Label;
	
	// v2
	use Button, Input, Label;
	
	// // v3
	// use Button, Input, Label;

	public function open(string $action, string $method = 'GET') : string
	{
		return sprintf('<form action="%s" method="%s">', $action, $method);
	}

	public function close() : string
	{
		return '</form>';
	}
}