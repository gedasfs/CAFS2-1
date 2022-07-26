const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.version();

if (mix.inProduction()) {
	mix.sourceMaps();
}

mix.js('resources/js/app.js', 'public/js/app.js');
mix.js('resources/js/maps/google.js', 'public/js/maps/google.js');

mix.sass('resources/sass/app.scss', 'public/css/app.css');
mix.sass('resources/sass/maps/google.scss', 'public/css/maps/google.css');