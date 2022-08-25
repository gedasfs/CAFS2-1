<?php

if (!isset($_SESSION['user'])) {
	throw new Exception('Forbidden', 403);
}

require_once ROOT_PATH . '/resources/views/profile.phtml';
