<?php

require_once __DIR__ . '/classes/DatabaseConnector.php';

// // Modules/User/Register.php
// $dbc = new DatabaseConnector('localhost', 'root', 'password');

// // Services/User/SendNotification.php
// $dbc = new DatabaseConnector('localhost', 'root', 'password');
// 
// $dbc = new DatabaseConnector('localhost', 'root', 'password');
// $dbc = new DatabaseConnector('localhost', 'root', 'password');
// $dbc = new DatabaseConnector('localhost', 'root', 'password');
// $dbc = new DatabaseConnector('localhost', 'root', 'password');

// DatabaseConnector::getInstance('localhost', 'root', 'password');
DatabaseConnector::connect('localhost', 'root', 'password');

// Modules/User/Register.php
$dbc = DatabaseConnector::getInstance();

// Services/User/SendNotification.php
$dbc = DatabaseConnector::getInstance();

$dbc = DatabaseConnector::getInstance();
$dbc = DatabaseConnector::getInstance();
$dbc = DatabaseConnector::getInstance();
$dbc = DatabaseConnector::getInstance();
