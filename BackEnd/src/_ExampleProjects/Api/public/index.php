<?php

define('ROOT_PATH', dirname(__DIR__));

require ROOT_PATH . '/vendor/autoload.php';

require_once ROOT_PATH . '/src/helpers.php';

use Slim\Factory\AppFactory;

// Instantiate App
$app = AppFactory::create();

require_once ROOT_PATH . '/src/middleware.php';
require_once ROOT_PATH . '/src/router.php';

$app->run();