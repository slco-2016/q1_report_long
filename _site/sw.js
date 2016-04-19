importScripts( '/q1_report_long/cache-polyfill.js' );

var filesToCache = [
  // root
  '/q1_report_long/',
  '/q1_report_long/index.html',
  // css
  '/q1_report_long/assets/css/main.css',
  '/q1_report_long/assets/css/normalize.css',
  '/q1_report_long/assets/css/syntax.css',
  // images
  '/q1_report_long/assets/img/octocat.png',
  // pages
  '/q1_report_long/challenge_page/','/q1_report_long/example_page/','/q1_report_long/researchoutcomes_page/','/q1_report_long/researchprocess_page/','/q1_report_long/usercentereddesign_page/',
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
