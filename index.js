var express = require('express')
var path = require('path')

module.exports = function () {
  var config = this

  config.app.use('/', express.static(path.join(__dirname, 'public')))
}
