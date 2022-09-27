<?PHP

namespace App\Modules;

use App\Classes\Tag;

class Question
{
	public function perform()
	{
		$questions = file_get_contents(ROOT_PATH . '/data/quiz.json');
		$questions = json_decode($questions, TRUE);

		$questionIndex = $_SESSION['question_index'] ?? 0;

		if (!isset($questions[$questionIndex])) {
			throw new \RuntimeException('Sorry. Something went wrong. Try again.');
		}

		$answerIndex = FALSE;
		$answersFromSession = $_SESSION['answers'] ?? [];

		if (
			isset($_POST['answer']) &&
			is_numeric($_POST['answer']) &&
			array_key_exists($_POST['answer'], $questions[$questionIndex]['variants'])
		) {
			$answerIndex = $_POST['answer'];

			$answersFromSession[$questionIndex] = $answerIndex;

			$_SESSION['answers'] = $answersFromSession;

			if (isset($questions[($questionIndex + 1)])) {
				$_SESSION['question_index'] = ++$questionIndex;
			} else {
				$_SESSION['state'] = 'finish';
			}
		}

		$questionCount = count($questions);

		if (
			$questionCount - 1 == $questionIndex &&
			isset($_SESSION['state']) && $_SESSION['state'] == 'finish'
		) {
			if ($questionCount != count($answersFromSession)) {
				throw new \RuntimeException('Sorry. Something went wrong. Try again.');
			}

			$correctAnswerCount = 0;

			foreach($questions as $index => $question) {
				if (isset($answersFromSession[$index]) && $answersFromSession[$index] == $question['answer']) {
					$correctAnswerCount++;
				}
			}

			$result = [
				'result' => sprintf('Congratulations! You just finished quiz. Answers: %d / %d', $correctAnswerCount, $questionCount)
			];
		} else {
			$result = $questions[$questionIndex];

			unset($result['answer']);

			$result['html'] = [
				'question' => Tag::getQuestion($result['question']),
				'variants' => array_map(function($key, $value) {
					return Tag::getAnswer($value, $key);
				}, array_keys($result['variants']), $result['variants']),
			];
		}

		$result['state'] = $_SESSION['state'] ?? 'progress';

		ajaxResponse($result);
	}

}