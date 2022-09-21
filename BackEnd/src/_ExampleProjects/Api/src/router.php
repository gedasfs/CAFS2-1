<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteCollectorProxy;

$app->get('/', function (Request $request, Response $response, array $args) {
    $response->getBody()->write('Hello, Kiril');

    return $response;
});

$app->get('/api/documentation', function (Request $request, Response $response) {
    $response->getBody()->write(file_get_contents(ROOT_PATH . '/resources/views/api/documentation.html'));

	return $response;
});

$app->group('/api/v1', function (RouteCollectorProxy $group) {
	$group->group('/store', function (RouteCollectorProxy $group) {  
		$group->post('/orders', function (Request $request, Response $response, $args) {
			if (rand(0,1) < 0.5) {
				$status = 201;

				$data = [
					'message' => 'Successful operation',
					'data' =>  [
						'id' => 0, 
						'item_id' => 0, 
						'quantity' => 0, 
						'shipDate' => '2022-09-21T16:35:31.677Z', 
						'status' => 'placed', 
						'complete' => false 
					]
				];
			} else {
				$status = 400;
				
				$data = [
					'message' => 'Invalid Order',
					'data' => []
				];
			}

			$payload = json_encode($data);
			
			$response->getBody()->write($payload);

			return $response->withHeader('Content-Type', 'application/json')->withStatus($status);
		});

		$group->get('/orders/{order}', function (Request $request, Response $response, $args) {
			$payload = json_encode($args);
			
			$response->getBody()->write($payload);

			return $response->withHeader('Content-Type', 'application/json');
		});

		$group->delete('/orders/{order}', function (Request $request, Response $response, $args) {
			$payload = json_encode($args);

			$response->getBody()->write($payload);

			return $response->withHeader('Content-Type', 'application/json');
		});
	});
});