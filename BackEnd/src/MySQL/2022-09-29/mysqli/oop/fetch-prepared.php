<?php

require_once './connect.php';

// // https://www.php.net/manual/en/mysqli-stmt.prepare.php
// $stmt = $mysqli->prepare('SELECT * FROM `users`');

// $stmt->execute();

// $result = $stmt->get_result();
// $result = $result->fetch_all(MYSQLI_ASSOC);

// var_dump($result);

// =================== //

// $stmt = $mysqli->prepare('SELECT * FROM `users` WHERE `email` = \'kir\'@gmail.com\'');

// =================== //

// $stmt = $mysqli->prepare('SELECT * FROM `users` WHERE `email` = ?');

// $stmt->execute([
//     'kir@gmail.com'
// ]);

// $result = $stmt->get_result();
// $result = $result->fetch_all(MYSQLI_ASSOC);

// var_dump($result);

// =================== //

$stmt = $mysqli->prepare('SELECT * FROM `users` WHERE `email` = ? AND `name` = ?');

$stmt->bind_param('ss', $email, $name);

$email = 'kir\'@gmail.com';
$name = 'Kiril';

$stmt->execute();

$result = $stmt->get_result();
$result = $result->fetch_all(MYSQLI_ASSOC);

var_dump($result);
