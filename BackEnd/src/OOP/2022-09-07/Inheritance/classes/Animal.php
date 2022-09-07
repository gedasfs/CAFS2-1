<?php

class Animal
{
	protected string $createdAt;

	function __construct(protected string $name, protected ?string $sound = null)
	{
		$this->createdAt = time();
	}

	public function getSound(): string
	{
		return $this->sound;
	}

	public function getCreatedTime(): int
	{
		return $this->createdAt;
	}

	public function getLifeTime()
	{
		return sprintf('%s born date: %s, lives for %d years avg', static::class, date('Y-m-d H:i:s', $this->createdAt), static::LIFE_TIME);
	}
}