<?php

interface CarTemplate
{
	public function getBrand() : string;
	public function getModel() : string;

	public function setBrand(string $name) : void;
	public function setModel(string $name) : void;
}