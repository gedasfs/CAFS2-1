<?php

use Slim\Routing\RouteCollectorProxy;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/', function(Request $request, Response $response) {
    $response->getBody()->write('Hello World');

	// $response->getBody()->write(file_get_contents(ROOT_PATH . '/views/index.html'));

	return $response;
});

// https://www.slimframework.com/docs/v4/objects/routing.html#container-resolution
$app->get('/json', \App\Controllers\JsonController::class . ':someRandomResponse');


$app->get('/api/documentation', function (Request $request, Response $response) {
    $response->getBody()->write(file_get_contents(ROOT_PATH . '/views/api/documentation.html'));

    return $response;
});

$app->group('/api/v1', function (RouteCollectorProxy $group) {
    $group->group('/store', function (RouteCollectorProxy $group) {
        $group->post('/orders', '\App\Controllers\Api\V1\StoreController:placeOrder');
        $group->get('/orders/{orderId}', '\App\Controllers\Api\V1\StoreController:getOrder');
        $group->delete('/orders/{orderId}', '\App\Controllers\Api\V1\StoreController:deleteOrder');
    });

    $group->group('/users', function (RouteCollectorProxy $group) {
        $group->post('', [\App\Controllers\Api\V1\UserController::class, 'store']);

        $group->get('/{username}', [\App\Controllers\Api\V1\UserController::class, 'find']);
        $group->put('/{username}', [\App\Controllers\Api\V1\UserController::class, 'update']);
        $group->delete('/{username}', [\App\Controllers\Api\V1\UserController::class, 'delete']);
    });
});