<?php

namespace App\Traits\Parts;

trait Question {

	// <p class="card-text w-100 placeholder" id="question"></p>

	private static function generateQuestion(string $title)
	{
		return (new self('p'))
			->setText($title)
			->setAttr('class', 'card-text')
			->setAttr('id', 'question');
	}

	public static function showQuestion(string $title)
	{
		self::generateQuestion($title)->show();
	}

	public static function getQuestion(string $title)
	{
		return self::generateQuestion($title)->get();
	}

	public static function showQuestionPlaceholder()
	{
		(new self('p'))
			->setAttr('class', 'card-text w-100 placeholder')
			->setAttr('id', 'question')
			->show();
	}
}
