<?php

namespace App\Traits;

trait Input
{
	private function getAttrLine(array $attributes) : string
	{
		$attrs = '';

		foreach ($attributes as $attrName => $attrValue) {
			$attrs .= is_numeric($attrName) ? (' ' . $attrValue) : sprintf(' %s="%s"', $attrName, $attrValue);
		}

		return $attrs;
	}
	
	public function input(string $type, string $name, array $attributes = []) : string
	{
		$attrs = $this->getAttrLine($attributes);

		return sprintf('<input type="%s" name="%s"%s>', $type, $name, $attrs);
	}

	public function password(string $name, array $attributes) : string
	{
		return $this->input('password', $name, $attributes);
	}

	public function radio(string $name, string $value, array $attributes)  : string
	{
		$attributes['value'] = $value;

		return $this->input('radio', $name, $attributes);
	}
	
}