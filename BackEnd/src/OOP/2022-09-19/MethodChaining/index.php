<?php

require 'Classes/Tag.php';

$tag = new Tag('a');

$tag->setText('title 1');
$tag->setText('title 2');
$tag->setText('title 3');
$tag->setText('title 4');

$tag->setAttr('href', 'index.html');
$tag->setAttr('href', 'index.html');
$tag->setAttr('href', 'index.html');
$tag->setAttr('href', 'index.html');
$tag->setAttr('href', 'index.html');

// var_dump($tag);
var_dump($tag->get());

echo "<br>\n";

$tag->show();

echo "<br>\n";

$tag = new Tag('a');

// var_dump($tag->setText('title'));
 
$tag->setText('title')->setAttr('href', 'index.html')->show();

echo $tag->setText('text')->setAttr('href', 'index.html')->get();

echo "<br>\n";

(new Tag('a'))->setText('title standalone 1')
	->setAttr('href', 'index.html')
	->setAttr('class', 'btn btn-success')
	->setAttr('id', 'go')
	->show();

echo "<br>\n";

(new Tag('a'))->setText('title standalone 2')
	->setAttr([
		'href' => 'index.html',
		'class' => 'btn btn-success',
	])
	->setAttr('id', 'go')
	->show();

echo "<br>\n";

(new Tag('a'))->setText('title standalone 3')
	->setAttrs([
		'href' => 'index.html',
		'class' => 'btn btn-success',
		'id' => 'go'
	])
	->show();
echo "<br>\n";

Tag::create('a')->setText('title static 1')
	->setAttr([
		'href' => 'index.html',
		'class' => 'btn btn-success',
	])
	->setAttr('id', 'go')
	->show();

echo "<br>\n";

$tagA = Tag::create('a');

$tagA->setText('title static 2')
	->setAttrs([
		'href' => 'index.html',
		'class' => 'btn btn-success',
		'id' => 'go'
	])
	->show();