"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Usage:
//
// import meta from 'import-meta'
// const {dirname, filename} = meta(import.meta)
//
var _default = function _default() {
  var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!meta.url) {
    throw new TypeError('Import meta, invalid meta data: url is required');
  }

  var url = new URL(meta.url);

  var dirname = _path.default.dirname(url.pathname);

  var filename = _path.default.basename(url.pathname);

  return {
    url: url,
    dirname: dirname,
    filename: filename
  };
};

exports.default = _default;