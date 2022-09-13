<?php

namespace App\Projects\Wedding;

// require_once 'app/Projects/Business/FlowersService.php';

use App\Projects\Business\FlowersService;

use App\Projects\Business;
use App\Projects\Business\MusicService as PlayList;

class Customer
{
	public function getFlowers()
	{
		// return new \App\Projects\Business\FlowersService;
		return new FlowersService;
	}

	public function getCakes()
	{
		// return new \App\Projects\Business\CakesService;
		return new Business\CakesService;
	}

	public function getBalloons()
	{
		return new Business\BalloonsService;
	}

	public function getPlayList()
	{
		return new PlayList;
	}
}