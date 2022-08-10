<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	require_once 'upload.php';
	require_once 'views/profile.phtml';
} else {
	require_once 'views/index.phtml';
}