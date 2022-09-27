<?php

$module = $_GET['module'] ?? 'Index';
$module = sprintf('App\Modules\%s', ucfirst($module));

if (class_exists($module)) {
	$module = new $module;

	if (method_exists($module, 'perform')) {
		return $module->perform();
	}
}

throw new Exception('Module not found', 404);