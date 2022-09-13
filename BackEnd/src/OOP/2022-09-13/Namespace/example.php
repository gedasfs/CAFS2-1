<?php

namespace BusinessProject;

function user() {
	return __NAMESPACE__ . ' => Mantas';
}

class User {
	function __construct()
	{
		var_dump(__NAMESPACE__ . ' => ' . __CLASS__);
	}
}

// var_dump(user());

// end namespace BusinessProject

namespace WeddingProject;

function user() {
	return __NAMESPACE__ . ' => Andrius';
}

class User {
	function __construct()
	{
		var_dump(__NAMESPACE__ . ' => ' . __CLASS__);
	}
}


// var_dump(user());

// end namespace WeddingProject

namespace EducateionProject;

function user() {
	return __NAMESPACE__ . ' => Kiril';
}

class User {
	function __construct()
	{
		var_dump(__NAMESPACE__ . ' => ' . __CLASS__);
	}
}


var_dump(user());
var_dump(\BusinessProject\user());
var_dump(\WeddingProject\user());

new User();
new \BusinessProject\User();
new \WeddingProject\User();
