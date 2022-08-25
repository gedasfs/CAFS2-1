<?php

if (isset($_SESSION['user'])) {
	redirectTo('/?module=profile');
}

require_once ROOT_PATH . '/resources/views/index.phtml';