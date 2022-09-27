<?php

namespace App\Modules;

class Preview {

	public function perform()
	{
		$questions = file_get_contents(ROOT_PATH . '/data/quiz.json');
		$questions = json_decode($questions, TRUE);

		return view('preview', ['questions' => $questions]);
	}

}

