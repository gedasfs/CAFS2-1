<?php

require_once './connect.php';

// // https://www.php.net/manual/en/mysqli-result.fetch-all.php

// $result = $mysqli->query('SELECT * FROM `users`');
// $result = $result->fetch_all(MYSQLI_ASSOC);

// var_dump($result[0]['password']);
// var_dump($result);

// // https://www.php.net/manual/en/mysqli-result.fetch-all.php
// $result = $mysqli->query('SELECT * FROM `users`');

// while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
// 	var_dump($row, $row['email']);
// }

// // https://www.php.net/manual/en/mysqli-result.fetch-object.php
// $result = $mysqli->query('SELECT * FROM `users`');

// while ($row = $result->fetch_object()) {
// 	var_dump($row, $row->email);
// }

// https://www.php.net/manual/en/mysqli-result.fetch-field.php
$result = $mysqli->query('SELECT * FROM `users`');

while ($finfo = $result->fetch_field()) {
    printf("Name:     %s\n", $finfo->name);
    printf("Table:    %s\n", $finfo->table);
    printf("max. Len: %d\n", $finfo->max_length);
    printf("Flags:    %d\n", $finfo->flags);
    printf("Type:     %d\n\n", $finfo->type);
}

if ($result) {
	$result->close();
}
