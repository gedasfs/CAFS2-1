<?php

function weekDayInLt($numberOfTheDay, bool $upperCase = false): string
{
    switch ((int) $numberOfTheDay) {
        case 1:
            $dayName = 'Pirmadienis';
            break;
        case 2:
            $dayName = 'Antradienis';
            break;
        case 3:
            $dayName = 'Treciadienis';
            break;
        case 4:
            $dayName = 'Ketvirtadienis';
            break;
        case 5:
            $dayName = 'Penktadienis';
            break;
        case 6:
            $dayName = 'Šeštadienis';
            break;
        case 7:
            $dayName = 'Sekmadienis';
            break;
        default:
            throw new Exception('There is no week day by this value');
    }

    return $upperCase ? strtoupper($dayName) : $dayName;
};

try {
    // var_dump((int) 'a');
	var_dump(weekDayInLt('a'));
	var_dump(weekDayInLt(1));
	var_dump(weekDayInLt(1,  true));
} catch (Exception $e) {
	echo 'Error: ' . $e->getMessage();
}