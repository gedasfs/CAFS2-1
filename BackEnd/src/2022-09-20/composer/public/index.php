<?php

define('ROOT_PATH', dirname(__DIR__));

require_once ROOT_PATH . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(ROOT_PATH);

$dotenv->load();

var_dump($_ENV['BACKGROUND_HEIGHT']);
