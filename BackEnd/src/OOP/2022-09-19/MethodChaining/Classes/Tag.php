<?php

class Tag
{
	private $name;

	private $text = [];
	private $attributes = [];

	public static function create(string $tagName) : Tag
	{
		return new Tag($tagName);
	}

	function __construct(string $name)
	{
		$this->name = $name;
	}

	private function getAttrLine() : string
	{
		$attributes = '';

		foreach ($this->attributes as $attrName => $attrValue) {
			$attributes .= $attrValue ? sprintf(' %s="%s"', $attrName, $attrValue) : (' ' . $attrValue);
		}

		return $attributes;
	}

	public function setText(string $text) : Tag
	{
		$this->text[] = $text;

		return $this;
	}

	public function setAttr(string|array $attr, $value = NULL) : Tag
	{
		if (is_array($attr)) {
			$this->attributes = array_merge($this->attributes, $attr);
		} else {
			$this->attributes[$attr] = $value;
		}

		return $this;
	}

	public function setAttrs(array $attrs) : Tag
	{
		$this->setAttr($attrs);

		return $this;
	}

	public function get() : string
	{
		$text = implode(' ', $this->text);

		$attributes = $this->getAttrLine();

		return sprintf('<%s%s>%s</%s>', $this->name, $attributes, $text, $this->name);
	}

	public function show() : void
	{
		echo $this->get();
	}
}