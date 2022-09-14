<?php

require_once 'handload.php';

$businessProjectsUser  = new \App\Projects\Business\User();
$educationProjectsUser = new \App\Projects\Education\User();
$weddingProjectsUser   = new \App\Projects\Wedding\User();

// var_dump($businessProjectsUser);

echo $businessProjectsUser . "\n";
echo $educationProjectsUser . "\n";
echo $weddingProjectsUser . "\n";

$weddingCustomer = new App\Projects\Wedding\Customer();

echo $weddingCustomer->getFlowers() . "\n";
echo $weddingCustomer->getCakes() . "\n";
echo $weddingCustomer->getBalloons() . "\n";
echo $weddingCustomer->getPlayList() . "\n";