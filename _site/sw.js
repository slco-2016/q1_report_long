importScripts( '/DOCter/cache-polyfill.js' );

var filesToCache = [
  // root
  '/DOCter/',
  '/DOCter/index.html',
  // css
  '/DOCter/assets/css/main.css',
  '/DOCter/assets/css/normalize.css',
  '/DOCter/assets/css/syntax.css',
  // images
  '/DOCter/assets/img/octocat.png',
  // pages
  '/DOCter/example_page/','/DOCter/foobar_page/',
  // posts
  
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'CFA-SALTLAKE-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
