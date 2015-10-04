var fs = require('fs')
var path = require('path')

function createSymlink (src, dst) {
  try {
    fs.unlinkSync(dst)
  } catch (e) {}

  fs.symlinkSync(src, dst)
}

createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../css/bootstrap.css'), './public/css/bootstrap.css')
createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../css/bootstrap.css.map'), './public/css/bootstrap.css.map')
createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../fonts/glyphicons-halflings-regular.eot'), './public/fonts/glyphicons-halflings-regular.eot')
createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../fonts/glyphicons-halflings-regular.svg'), './public/fonts/glyphicons-halflings-regular.svg')
createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../fonts/glyphicons-halflings-regular.ttf'), './public/fonts/glyphicons-halflings-regular.ttf')
createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../fonts/glyphicons-halflings-regular.woff'), './public/fonts/glyphicons-halflings-regular.woff')
createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../fonts/glyphicons-halflings-regular.woff2'), './public/fonts/glyphicons-halflings-regular.woff2')
createSymlink(path.join(path.dirname(require.resolve('bootstrap')), '../js/bootstrap.js'), './public/js/bootstrap.js')
createSymlink(path.join(path.dirname(require.resolve('jquery')), 'jquery.js'), './public/js/jquery.js')
createSymlink(path.join(path.dirname(require.resolve('rdf-ext')), 'dist/rdf-ext.js'), './public/js/rdf-ext.js')
createSymlink(path.join(path.dirname(require.resolve('rdf-jsonify')), 'rdf-jsonify.js'), './public/js/rdf-jsonify.js')
