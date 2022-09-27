<?php

namespace App\Classes;

use App\Traits\Parts\{Answer, Question};

class Tag
{
	use Answer, Question;

	private $name;

	private $text = [];
	private $attributes = [];

	private const SINGLE_TAGS = ['input', 'br'];

	function __construct(string $name)
	{
		$this->name = $name;
	}

	public static function name(string $name)
	{
		return new self($name);
	}

	private function getAttrLine() : string
	{
		$attributes = '';

		foreach ($this->attributes as $attrName => $attrValue) {
			$attributes .= $attrValue ? sprintf(' %s="%s"', $attrName, $attrValue) : (' ' . $attrValue);
		}

		return $attributes;
	}

	public function setText($text)
	{
		$this->text[] = htmlspecialchars($text);

		return $this;
	}

	public function setAttr($name, $value = NULL)
	{
		$this->attributes[strip_tags($name)] = $value ? htmlspecialchars($value) : FALSE;

		return $this;
	}

	public function get()
	{
		$text = implode(' ', $this->text);

		$attributes = $this->getAttrLine();

		$result = sprintf('<%s%s>', $this->name, $attributes);

		if (!in_array($this->name, self::SINGLE_TAGS)) {
			$result .= sprintf('%s</%s>', $text, $this->name);
		}

		return $result;
	}

	public function show()
	{
		echo $this->get();
	}
}