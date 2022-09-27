<?PHP

namespace App\Modules;

class Reset {

	public function perform()
	{
		session_destroy();

		return header('Location: /');
	}

}