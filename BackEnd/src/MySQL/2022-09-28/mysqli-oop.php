<?php

/* You should enable error reporting for mysqli before attempting to make a connection */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli('mariadb', getenv('MYSQL_USER'), getenv('MYSQL_PASSWORD'), getenv('MYSQL_DATABASE'));

/* Set the desired charset after establishing a connection */
$mysqli->set_charset('utf8mb4');

printf('Success mysqli (Object-oriented): %s', $mysqli->host_info);