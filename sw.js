// * DO NOT DO ANYTHING TO THIS FILE, THIS IS MEANT FOR THE PROGRESSIVE WEB APPLICATION IF THIS GETS MODIFIED, THE PWA WILL NOT WORK*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.routing.registerRoute(
     ({request}) => request.destination === 'image',
     new workbox.strategies.NetworkFirst()
)