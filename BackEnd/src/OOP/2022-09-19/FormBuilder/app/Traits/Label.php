<?php

namespace App\Traits;

trait Label 
{
	public function label(string $for, string $text) : string
	{
		return sprintf('<label for="%s">%s</label>', $for, $text);
	}
}