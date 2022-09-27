<?php

namespace App\Traits\Parts;

trait Answer {

	// <li class="list-group-item placeholder mb-1"></li>

	private static function generateAnswer(string $title, int $id = NULL)
	{
		return (new self('li'))
			->setText($title)->setAttr('data-answers-id', $id)
			->setAttr('class', 'list-group-item');
	}

	public static function showAnswer(string $title, int $id = NULL)
	{
		self::generateAnswer($title, $id)->show();
	}

	public static function getAnswer(string $title, int $id = NULL)
	{
		return self::generateAnswer($title, $id)->get();
	}

	public static function showAnswerPlaceholder()
	{
		(new self('li'))->setAttr('class', 'list-group-item placeholder mb-1')->show();
	}
}
