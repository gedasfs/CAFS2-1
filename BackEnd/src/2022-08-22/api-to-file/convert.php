<?php

function multiArrayToSingle($arr, $map = [], $parentKey = NULL)
{
    foreach ($arr as $key => $value) {
        if ($parentKey) {
            $key = $parentKey . '.' . $key;
        }

        if (is_array($value)) {
            $map = multiArrayToSingle($value, $map, $key);
        } else {
            $map[$key] = $value;
        }
    }

    return $map;
}

$data = file_get_contents('https://randomuser.me/api?results=5');
$data = json_decode($data, TRUE);

$handle = fopen('data/converted.csv', 'w');

// https://www.php.net/manual/en/function.fputcsv.php

fputcsv($handle, array_keys(multiArrayToSingle($data['results'][0])));

foreach ($data['results'] as $userData) {
    fputcsv($handle, multiArrayToSingle($data));
}

fclose($handle);