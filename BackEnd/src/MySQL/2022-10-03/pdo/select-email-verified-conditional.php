<?php

require_once 'connect.php';

$isVerified = isset($_GET['verified']) ? $_GET['verified'] == 'true' : false;

$query = sprintf('SELECT *
    FROM `users`
    WHERE `email_verified_at` %s 
    LIMIT 100', $isVerified ? 'IS NOT NULL' : 'IS NULL');

$stmt = $dbh->prepare($query);

$stmt->execute();

$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

dd($users);