<?php

use Middlewares\TrailingSlash;

// https://slimframework.com/docs/v4/cookbook/route-patterns.html
$app->add(new TrailingSlash(FALSE));