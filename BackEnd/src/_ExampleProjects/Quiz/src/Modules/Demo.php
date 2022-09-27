<?php

namespace App\Modules;

class Demo {

	public function perform()
	{
		$questions = file_get_contents(ROOT_PATH . '/data/quiz.json');
		$questions = json_decode($questions, TRUE);

		return view('demo', ['questions' => $questions]);
	}

}

