<?php

$path = __DIR__ . '/data/posts.json';

$handle = fopen($path, 'r');
$contents = fread($handle, filesize($path));

fclose($handle);

// var_dump($contents, filesize($path));

$contents = json_decode($contents, TRUE);

var_dump($contents);