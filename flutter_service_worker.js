'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9638d5caaf979316222cf3f81bf5d938",
"index.html": "252892bfe85cc535278dfeccb691e088",
"/": "252892bfe85cc535278dfeccb691e088",
"main.dart.js": "7caafd0055eb9e0687a6c9cb9ee6947d",
"sqlite3.wasm": "79a4cf7ac1cf1f9d5081474f5a7bb5ba",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sqflite_sw.js": "98c280011fe4c05e94ceacb5684c5868",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bbbe00f8c7b366ca69a691b4ed818f8e",
"assets/AssetManifest.json": "274e6cbe2c0561e95873c9ecc4e38003",
"assets/NOTICES": "8388e0d513bfcaef25fa64a5d72e0000",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "eb16ebcc294996de48e7f2683b6447f6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c392567db45aa7ab73dd3e431d20b1b0",
"assets/fonts/MaterialIcons-Regular.otf": "073887f95f5a0f29111ed979c74bd658",
"assets/assets/images/croplogo.jpg": "9fb560a871f82fec72e5ceed1f1efbec",
"assets/assets/images/plus.png": "eaab7f6a925368da289dd7c9e843105b",
"assets/assets/images/connection.jpeg": "e10101751ad75149a36eaf8003ab5129",
"assets/assets/images/empty.json": "6099f7f42202262eda2ccf5a763605a7",
"assets/assets/images/icon.png": "782fa4e5d6daa1d4d9faf55c52efc436",
"assets/assets/images/verifyotp.json": "7bc7ad3096f82ecd88849e92fb041a65",
"assets/assets/images/image1.jpeg": "34ef901794def8a4a28d30b736ad1727",
"assets/assets/images/cart.json": "6099f7f42202262eda2ccf5a763605a7",
"assets/assets/images/applogo.jpg": "a2dd66421e65b77368d4123276e4b478",
"assets/assets/images/otp.json": "57ac3fb2d2350c30c38631c06951fbb6",
"assets/assets/images/logolistout.png": "7ecc788d2ade2981ae30b4baf0f803ca",
"assets/assets/images/images3.jpeg": "fda6314ba3fb83c6c1e03f806dd1dbe3",
"assets/assets/images/sucess.json": "20148ca57c9141fd4d2c7a9e8d20b83d",
"assets/assets/images/offer1.jpeg": "e45e1e46d388f93ccb6af83558f9435a",
"assets/assets/images/emptywishlist.json": "6f0353967aa1da3bfd34bbd3751817f9",
"assets/assets/images/img.png": "4885c5d81eeb30f091d96e5c27eaf292",
"assets/assets/images/background.jpeg": "215f43b4b439016ffa9c94c74d91c23c",
"assets/assets/images/checkout.png": "4852da728be87b6639b3cc65f27126b8",
"assets/assets/images/list.png": "edeac5902ebcd12ef6c6057a15d86eb1",
"assets/assets/images/emptycart.json": "b3f8b1dc47017e1eb20b8e16c9a4241b",
"assets/assets/images/electricals.jpeg": "e9f72dfeaf8e1b721940aa7556a116c6",
"assets/assets/images/cartemp.json": "3dfe61d678699cd3835708a048eaaf8f",
"assets/assets/images/offer3.jpeg": "bb92f6bc90411fe788db58051618919e",
"assets/assets/images/image4.jpeg": "968399fb124b8ab26ca1ff8c27a29d7c",
"assets/assets/images/plumbing.jpeg": "684688f09e1703ab299094762f3fa399",
"assets/assets/images/icons.jpg": "0b0d11fb7105e92e8e779493300aed87",
"assets/assets/images/invoice.png": "44b33318ad36fb58700a1f5e4113d402",
"assets/assets/images/listout2.jpeg": "296dee56e37aad2cb127cb5876359139",
"assets/assets/images/default.jpeg": "c90a9c4527d8a85c8d1a905ab0933359",
"assets/assets/images/offer2.jpeg": "0edb5f1c10c466f02f30b13cb1f42cfe",
"assets/assets/images/listout2.png": "80bae9b09ee8c1b2fa8e98b22419c043",
"assets/assets/images/noimage.jpeg": "347e8ba92d4968a3443532e68aad039b",
"assets/assets/images/nosearch.json": "6099f7f42202262eda2ccf5a763605a7",
"assets/assets/images/listout.jpg": "eb5479e9fb220e65cca43eeb686742fb",
"assets/assets/images/orderhistory.png": "fc8198902c03e496259e771af04e4a1b",
"assets/assets/images/image2.jpeg": "733500b7ad2cf41a5803eecb2ea56ae2",
"assets/assets/images/pending.json": "75279ee4cbc3ed71ac893b16b5a00912",
"assets/assets/images/cartempty.json": "0953d5f7bcf010c4b644e27a35d3f06e",
"assets/assets/images/noimg.jpeg": "cd0c1671e1b89abd9e66267f8c126bff",
"assets/assets/images/category.jpeg": "2d9bceacb8fd1e3b56f754d0cbf93acc",
"assets/assets/images/offer1.png": "638c64ccf38e248790aa84f166e3fdb2",
"assets/assets/images/lottie.json": "0c6e3c7a362d74d7e62f5c8d8f80d5f7",
"assets/assets/images/offer4.jpeg": "3178f9c07700d245b58aa9a7df1a84f9",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
