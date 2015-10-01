Package.describe({
  summary: "A meteor package for exif.js, a library for reading EXIF metadata from JPEG image files.",
  version: "0.0.1",
  git: "https//github.com/andrewcoelho/meteor-exif.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.add_files([
    'lib/js/exif.js',
  ], 'client');
});
