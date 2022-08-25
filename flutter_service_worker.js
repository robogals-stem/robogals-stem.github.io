'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "activities/aerospace-01-Making_a_Straw_Plane.pdf": "223a2634c25c9fb0ea542300e61c3231",
"activities/aerospace-02-Tornado_in_a_bottle.pdf": "c1770e58cbe779e1f6a7d2d68ea27285",
"activities/aerospace-03-Make_a_bottle_rocket.pdf": "4859a29f6cdef3a2333916cee2dfdef9",
"activities/agricultural-01-Plant_cycles.pdf": "31b1459e8cf3c2ef6d788f03e6072bf2",
"activities/agricultural-02-Creating_a_Water_catchment.pdf": "8444b4f0565454863ecb399f1ca1a95b",
"activities/agricultural-03-Creating_a_Biodome.pdf": "f179db014cce58d47ede5d15a4ab6081",
"activities/biomedical-01-Make_a_prosthetic_leg.pdf": "bd990096f6e42ac75266be16ed1c9ccf",
"activities/biomedical-02-Clear_your_own_path_to_the_heart.pdf": "eccbc3220882981cea5a2872ac320e7e",
"activities/biomedical-03-Build_a_Respiratory_System.pdf": "9b706190b8164a8c38148e4547f080e8",
"activities/computer-01-Simple_Circuits.pdf": "dc6c5d338d216599b059e39d88fa92bb",
"activities/computer-02-Electrical_Liquids.pdf": "6375c6949f82a52ab9c1d4ba200f0aaf",
"activities/computer-03-Build_a_cup_speaker.pdf": "9e55773ee0f02aedae1b11efd57b0941",
"activities/environmental-01-What_is_my_Carbon_Footprint.pdf": "329426bb1884bb4be70bf1513f670240",
"activities/environmental-02-Renewable_Power.pdf": "15f237eb77b6158450abd03183376496",
"activities/environmental-03-Design_a_Solar_House.pdf": "a3fa7ff29f128a8d3296e457708fb295",
"activities/manufacturing-01-Assembly_Line_vs_Independent_workers.pdf": "6b2639eb1587bd4bdb913552a5dbd37f",
"activities/manufacturing-02-Building_a_rubber_band_car.pdf": "4f2f0d960a58264dedd45d54e3222bec",
"activities/manufacturing-03-Rubber_band_powered_paddle_boat.pdf": "c99cc8aecbf29073d615d1556e7a00b0",
"activities/materials-01-Egg_Drop_Competition.pdf": "78238ab2defbb6edfc8f02fe587b712b",
"activities/materials-02-Turning_Milk_into_Plastic.pdf": "27179f31c8dd15ccc1c086f1fa7bd2e1",
"activities/materials-03-Kinetic_Magic_Sand.pdf": "6e5916bdb2067fe6fcc497cf5176d8a4",
"activities/materials-04-What_is_the_best_material_to_build_a_paper_airplane_from.pdf": "1d0b09ae107a50f9fa494859a515dc58",
"activities/mechanical-01-Build_a_rubber_band_powered_car.pdf": "cffae897cf83e23877e4be3df50fcd0a",
"activities/mechanical-02-Build_a_roller_coaster.pdf": "0f127a785bcd4ffa8ab1f20f93078df5",
"activities/mechanical-03-Build_a_catapult_trebuchet.pdf": "77c9b4235e0ce5c4c0659d31e6ddc439",
"activities/power-01-Balloon_Static_Electricity.pdf": "4dd501792de6b465809df994644d86d7",
"activities/power-02-Build_a_mini_turbine.pdf": "cff5fae6a012c14b83cc5eb9ed72877a",
"activities/power-03-Power_systems_&_Electricity_word_search.pdf": "76d434f122380160d004a0e5d29d4dd3",
"activities/structural-01-Marble_Run.pdf": "ab42b9a7f803dbe0f6c9094c874354d7",
"activities/structural-02-Ice-cream_stick_bridge.pdf": "ce5f10e7c445b0c813f19a00f4d795c8",
"activities/structural-03-Block_house_building.pdf": "2c6f6807b69b484e0490f50424fc175f",
"activities/structural-04-Toothpick_Towers.pdf": "bb4c15144444e4aaad18d81e94969b11",
"assets/AssetManifest.json": "68e636813fdabeb059d4e35c2bdb0175",
"assets/assets/images/aerospace.png": "6cc634ea1dbe5c875011960d554b9e11",
"assets/assets/images/agricultural.png": "a7767b3a6b4fd2b36a7586f591e8dd9d",
"assets/assets/images/background.png": "0ce71c05c5f3c921edc3eeff9024e8ce",
"assets/assets/images/biomedical.png": "b34ff8b6e303f25e8d4844b5e9cb2d58",
"assets/assets/images/computer.png": "ef0c080f8723f1b6144f252f11493c36",
"assets/assets/images/environmental.png": "da12ab3bc9f0d1e4c39e0c4c7ca325ec",
"assets/assets/images/government-stacked-trans.jpg": "75dd5d86b765447f3628b2d5065c33b5",
"assets/assets/images/government-stacked-trans.png": "9190036696eb10cccd6c0e7ae2721be0",
"assets/assets/images/government-stacked.jpg": "3b471e7b2031975dc7c58649035d5f91",
"assets/assets/images/logo.png": "1bffb079d56d0612720f7e1a08df8379",
"assets/assets/images/manufacturing.png": "3cc7978eb687ad33e1b89ec0d86116b1",
"assets/assets/images/map.png": "d1ab31ce614e54309504299c08766e01",
"assets/assets/images/materials.png": "ee8cf066a515cd83217e9888a53b195c",
"assets/assets/images/mechanical.png": "77aa53a2b129a26fa13109d5156d2e50",
"assets/assets/images/power.png": "cd51d1c33c8d5b8fe74a6592754c7415",
"assets/assets/images/splashscreen.png": "b70e3be16304a6fbad339c77411888cc",
"assets/assets/images/stem.png": "ca2238f23329b9143ea4bcaa0198e91d",
"assets/assets/images/structural.png": "bcb2f5da4f0737bea15823fddd22c6b6",
"assets/assets/level.json": "ac88d9030db4dd3db2b1df9ccea4bdea",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "faa91fc2cf528a97e20e4d1f66f99c30",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "3878ccf8dfd397e002b35ffd1fc49531",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "a4601e1ab0e518c25d48c0f101e20af5",
"icons/Icon-512-maskable-512.png": "370595671f11cea028dc18306ed6f0d7",
"icons/Icon-512.png": "370595671f11cea028dc18306ed6f0d7",
"icons/Icon-maskable-192.png": "ecc808c37c66d2bb6327a8647ff3bfc6",
"index.html": "e127de32b57cf08e51fc0342572fbea4",
"/": "e127de32b57cf08e51fc0342572fbea4",
"main.dart.js": "50f5eb99faeb658a5e737cf2cde31ad6",
"manifest.json": "c121b5375e9871f55210408e2c819ee7",
"version.json": "42e7563b97c57eb6c3e8faa87b39f74d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
