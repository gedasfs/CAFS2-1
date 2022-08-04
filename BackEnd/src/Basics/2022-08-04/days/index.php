<?php

$weekDays = [
    'lt' => [
        1 => 'Pirmadienis',
        2 => 'Antradienis',
        3 => 'Treciadienis',
        4 => 'Ketvirtadienis',
        5 => 'Penktadienis',
        6 => 'Sestadienis',
        7 => 'Sekmadienis',

        101 => 'SVEIKI'
    ],

    'en' => [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
        6 => 'Saturday',
        7 => 'Sunday',

        '101' => 'HELLO'
    ],

    'lv' => [
        1 => 'lv ==> Monday',
        2 => 'lv ==> Tuesday',
        3 => 'lv ==> Wednesday',
        4 => 'lv ==> Thursday',
        5 => 'lv ==> Friday',
        6 => 'lv ==> Saturday',
        7 => 'lv ==> Sunday',
    ]
];

$availableLangs = array_keys($weekDays);

$lang = 'en';
$day  = date('N');

if (isset($_GET['lang']) && in_array($_GET['lang'], $availableLangs)) {
    $lang = $_GET['lang'];
}

if (isset($_GET['day'])) {
    if (is_numeric($_GET['day'])) {
        if (array_key_exists($_GET['day'], $weekDays[$lang])) {
            $day = $_GET['day'];
        }
    }
}

require_once 'views/index.banana';
