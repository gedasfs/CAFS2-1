<?php

require_once 'connect.php';

$query = 'INSERT INTO `users`
	(
		`is_admin`,
		`first_name`,
		`last_name`, 
		`birthdate`,
		`email`,
		`gender`,
		`ip_address`,
		`user_agent`,
		`created_at`
	)
	VALUES (
		:is_admin,
        :first_name,
        :last_name,
        :birthdate,
        :email,
        :gender,
        :ip_address,
        :user_agent,
        :created_at
    );';

$sth = $dbh->prepare($query, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);

$sth->execute([
	'is_admin'   => TRUE,
	'first_name' => 'Ernesto',
	'last_name'  => 'Wimbridge',
	'birthdate'  => '2005-07-24',
	'email'      => 'ewimbridge0@mail.ru',
	// 'email'      => uniqid().'@mail.ru',
	// 'email_verified_at'  => null,
	'gender'     => 'Male',
	'ip_address' => '235.165.202.207',
	'user_agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1',
	'created_at' => date('Y-m-d H:i:s'),
]);