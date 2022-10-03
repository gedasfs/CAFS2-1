<?php

require_once 'connect.php';

$limit = isset($_GET['limit']) ? (int) $_GET['limit'] : 10; 

$offset = isset($_GET['page']) ? (int) $_GET['page'] : 0; 
$offset = $offset * $limit;

$query = '
    SELECT *
    FROM `users`
    WHERE `gender` = :gender 
    LIMIT :offset, :limit';

$stmt = $dbh->prepare($query);

$stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->bindValue(':gender', ($_GET['gender'] ?? NULL), PDO::PARAM_STR);

$stmt->execute();

$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

dd($users);