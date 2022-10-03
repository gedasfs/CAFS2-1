<?php

require_once '/var/www/functions.php';

$dsn = 'mysql:host=mariadb;dbname=' . getenv('MYSQL_DATABASE');

$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''
];

try {
    $dbh = new PDO($dsn, getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'), $options);

    // $dbh->query(file_get_contents('sql/create.sql'));
    // $dbh->query(file_get_contents('sql/insert.sql'));
} catch (PDOException $e) {
    printf('Error PDO!: %s', $e->getMessage());
    exit;
}
