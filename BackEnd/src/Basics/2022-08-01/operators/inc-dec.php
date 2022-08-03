<?php

// https://www.php.net/manual/en/language.operators.increment.php

define('NEW_LINE', "<br>\n");

$a = $b = $c = $d = 2; 

echo ++$a, NEW_LINE; // Pre-increment
echo $b++, ' ',  $b, NEW_LINE; // Post-increment
echo --$c, NEW_LINE; // Pre-decrement
echo $d--, ' ', $d, NEW_LINE; // Post-decrement