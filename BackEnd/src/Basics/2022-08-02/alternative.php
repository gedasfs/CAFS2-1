<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<?php if (rand(0,1)) { ?>
	<strong>Hello, Kiril</strong>
	<?php } else { ?>
	<strong>Who are you?</strong>
	<?php } ?>
	<br>
	<!-- https://www.php.net/manual/en/control-structures.alternative-syntax.php -->
	<?php if (rand(0,1)): ?>
	<strong>Hello, Kiril</strong>
	<?php else: ?>
	<strong>Who are you?</strong>
	<?php endif; ?>
</body>
</html>