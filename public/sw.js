self.addEventListener('install', function(e) (
  console.log('ServicrWorker Install');
), false);

self.addEventListener('activate', function(e) (
  console.log('ServicrWorker Activate');
), false);

self.addEventListener('fetch', function(e) (
  console.log('ServicrWorker Fetch');
), false);

