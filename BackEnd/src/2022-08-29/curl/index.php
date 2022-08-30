<?php

require_once 'functions.php';

// $url = 'https://api.meteo.lt/v1/places/vilnius/forecasts/long-term';

// $response = getContent($url);

// var_dump($response);

// $url = 'http://15min.lt';

// $response = getContent($url);

// if (isset($response['body'])) {
// 	file_put_contents('data/curl-15min', $response['body']);
// }
// 
var_dump(getContent('https://api.delfi.lt/login/v2/graphql', '{\n  "query": "mutation login_api_login($input: LoginInput\u0021) {\\n  data: login(input: $input) {\\n    status\\n    token\\n  }\\n}\\n",\n  "variables": {\n    "input": {\n      "email": "asdfasdf@adf.asd",\n      "password": "asfasdfsadf"\n    }\n  }\n}'));

