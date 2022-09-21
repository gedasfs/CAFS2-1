<?php

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;

use Middlewares\TrailingSlash;

$app->add(new TrailingSlash()); // true adds the trailing slash (false removes it)

// Add error middleware
$app->addErrorMiddleware(true, true, true);

// $app->add(function (Request $request, RequestHandler $handler) {
//     $uri = $request->getUri();
//     $path = $uri->getPath();
    
//     if ($path != '/' && substr($path, -1) == '/') {
//         // recursively remove slashes when its more than 1 slash
//         $path = rtrim($path, '/');

//         // permanently redirect paths with a trailing slash
//         // to their non-trailing counterpart
//         $uri = $uri->withPath($path);
        
//         if ($request->getMethod() == 'GET') {
//             $response = new Response();
//             return $response
//                 ->withHeader('Location', (string) $uri)
//                 ->withStatus(301);
//         } else {
//             $request = $request->withUri($uri);
//         }
//     }

//     return $handler->handle($request);
// });