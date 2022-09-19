<?php

namespace App\Traits;

trait Button
{
	public function button(string $title, string $type = 'button') : string
	{
		return sprintf('<button type="%s">%s</button>', $type, $title);
	}
}