<?php

namespace App\Modules;

class Index {

	public function perform()
	{
		$title = 'Quiz FooBar';

		return view('index', [
			'title' => 'Quiz'
		]);
	}
}

