<?php

try {
    $dbh = new PDO('mysql:host=mariadb;dbname=' . getenv('MYSQL_DATABASE'), getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'));

    printf('Success PDO: %s', $dbh->getAttribute(PDO::ATTR_CONNECTION_STATUS));
} catch (PDOException $e) {
    printf('Error PDO!: %s', $e->getMessage());
}
